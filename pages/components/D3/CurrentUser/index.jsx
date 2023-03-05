/** @format */

import { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'

const index = () => {
	// Set up a reference to the SVG element
	const [issues, setIssues] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/test')
			const d = await response.json()
			setIssues(d)
		}
		fetchData()
	}, [])
	const svgRef = useRef()

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 6
		const quarterHeight = height / 4

		const data = [
			{ x: 50, y: 50, imageSrc: '/images/me.jpg', key: 1 },
			{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png', key: 2 },
			{ x: 50, y: 150, imageSrc: '/images/me.jpg', key: 3 },
		]

		const radius = 133
		const angle = (2 * Math.PI) / data.length
		// ایجاد دایره ها در محیط یک دایره با گرفتن دیتای بالا موقعیت رو به دست میاره
		const positions = data.map((d, i) => {
			const x = 5 * quarterWidth + radius * Math.cos(i * angle)
			const y = quarterHeight + radius * Math.sin(i * angle)
			return [x, y]
		})

		//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
		const lines = svg.append('g').selectAll('line').data(data).enter()
		// ایجاد دایره اصلی و پیوست تصویر به آن
		const clipPath = svg
			.append('defs')
			.append('clipPath')
			.attr('id', 'circle-clips')
			.append('circle')
			.attr('cx', 5 * quarterWidth)
			.attr('cy', quarterHeight)
			.attr('r', 30)
			.attr('id', 'image')

		const boardLabel = svg
			.append('g')
			.attr('clip-path', 'url(#circle-clips)')
			.append('image')
			.attr('href', '/images/me.jpg')
			.attr('x', 5 * quarterWidth - 30)
			.attr('y', quarterHeight - 30)
			.attr('width', 60)
			.attr('height', 60)
			// رویداد اصلی باز شدن دایره های ستاره ای و خطوط
			.on('click', () => {
				// فراخوانی خطوط
				lines
					.append('line')
					.attr('x1', 5 * quarterWidth)
					.attr('x2', 5 * quarterWidth)
					.attr('y1', quarterHeight)
					.attr('y2', quarterHeight)
					.transition()
					.duration(1800)
					.attr('x1', 5 * quarterWidth)
					.attr('x2', (d, i) => positions[i][0])
					.attr('y1', quarterHeight)
					.attr('y2', (d, i) => positions[i][1])
					.attr('fill', 'none')
					.attr('stroke', '#a5cd39')
					.attr('stroke-width', 2)

				const images = svg.append('g').selectAll('image').data(data)

				images
					.enter()
					.append('image')
					// .attr('x', quarterWidth)
					// .attr('y', quarterHeight)
					// .transition()
					// .duration(1000)
					.attr('x', (d, i) => positions[i][0] - 30)
					.attr('y', (d, i) => positions[i][1] - 30)
					.attr('width', 60)
					.attr('height', 60)
					.attr('clip-path', 'url(#circleClip)')
					.attr('xlink:href', (d) => d.imageSrc)
					.on('mouseover', mouseIn)
					.on('mouseleave', mouseLeave)
					.on('click', onClick)

				const imagesCircle = svg
					.append('g')
					.append('defs')
					.append('clipPath')
					.attr('id', 'circleClip')
					.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')
					.attr('cx', 4 * quarterWidth)
					.attr('cy', quarterHeight)
					.transition()
					.duration(1000)
					.attr('cx', (d, i) => positions[i][0])
					.attr('cy', (d, i) => positions[i][1])
					.attr('r', 30)
			})
		// متد دکمه بستن
		const closeBtn = () => {
			svg
				.append('rect')
				.attr('x', '70vh')
				.attr('y', 22)
				.attr('width', 44)
				.attr('height', 33)
				.style('fill', 'red')
				.attr('id', 'closeBtn')
				.on('click', () => {
					svg.select('#showIssues').remove()
					svg.select('#closeBtn').remove()
					svg.select('#closeBtnTxt').remove()
				})
			svg
				.append('text')
				.attr('x', '72.7vh')
				.attr('y', 39)
				.attr('text-anchor', 'middle')
				.attr('alignment-baseline', 'middle')
				.text('ali')
				.attr('fill', 'white')
				.attr('id', 'closeBtnTxt')
				.on('click', () => {
					svg.select('#showIssues').remove()
					svg.select('#closeBtn').remove()
					svg.select('#closeBtnTxt').remove()
				})
		}
		// متد ساخت مستطیل جهت نمایش دیتا
		const createRect = () => {
			svg
				.append('rect')
				.attr('x', 1)
				.attr('y', 7)
				.attr('width', '77vh')
				.attr('height', '100vh')
				.attr('fill', '#FFFFFF')
				.attr('id', 'showIssues')
			svg
				.selectAll('text')
				.data(data)
				.enter()
				.append('text')
				.attr('x', (d, i) => i + 30 * 10)
				.attr('y', (d, i) => i + 30 * 10)
				.text((d) => d.key)
		}
		// متد های رویداد های دایره های ستاره ای جهت نمایش مستطیل محتوی
		const mouseIn = () => {
			createRect()
		}
		const mouseLeave = () => {
			svg.select('#showIssues').remove()
		}
		const onClick = (event) => {
			// گرفتن مختصات کلیک شده کاربر
			const x = event.clientX
			const y = event.clientY
			console.log(`Clicked at (${x}, ${y})`)
			createRect()
			closeBtn()
		}
		svg.on('click', function () {
			const target = event.target
			if (!boardLabel.nodes().includes(target)) {
				svg.selectAll('line').remove()
				svg.selectAll('#ali').remove()
			}
		})
	}, [])

	// Return the SVG element
	return (
		<>
			{issues.map((issue) => (
				<p className='text-white'>{issue}</p>
			))}
			<svg
				ref={svgRef}
				width='100%'
				height='100vh'>
				<g />
			</svg>
		</>
	)
}

export default index
