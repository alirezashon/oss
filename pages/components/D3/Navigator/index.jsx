/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'

const index = () => {
	const svgRef = useRef(null)

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 4
		const quarterHeight = height / 4
		const radius = 30

		
		
		
		
		

		const circlesPositions = [
			{
				cx: quarterWidth,
				cy: quarterHeight - 11,
				src: '/images/icons/accounting.png',
			},
			{
				cx: 2 * quarterWidth,
				cy: quarterHeight - 11,
				src: '/images/icons/dashboard.png',
			},
			{
				cx: 3 * quarterWidth,
				cy: quarterHeight - 11,
				src: '/images/icons/email.png',
			},

			{
				cx: quarterWidth / 2,
				cy: 2 * quarterHeight - 11,
				src: '/images/icons/internet.png',
			},
			{
				cx: (3 * quarterWidth) / 2,
				cy: 2 * quarterHeight - 11,
				src: '/images/icons/leave.png',
			},
			{
				cx: (5 * quarterWidth) / 2,
				cy: 2 * quarterHeight - 11,
				src: '/images/icons/menu.png',
			},
			{
				cx: (7 * quarterWidth) / 2,
				cy: 2 * quarterHeight - 11,
				src: '/images/icons/personal.png',
			},

			{
				cx: quarterWidth,
				cy: 3 * quarterHeight - 11,
				src: '/images/icons/teamwork.png',
			},
			{
				cx: 2 * quarterWidth,
				cy: 3 * quarterHeight - 11,
				src: '/images/icons/tickets.png',
			},
			{
				cx: 3 * quarterWidth,
				cy: 3 * quarterHeight - 11,
				src: '/images/icons/timetable.png',
			},
		]
		const linesPositions = [
			//Top Left
			{
				x1: quarterWidth,
				x2: quarterWidth / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: quarterWidth,
				x2: (3 * quarterWidth) / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},

			//Top Center
			{
				x1: 2 * quarterWidth,
				x2: (3 * quarterWidth) / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: 2 * quarterWidth,
				x2: (5 * quarterWidth) / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			//Top Right
			{
				x1: 3 * quarterWidth,
				x2: (5 * quarterWidth) / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: 3 * quarterWidth,
				x2: (7 * quarterWidth) / 2,
				y1: quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			//Bottom Left
			{
				x1: quarterWidth,
				x2: quarterWidth / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: quarterWidth,
				x2: (3 * quarterWidth) / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			//Bottom Center
			{
				x1: 2 * quarterWidth,
				x2: (3 * quarterWidth) / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: 2 * quarterWidth,
				x2: (5 * quarterWidth) / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			//TBottom Right
			{
				x1: 3 * quarterWidth,
				x2: (5 * quarterWidth) / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
			{
				x1: 3 * quarterWidth,
				x2: (7 * quarterWidth) / 2,
				y1: 3 * quarterHeight - 11,
				y2: 2 * quarterHeight - 11,
			},
		]

		const lines = svg
			.selectAll('line')
			.data(linesPositions)
			.enter()
			.append('line')
			.attr('x1', quarterWidth * 2)
			.attr('y1', quarterHeight * 2)
			.attr('x2', quarterWidth * 2)
			.attr('y2', quarterHeight / 4)
			.transition()
			.duration(1111)
			.attr('x1', (d) => d.x1)
			.attr('x2', (d) => d.x2)
			.attr('y1', (d) => d.y1)
			.attr('y2', (d) => d.y2)
			.attr('stroke', '#a5cd39')
			.attr('stroke-width', 2)

		const circle = svg
			.selectAll('circle')
			.data(circlesPositions)
			.enter()
			.append('circle')
			.attr('cx', quarterWidth * 2)
			.attr('cy', quarterHeight * 2)
			.transition()
			.duration(1111)
			.attr('cx', (d, i) => d.cx)
			.attr('cy', (d, i) => d.cy)
			.attr('r', radius)
			.style('fill', '#FFF')
		const images = svg.append('g').selectAll('image').data(circlesPositions)

		images
			.enter()
			.append('image')
			.attr('x', quarterWidth * 2)
			.attr('y', quarterHeight * 2)
			.transition()
			.duration(1111)
			.attr('x', (d, i) => d.cx - radius)
			.attr('y', (d, i) => d.cy - radius)
			.attr('width', radius *2)
			.attr('height', radius *2)
			.attr('clip-path', 'url(#circleClip)')
			.attr('xlink:href', (d) => d.src)

		const imagesCircle = svg
			.append('g')
			.append('defs')
			.append('clipPath')
			.attr('id', 'circleClip')
			.selectAll('circle')
			.data(circlesPositions)
			.enter()
			.append('circle')
			.attr('cx', (d, i) => d.cx)
			.attr('cy', (d, i) => d.cy)
			.attr('r', radius +11)
	}, [])

	return (
		<>
			<svg
				style={{ backgroundColor: 'FFFFFF', marginLeft: '15%' }}
				ref={svgRef}
				width='70%'
				height='40vh'></svg>
		</>
	)
}

export default index
