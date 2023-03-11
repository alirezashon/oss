/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'

const index = () => {
	const [issues, setIssues] = useState([])
	const [jql, setJql] = useState('assignee = currentUser() and project = SR')
	const svgRef = useRef(null)
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/currentTickets', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ jql: jql }),
			})

			const data = await response.json()
			setIssues(data.issues)
		}
		fetchData()
	}, [])

	useEffect(() => {
		const svg = d3.select(svgRef.current)

		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 4
		const quarterHeight = height / 4
		// STAR----------------------------------------------------------------SELECTOR----------------------------------------------------------------

		const starSelector = [
			{
				jql:'assignee = currentUser() and project = SR',
				project: { key: 'SR', banner: '/images/projects-logo/SR.png' },
				issues: [
					{
						imageSrc: '/images/projects/SR.png',
						key: 1,
						summary: 'CR o BR o beriz zamin , azin b bad bedin berin',
					},
					{
						imageSrc: '/images/projects/SR.png',
						key: 2,
						summary: 'DR , UI biain berin',
					},
					{
						imageSrc: '/images/me.jpg',
						key: 3,
						summary: 'dolar o solar biain narin',
					},
				],
			},

			{
				jql:'assignee = currentUser() and project = IR',
				project: { key: 'IR', banner: '/images/projects-logo/IR.png' },
				issues: [
					{
						imageSrc: '/images/me.jpg',
						key: 1,
						summary: 'CR o BR o beriz zamin , azin b bad bedin berin',
					},
					{
						imageSrc: '/images/icons/dashboard.png',
						key: 2,
						summary: 'DR , UI biain berin',
					},
					{
						imageSrc: '/images/me.jpg',
						key: 3,
						summary: 'dolar o solar biain narin',
					},
				],
			},
			{
				jql:'assignee = currentUser() and project = RFC',
				project: { key: 'RFC', banner: '/images/projects-logo/RFC.png' },
				issues: [
					{
						imageSrc: '/images/me.jpg',
						key: 1,
						summary: 'CR o BR o beriz zamin , azin b bad bedin berin',
					},
					{
						imageSrc: '/images/icons/dashboard.png',
						key: 2,
						summary: 'DR , UI biain berin',
					},
					{
						imageSrc: '/images/me.jpg',
						key: 3,
						summary: 'dolar o solar biain narin',
					},
				],
			},
		]
			
		const radius = 133
		const angle = (2 * Math.PI) / starSelector.length
		// ایجاد دایره ها در محیط یک دایره با گرفتن دیتای بالا موقعیت رو به دست میاره
		const positions = starSelector.map((d, i) => {
			const x = 2.8 * quarterWidth + radius * Math.cos(i * angle)
			const y = quarterHeight / 2 + radius * Math.sin(i * angle)
			return [x, y]
		})

		//------------------TREE--CODES----------------------------------------------------------------
		const x1 = quarterWidth / 2.8
		const x2 = quarterWidth * 1.3
		const projectRectWidth = 150
		const projectRectHeight = 50
		let paddingY = 40
		let lineY1 = 40
		let lineY2 = 40
		function generateSequence(n, arr) {
			if (n === 0) return arr
			const last = arr[arr.length - 1]
			const next = last === 1 ? 2 : 1
			return generateSequence(n - 1, [...arr, next])
		}
		const numberOfIssues = issues.length
		const treeData = generateSequence(numberOfIssues, [])

		
		const projectKey = svg
			.append('rect')
			.attr('x', quarterWidth - projectRectWidth / 2)
			.attr('y', 27)
			.attr('width', projectRectWidth)
			.attr('height', projectRectHeight)
			.attr('rx', 11)
			.attr('ry', 11)
			.style('fill', 'none')
			.style('stroke', '#499b01')
			.style('stroke-width', '2px')
			.style('fill', '#FFFFFF')
			.on('click', (event, d) => {
				setJql('aa')
			})

		svg
			.append('text')
			.attr('x', quarterWidth)
			.attr('y', 50)
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text('alireza')
			.attr('fill', 'darkgreen')
			.style('cursor', 'pointer')

		
			// ----------------خط وسط ----------------
			const centerline = svg
				.append('g')
				.selectAll('line')
				.data(issues)
				.enter()
				.append('line')
				.transition()
				.duration(500)
				.attr('x1', quarterWidth)
				.attr('x2', quarterWidth)
				.attr('y1', 77)
				.attr('y2', (d) => {
					if (issues.length < 3) {
						return 110
					} else {
						return ((issues.length -1) /2)  *( 70 ) +110
					}
				})
				.attr('stroke', '#a5cd39')
				.attr('stroke-width', 2)


			const treeLines = svg
				.append('g')
				.selectAll('line')
				.data(treeData)
				.enter()
				.append('line')
				.transition()
				.duration(500)
				.attr('x1', quarterWidth)
				.attr('x2', (d, i) => (i % 2 === 0 ? x1 + projectRectWidth : x2))
				.attr('y1', (d, i) => {
					if (i % 2 === 0) {
						lineY1 += 70
						return lineY1
					}
					return lineY1
				})
				.attr('y2', (d, i) => {
					if (i % 2 === 0) {
						lineY2 += 70
						return lineY2 + projectRectHeight / 2
					}
					return lineY2 + projectRectHeight / 2
				})
				.attr('stroke', '#499b01')
				.attr('stroke-width', 2)

			// ---------------RECTS-------------

			const rects = svg
				.append('g')
				.selectAll('rect')
				.data(treeData)
				.enter()
				.append('rect')
				.transition()
				.duration(500)
				.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
				.attr('y', (d, i) => {
					if (i % 2 === 0) {
						paddingY += 70

						return paddingY
					}

					return paddingY
				})
				.attr('width', projectRectWidth)
				.attr('height', projectRectHeight)
				.attr('rx', 11)
				.style('fill', '#FFFFFF')
				.style('stroke', '#a5cd39')
				.style('stroke-width', '3px')
				 
			
			paddingY = 40
			

			const texts = svg
				.append('g')
				.selectAll('text')
				.data(issues)
				.enter()
				.append('text')
				.transition()
				.duration(500)
				.attr('x', (d, i) =>
					i % 2 === 0 ? x1 + projectRectWidth / 2 : x2 + projectRectWidth / 2
				)
				.attr('y', (d, i) => {
					if (i % 2 === 0) {
						paddingY += 70
						return paddingY + projectRectHeight / 2
					}

					return paddingY + projectRectHeight / 2
				})
				.attr('text-anchor', 'middle')
				.attr('alignment-baseline', 'middle')
				.text((d, i) => d.key)
				.attr('fill', 'darkgreen')
			
		
		

		// -----------------Star--------Selector ----------------
		//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
		const lines = svg.append('g').selectAll('line').data(starSelector).enter()
		const starItems = svg.append('g')

		// ایجاد دایره اصلی و پیوست تصویر به آن
		const userImg = starItems
			.append('defs')
			.append('clipPath')
			.attr('id', 'circle-clips')
			.append('circle')
			.attr('cx', 2.8 * quarterWidth)
			.attr('cy', quarterHeight / 2)
			.attr('r', 30)
			.attr('id', 'image')

		const userImgBox = starItems
			.attr('clip-path', 'url(#circle-clips)')
			.append('image')
			.attr('href', '/images/me.jpg')
			.attr('x', 2.8 * quarterWidth - 30)
			.attr('y', quarterHeight / 2 - 30)
			.attr('width', 60)
			.attr('height', 60)
		// رویداد اصلی باز شدن دایره های ستاره ای و خطوط

		// if (!userImg.nodes().includes(target)) {
		// 	// svg.selectAll('line').remove()

		// }

		// Star Selector Events functions

	
			// فراخوانی خطوط
			lines
				.append('line')
				.attr('x1', 2.8 * quarterWidth)
				.attr('x2', 2.8 * quarterWidth)
				.attr('y1', quarterHeight / 2)
				.attr('y2', quarterHeight / 2)
				.transition()
				.duration(1800)
				.attr('x1', 2.8 * quarterWidth)
				.attr('x2', (d, i) => positions[i][0])
				.attr('y1', quarterHeight / 2)
				.attr('y2', (d, i) => positions[i][1])
				.attr('fill', 'none')
				.attr('stroke', '#a5cd39')
				.attr('stroke-width', 2)

			const projectImage = svg.append('g').selectAll('image').data(starSelector)

			projectImage
				.enter()
				.append('image')
				.attr('x', (d, i) => positions[i][0] - 30)
				.attr('y', (d, i) => positions[i][1] - 30)
				.attr('width', 60)
				.attr('height', 60)
				.attr('clip-path', 'url(#circleClip)')
				.attr('xlink:href', (d) => d.project.banner)
			
			
			const projectImageBox = svg
				.append('g')
				.append('defs')
				.append('clipPath')
				.attr('id', 'circleClip')
				.selectAll('circle')
				.data(starSelector)
				.enter()
				.append('circle')
				.attr('cx', 2 * quarterWidth)
				.attr('cy', quarterHeight)
				.transition()
				.duration(1000)
				.attr('cx', (d, i) => positions[i][0])
				.attr('cy', (d, i) => positions[i][1])
				.attr('r', 30)
				.attr('stroke', 'red')
				.attr('stroke-width', 5)
				// .on('click', (event, d) => {
					
				// })
		
		
		
		

		
		

		
		
		
		
			

			// treeOpen()
		
		
		// svg.on('click', (event) => {
		// 	const target = event.target
		// 	switch (event.target) {
		// 		case projectKey.node():
		// 			break
		// 			case userImgBox.node():
		// 				setJql('')
		// 			break
		// 	}
		// })
		// STAR----SELECTOR--------****-----****
	}, [issues,jql])

	return (
		<>
			<svg
				ref={svgRef}
				width='100%'
				height='fit-content'></svg>
		</>
	)
}

export default index
