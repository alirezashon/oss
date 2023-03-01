/** @format */
import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

function Star() {
	// Set up a reference to the SVG element
	const svgRef = useRef()

	// const data = [1, 2, 3, 4, 5, 6, 7]
	const data = [
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
	]

	// Use D3 to position the circles in a star pattern
	const radius = 133
	const angle = (2 * Math.PI) / data.length
	const centerX = 660
	const centerY = 330

	const positions = data.map((d, i) => {
		const x = centerX + radius * Math.cos(i * angle)
		const y = centerY + radius * Math.sin(i * angle)
		return [x, y]
	})

	// Use the useEffect hook to run D3 code when the component mounts
	useEffect(() => {
		const svg = d3.select(svgRef.current)

		const boardLabel = svg
			.append('circle')
			.attr('cx', centerX)
			.attr('cy', centerY)
			.attr('r', 30)
			.style('fill', '#499b01')
			.on('click', () => {
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
					// .attr('fill', 'red')
				
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

export default Star
