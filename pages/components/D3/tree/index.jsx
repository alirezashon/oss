/** @format */

import * as d3 from 'd3'

import { useState, useEffect, useRef } from 'react'
export default function index() {
	const svgRef = useRef()
    const [x,setX] = useState()
    
	const leftLine = [
		{ x: 222, y: 144 },
		{ x: 111, y: 166 },
	]
	const RightLine = [
		{ x: 222, y: 144 },
		{ x: 333, y: 166 },
	]
	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const centerX = width / 2
		const centerY = height / 2
		const boardLabelWidth = 222
		const boardLabelHeight = 66
		const centerLine = [
			{
				CX: centerX,
				CY: centerY / 4 - boardLabelHeight + boardLabelHeight,

				LX: centerX - 99,
				LY: centerY / 4 - boardLabelHeight + boardLabelHeight + 77,

				RX: centerX + 99,
				RY: centerY / 4 - boardLabelHeight + boardLabelHeight + 77,
			},
			{
				CX: centerX,
				CY: centerY / 4 - boardLabelHeight + boardLabelHeight + 33,

				LX: centerX,
				LY: centerY / 4 - boardLabelHeight + boardLabelHeight + 33,

				RX: centerX,
				RY: centerY / 4 - boardLabelHeight + boardLabelHeight + 33,
			},
	
		]

		const boardLabel = svg
			.append('rect')
			.attr('x', centerX - boardLabelWidth / 2)
			.attr('y', centerY / 4 - boardLabelHeight)
			.attr('width', boardLabelWidth)
			.attr('height', boardLabelHeight)
			.style('fill', '#a5cd39')
			.on('click', () => {
				// --------right----rect
				svg
					.append('rect')
					.attr('x', centerX + 99)
					.attr('y', centerY / 4 - boardLabelHeight + boardLabelHeight + 77)
					.attr('width', boardLabelWidth)
					.attr('height', boardLabelHeight/1.3)
					.style('fill', '#a5cd39')
				// --------left----rect

				svg
					.append('rect')
					.attr('x', centerX - 99 - boardLabelWidth)
					.attr('y', centerY / 4 - boardLabelHeight + boardLabelHeight + 77)
					.attr('width', boardLabelWidth)
					.attr('height', boardLabelHeight/1.3)
					.style('fill', '#a5cd39')

				// ----------------PATHS----------------
				const CenterLine = d3
					.line()
					.x((d) => d.CX)
					.y((d) => d.CY)

				const LeftLine = d3
					.line()
					.x((d) => d.LX)
					.y((d) => d.LY)
				const RightLine = d3
					.line()
					.x((d) => d.RX)
					.y((d) => d.RY)
				svg
					.append('path')
					.datum(centerLine)
					.attr('fill', 'none')
					.attr('stroke', '#499b01')
					.attr('stroke-width', 2)
					.attr('d', CenterLine)
				svg
					.append('path')
					.datum(centerLine)
					.attr('fill', 'none')
					.attr('stroke', 'steelblue')
					.attr('stroke-width', 2)
					.attr('d', LeftLine)
				svg
					.append('path')
					.datum(centerLine)
					.attr('fill', 'none')
					.attr('stroke', 'steelblue')
					.attr('stroke-width', 2)
					.attr('d', RightLine)
                })
                
                                svg
                                    .append('text')
                                    .attr('x', centerX)
                                    .attr('y', centerY / 4 - boardLabelHeight / 2)
                                    .attr('text-anchor', 'middle')
                                    .attr('alignment-baseline', 'middle')
                                    .text('alireza')
                                    .attr('fill', 'white')
	}, [])

	return (
		<>
			<div>
				<svg
					ref={svgRef}
					width={'100%'}
					height={'100vh'}>
					<g />
				</svg>
			</div>
		</>
	)
}
