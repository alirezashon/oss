/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'

function MyD3Component() {
	const [issues, setIssues] = useState([])
	const data = [
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
	]

	const svgRef = useRef(null)
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/currentTickets')
			const data = await response.json()
			setIssues(data.issues)
		}
		fetchData()
	}, [])

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const centerX = width / 2
		const centerY = height / 2
		const radius = 222
		const angle = (2 * Math.PI) / data.length
		const positions = data.map((d, i) => {
			const x = centerX + radius * Math.cos(i * angle)
			const y = centerY + radius * Math.sin(i * angle)
			return [x, y]
		})
 const defs = svg.append('defs')
 const clipPath = defs.append('clipPath').attr('id', 'circle-clip')

 clipPath.append('circle').attr('cx', centerX).attr('cy', centerY).attr('r', 30)

 const boardLabel = svg
		.append('g')
		.attr('clip-path', 'url(#circle-clip)')
		.append('image')
		.attr('href','/images/me.jpg')
		.attr('x', centerX - 30)
		.attr('y', centerY -30)
		.attr('width', 60)
		.attr('height',60)
	


			.on('click', () => {
				const circleGroup = svg.append('g')
				const circles = circleGroup
					.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')
				svg.append('g')
				circles
					.attr('cx', centerX)
					.attr('cy', 0)
					.transition()
					.duration(777)
					.attr('cx', (d, i) => positions[i][0])
					.attr('cy', (d, i) => positions[i][1])
					.attr('r', 30)
					.style('fill', () => d3.interpolateRainbow(Math.random()))

				const images = svg.append('g').selectAll('image').data(data)

				images
					.enter()
					.append('image')

					.attr('x', (d, i) => positions[i][0] - 30)
					.attr('y', (d, i) => positions[i][1] - 30)
					.attr('width', 60)
					.attr('height', 60)
					.attr('clip-path', 'url(#circleClip)')
					.attr('xlink:href', (d) => d.imageSrc)
					.on('mouseover', () => {
						svg
							.append('rect')
							.attr('x', 77)
							.attr('y', 77)
							.attr('width', 177)
							.attr('height', 170)
							.attr('rx', 990)
							.attr('ry', 9)
							.attr('fill', '#499b01')
					})

				const imagesCircle = svg
					.append('g')
					.append('defs')
					.append('clipPath')
					.attr('id', 'circleClip')
					.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')
					.attr('cx', (d, i) => positions[i][0])
					.attr('cy', (d, i) => positions[i][1])
					.attr('r', 30)
			})
		// const boradText = svg
		// 	.append('text')
		// 	.attr('x', centerX)
		// 	.attr('y', centerY)
		// 	.attr('text-anchor', 'middle')
		// 	.attr('alignment-baseline', 'middle')
		// 	.text('alireza akbariovi"c')
		// 	.attr('fill', 'white')
		// // svg.on('click', (e) => {
		// 	const target = e.target
		// 	if (!boardLabel.nodes().includes(target)) {
		// 		svg.selectAll('g').remove()
		// 	}
		// })
	}, [])

	return (
		<>
			<svg
				ref={svgRef}
				width='100%'
				height='100vh'></svg>
		</>
	)
}

export default MyD3Component

// const lines = svg
// 	.append('g')
// 	.selectAll('line')
// 	.data(data)
// 	.enter()
// 	.append('line')
// 	.transition()
// 	.duration(500)
// 	.attr('x1', centerX)
// 	.attr('x2', (d, i) => positions[i][0])
// 	.attr('y1', centerY)
// 	.attr('y2', (d, i) => positions[i][1])
// 	.attr('stroke', '#a5cd39')
// 	.attr('stroke-width', 2)
// svg.selectAll('g').remove()
