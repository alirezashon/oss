/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'

function MyD3Component() {
	const [issues, setIssues] = useState([])
	const [obj, setObj] = useState({})
	const svgRef = useRef(null)
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/currentTickets')
			const data = await response.json()
			setIssues(data.issues)
			setObj(data)
		}
		fetchData()
	}, [])


	function generateSequence(n, arr) {
		if (n === 0) return arr
		const last = arr[arr.length - 1]
		const next = last === 1 ? 2 : 1
		return generateSequence(n - 1, [...arr, next])
	}

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const centerX = width / 2
		const centerY = height / 2
		const x1 = centerX / 1.55
		const x2 = centerX * 1.19
		const boardLabelWidth = 150
		const boardLabelHeight = 50
		let y = 40
		let lineY1 = 40
		let lineY2 = 40
		const centerLine = [
			{
				CX: centerX,
				CY: 77,
			},
			{
				CX: centerX,
				CY: centerY / 2,
			},
		]
		const total = obj.total

		const data = generateSequence(37, [])

		const boardLabel = svg
			.append('rect')
			.attr('x', centerX - boardLabelWidth / 2)
			.attr('y', 27)
			.attr('width', boardLabelWidth)
			.attr('height', boardLabelHeight)
			.style('fill', '#a5cd39')
			.on('click', () => {
				// ----------------PATHS----------------
				const line = svg
					.append('g')
					.append('path')
					.datum(centerLine)
					.transition()
					.duration(100)
					.attr('fill', 'none')
					.attr('stroke', '#499b01')
					.attr('stroke-width', 2)
					.attr(
						'd',
						d3
							.line()
							.x((d) => d.CX)
							.y((d) => d.CY)
					)

				const lines = svg
					.append('g')
					.selectAll('line')
					.data(data)
					.enter()
					.append('line')
					.transition()
					.duration(500)
					.attr('x1', centerX)
					.attr('x2', (d, i) => (i % 2 === 0 ? x1 + boardLabelWidth : x2))
					.attr('y1', (d, i) => {
						if (i % 2 === 0) {
							lineY1 += 60
							return lineY1
						}
						return lineY1
					})
					.attr('y2', (d, i) => {
						if (i % 2 === 0) {
							lineY2 += 70
							return lineY2 + boardLabelHeight / 2
						}
						return lineY2 + boardLabelHeight / 2
					})
					.attr('stroke', '#a5cd39')
					.attr('stroke-width', 2)

				// ---------------RECTS-------------

				const rects = svg
					.append('g')
					.selectAll('rect')
					.data(data)
					.enter()
					.append('rect')
					.transition()
					.duration(500)
					.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
					.attr('y', (d, i) => {
						if (i % 2 === 0) {
							y += 70

							return y
						}

						return y
					})
					.attr('width', boardLabelWidth)
					.attr('height', boardLabelHeight)
					.style('fill', () => d3.interpolateRainbow(Math.random()))
				y = 40
				const texts = svg
					.append('g')
					.selectAll('text')
					.data(issues)
					.enter()
					.append('text')
					.transition()
					.duration(500)
					.attr('x', (d, i) =>
						i % 2 === 0 ? x1 + boardLabelWidth / 2 : x2 + boardLabelWidth / 2
					)
					.attr('y', (d, i) => {
						if (i % 2 === 0) {
							y += 70
							return y + boardLabelHeight / 2
						}

						return y + boardLabelHeight / 2
					})
					.attr('text-anchor', 'middle')
					.attr('alignment-baseline', 'middle')
					.text((d, i) => d.key)

					.attr('fill', 'white')
			})

		svg
			.append('text')
			.attr('x', centerX)
			.attr('y', 27 + boardLabelHeight / 2)
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text('alireza')
			.attr('fill', 'white')

		svg.on('click', function () {
			const target = event.target
			if (!boardLabel.nodes().includes(target)) {
				svg.selectAll('g').remove()
				y = 40
				lineY1 = 40
				lineY2 = 40
			}
		})
	}, [issues])

	return (
		<>
			<svg
				ref={svgRef}
				width='100%'
				height='99888vh'>
			</svg>
			{issues.map(issue => (
				<p className='text-white'>{ issue.key}</p>
			))}
		</>
	)
}

export default MyD3Component

// import React, { useRef, useEffect } from 'react'
// import * as d3 from 'd3'

// function MyD3Component() {
// 	const svgRef = useRef(null)

// 	function generateSequence(n, arr) {
// 		if (n === 0) return arr
// 		const last = arr[arr.length - 1]
// 		const next = last === 1 ? 2 : 1
// 		return generateSequence(n - 1, [...arr, next])
// 	}

// 	useEffect(() => {
// 		const svg = d3.select(svgRef.current)

// 		const x1 = 450
// 		const x2 = 850
// 		let y = 40
// 		const data = generateSequence(12, [])

// 		svg
// 			.selectAll('rect')
// 			.data(data)
// 			.enter()
// 			.append('rect')
// 			.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
// 			.attr('y', (d, i) => {
// 				if (i % 2 === 0) {
// 					y += 70
//           console.log(y)
//           return y
// 				}
//         console.log(y)
//         return y
// 			})
// 			.attr('width', 150)
// 			.attr('height', 50)
// 			.style('fill', () => d3.interpolateRainbow(Math.random()))
// 			.append('title')
// 			// .text(() => `Rectangle ${Math.random().toString(36).substr(2, 5)}`)
// 	}, [])

// 	return (
// 		<svg
// 			ref={svgRef}
// 			width='100%'
// 			height='100vh'></svg>
// 	)
// }

// export default MyD3Component

// import { useEffect, useRef } from "react"
// import * as d3 from "d3"

// const Rectangles = () => {
//   const svgRef = useRef(null)

//   useEffect(() => {
//     const svg = d3.select(svgRef.current)

//     const data = ["alireza", "akbari", "SOG"]
//     const posX = [222, 444]
//     const posY = [77, 222]

//     const rectAndText = svg
//       .selectAll("rect, text")
//       .data(data)
//       .enter()
//       .append("g")

//     rectAndText
//       .append("rect")
//       .attr("x", (d,i) => posX[i])
//       .attr("y", (d) => d.y * 2)
//       .attr("width", 150)
//       .attr("height", 50)
//       .style("fill", "steelblue")

//     rectAndText
//       .append("text")
//       .text((d) => d.label)
//       .attr("x", (d) => d.x * 2 + 75)
//       .attr("y", (d) => d.y * 2 + 25)
//       .style("text-anchor", "middle")
//       .style("font-size", "16px")
//       .style("fill", "white")
//   }, [])

//   return <svg ref={svgRef} width="100%" height="100vh"></svg>
// }

// export default Rectangles

// import { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Rectangles = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     const data = [
//         { x: 222, y: 111,  label: 'Rectangle 1' },
//         { x: 444, y: 50,  label: 'Rectangle 2' },
//         { x: 444, y: 111,  label: 'Rectangle 3' },
//         { x: 222, y: 50,  label: 'Rectangle 4' },
//       ];

//     const rectAndText = svg.selectAll('rect, text')
//     .data(data)
//     .enter()
//     .append('g');

//     rectAndText.append('rect')
//     .attr('x', (d) => d.x * 2)
//     .attr('y', (d) => d.y * 2)
//     .attr('width', 150)
//     .attr('height', 50)
//     .style('fill', 'steelblue');

//     rectAndText.append('text')
//       .text(d => d.label)
//       .attr('x', (d) => d.x * 2 + 75 )
//       .attr('y', (d) => d.y * 2 +25)
//       .style('text-anchor', 'middle')
//       .style('font-size', '16px')
//       .style('fill', 'white');

//   }, []);

//   return (
//     <svg ref={svgRef} width="100%" height="100vh">
//     </svg>
//   );
// };

// export default Rectangles;
