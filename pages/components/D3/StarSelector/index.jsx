/** @format */

import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const index = () => {
    
	// Set up a reference to the SVG element
	const svgRef = useRef()


	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 6
		const quarterHeight = height / 4

		const data = [
			{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
			{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
			{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
 
		]

		const radius = 133
		const angle = (2 * Math.PI) / data.length
		

		const positions = data.map((d, i) => {
			const x = quarterWidth + radius * Math.cos(i * angle)
			const y = quarterHeight+ radius * Math.sin(i * angle)
			return [x, y]
		})

		const boardLabel = svg
			.append('circle')
			.attr('cx', quarterWidth)
			.attr('cy', quarterHeight)
			.attr('r', 30)
			.style('fill', '#499b01')

			.on('click', () => {
				const lines = svg
					.append('g')
					.selectAll('line')
					.data(data)
					.enter()
					.append('line')
					.attr('x1', quarterWidth)
					.attr('x2', quarterWidth)
					.attr('y1',quarterHeight)
					.attr('y2',quarterHeight)
					.transition()
					.duration(1000)
					.attr('x1', quarterWidth)
					.attr('x2', (d, i) => positions[i][0])
					.attr('y1', quarterHeight)
					.attr('y2', (d, i) => positions[i][1])
					.attr('fill', 'none')
					.attr('stroke', '#a5cd39')
					.attr('stroke-width', 2)

				// Create a group for the circles
				const circleGroup = svg.append('g')

				// Bind the data to the circles
				const circles = circleGroup
					.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')

				// Set the attributes of the circles
				circles
					.attr('cx', (d, i) => positions[i][0])
					.attr('cy', (d, i) => positions[i][1])
					.attr('r', 30)
					.style('fill', '#021216')
				// .attr('fill', 'red')

				const images = svg.append('g').selectAll('image').data(data)

				images
					.enter()
					.append('image')
					.attr('x', quarterWidth)
					.attr('y', quarterHeight)
					.transition()
					.duration(1000)
					.attr('x', (d, i) => positions[i][0] - 30)
					.attr('y', (d, i) => positions[i][1] - 30)
					.attr('width', 60)
					.attr('height', 60)
					.attr('clip-path', 'url(#circleClip)')
					.attr('xlink:href', (d) => d.imageSrc)

				const imagesCircle = svg
					.append('g')
					.append('defs')
					.append('clipPath')
					.attr('id', 'circleClip')
					.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')
					.attr('cx', quarterWidth)
					.attr('cy',quarterHeight)
					.transition()
					.duration(1000)
					.attr('cx', (d, i) => positions[i][0])
					.attr('cy', (d, i) => positions[i][1])
                    .attr('r', 30)
                
				boardLabel.raise()
                
			})
		svg.on('click', function () {
			const target = event.target
			if (!boardLabel.nodes().includes(target)) {
				svg.selectAll('g').remove()
			}
		})
	}, [])

	// Return the SVG element
	return (
		<svg
			ref={svgRef}
			width='100%'
			height='100vh'>
			<g />
		</svg>
	)
}

export default index
