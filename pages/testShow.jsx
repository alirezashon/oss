/** @format */

import React, { useRef, useState, useEffect } from 'react'

const index = () => {
	const [project, setProject] = useState([])
	const svgRef = useRef(null)
  const issues = [
		{
			"summary": 'alioiiiiioio',
			"description": 'khodaya khodet komakam kon',
			// summary: 'ali',
			// description: 'ali',
			// branchCode: 'ali',
			// customer: 'ali',
			// branchName: 'ali',
			// agentName: 'ali',
			// province: 'ali',
			// city: 'ali',
			// address: 'ali',
			// INCordinateName: 'ali',
			// INCordinatePhone: 'ali',
		},
		{
			"summary": 'noooooooooooooooo',
			"description": 'it so dirty',
			// summary: 'ALIREZA AKBARI',
			// description: 'ALIREZA AKBARI',
			// branchCode: 'ALIREZA AKBARI',
			// customer: 'ALIREZA AKBARI',
			// branchName: 'ALIREZA AKBARI',
			// agentName: 'ALIREZA AKBARI',
			// province: 'ALIREZA AKBARI',
			// city: 'ALIREZA AKBARI',
			// address: 'ALIREZA AKBARI',
			// INCordinateName: 'ALIREZA AKBARI',
			// INCordinatePhone: 'ALIREZA AKBARI',
		},
	]
  useEffect(() => {
    issues.map(issue => (
      
      (async () => {
        const response = await fetch('/api/ticketing/fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            summary: issue.summary,
						description: issue.description,
          }),
        })
      })()
      ))
    }, [])
  }
export default index

// import { useEffect, useState } from 'react'

// export default function JiraAPI() {
// 	const [responses, setResponses] = useState([])

// 	useEffect(() => {
//     const issues = [
//       {
//         summary: 'ali',
//         description: 'ali',
// 					branchCode: 'ali',
// 					customer: 'ali',
// 					branchName: 'ali',
// 					agentName: 'ali',
// 					province: 'ali',
// 					city: 'ali',
// 					address: 'ali',
// 					INCordinateName: 'ali',
// 					INCordinatePhone: 'ali',
// 				},
// 				{
//           summary: 'ALIREZA AKBARI',
// 					description: 'ALIREZA AKBARI',
// 					branchCode: 'ALIREZA AKBARI',
// 					customer: 'ALIREZA AKBARI',
// 					branchName: 'ALIREZA AKBARI',
// 					agentName: 'ALIREZA AKBARI',
// 					province: 'ALIREZA AKBARI',
// 					city: 'ALIREZA AKBARI',
// 					address: 'ALIREZA AKBARI',
// 					INCordinateName: 'ALIREZA AKBARI',
// 					INCordinatePhone: 'ALIREZA AKBARI',
// 				},
// 			]
// 			// add more issues here

// 			const newResponses = []

//       async function createIssues() {
// 			for (const issue of issues) {
//         const requestBody = {
//           fields: {
//             project: {
//               key: 'BR',
// 						},
// 						summary: issue.summary,
// 						description: issue.description,
// 						customfield_13211: issue.branchCode,
// 						customfield_14037: issue.customer,
// 						customfield_12526: issue.branchName,
// 						customfield_12565: issue.agentName,
// 						customfield_12557: issue.province,
// 						customfield_12558: issue.city,
// 						customfield_11717: issue.address,
// 						customfield_12752: issue.INCordinateName,
// 						customfield_12753: issue.INCordinatePhone,
// 						issuetype: {
//               name: 'Digital Signage-MCI',
// 						},
// 					},
// 				}

// 				const response = await fetch(
//           `https://${process.env.JIRA_URL}/rest/api/2/issue`,
// 					{
//             method: 'POST',
// 						headers: {
// 							Authorization: `Basic ${Buffer.from(
// 								`${process.env.USER_NAME}:${process.env.API_TOKEN}`
// 							).toString('base64')}`,
// 							Accept: 'application/json',
// 						},
// 						body: JSON.stringify(requestBody),
// 					}
// 				)

// 				const data = await response.json()
// 				newResponses.push(data)
// 			}

// 			setResponses(newResponses)
// 		}

// 		createIssues()
// 	}, [])

// 	return (
// 		<div>
// 			{responses.map((response) => (
// 				<div className='text-white' key={response.key}>
// 					<p>Issue created successfully:</p>
// 					<p>Key: {response.key}</p>
// 					<p>Summary: {response.fields.summary}</p>
// 					<p>Description: {response.fields.description}</p>
// 				</div>
// 			))}
// 		</div>
// 	)
// }
// import { useEffect, useRef } from 'react'
// import * as d3 from 'd3'

// function MyPage() {
//   const svgRef = useRef(null)

//   useEffect(() => {
//     const svg = d3.select(svgRef.current)

//     // Define the data for the circles
//     const data = [1, 2, 3, 4, 5]

//     // Create the circles and add click event listeners
//     const circles = svg.selectAll('circle')
//       .data(data)
//       .enter()
//       .append('circle')
//       .attr('cx', (d, i) => (i + 1) * 70)
//       .attr('cy', 200)
//       .attr('r', 30)
//       .attr('fill', 'blue')
//       .on('click', function(event, d) {
//         // Handle click event
//         svg.selectAll('circle')
//           .attr('stroke', null)
//           .attr('stroke-width', null)

//         d3.select(this)
//           .attr('stroke', 'black')
//           .attr('stroke-width', 2)

//         event.stopPropagation()
//       })

//     // Add a click event listener to the SVG to hide the border
//     svg.on('click', function(event) {
//       circles.attr('stroke', null)
//       circles.attr('stroke-width', null)
//     })
//   }, [])

//   return (
//     <svg ref={svgRef} width="400" height="400"></svg>
//   )
// }

// export default MyPage
// /** @format */
// import Link from 'next/link'
// import React, { useRef, useState, useEffect } from 'react'
// import Image from 'next/image'
// const index = () => {
// 	const [issues, setIssues] = useState([])

// 	useEffect(() => {
// 		async function fetchData() {
// 			const response = await fetch('/api/currentTickets')
// 			const data = await response.json()
// 			setIssues(data.issues)
// 		}
// 		fetchData()
// 	}, [])

// 	return (
// 		<>
// 			<div
// 				className='text-white'
// 				style={{ height: '1000vh' }}>
// 				{issues.map((issue) => (
// 					<Link href={`/screens/issue/fetch/${issue.id}`}>
// 						<div key={issue.id}>
// 							<Image
// 								src={issue.fields.assignee.avatarUrls['24x24']}
// 								alt={issue.fields.assignee.name}
// 								width={48}
// 								height={48}
// 							/>
// 						</div>

// 						<p key={issue.id}>{issue.fields.assignee.avatarUrls['48x48']}</p>
// 					</Link>
// 				))}
// 			</div>
// 		</>
// 	)
// }
// export default index

/** @format */
// import { useRef, useEffect } from 'react'
// import * as d3 from 'd3'

// function Star() {
// 	// Set up a reference to the SVG element
// 	const svgRef = useRef()

// 	// const data = [1, 2, 3, 4, 5, 6, 7]
// 	const data = [
// 		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
// 		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
// 		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
// 		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
// 		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
// 		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
// 		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
// 		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
// 		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
// 		{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
// 		{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
// 		{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
// 	]

// 	// Use D3 to position the circles in a star pattern
// 	const radius = 133
// 	const angle = (2 * Math.PI) / data.length
// 	const centerX = 660
// 	const centerY = 330

// 	const positions = data.map((d, i) => {
// 		const x = centerX + radius * Math.cos(i * angle)
// 		const y = centerY + radius * Math.sin(i * angle)
// 		return [x, y]
// 	})

// 	// Use the useEffect hook to run D3 code when the component mounts
// 	useEffect(() => {
// 		const svg = d3.select(svgRef.current)

// 		const boardLabel = svg
// 			.append('circle')
// 			.attr('cx', centerX)
// 			.attr('cy', centerY)
// 			.attr('r', 30)
// 			.style('fill', '#499b01')
// 			.on('click', () => {
// 				// Create a group for the circles
// 				const circleGroup = svg.append('g')

// 				// Bind the data to the circles
// 				const circles = circleGroup
// 					.selectAll('circle')
// 					.data(data)
// 					.enter()
// 					.append('circle')

// 				// Set the attributes of the circles
// 				circles
// 					.attr('cx', (d, i) => positions[i][0])
// 					.attr('cy', (d, i) => positions[i][1])
// 					.attr('r', 30)
// 					// .attr('fill', 'red')

// 				const images = svg.append('g').selectAll('image').data(data)

// 				images
// 					.enter()
// 					.append('image')
// 					.attr('x', (d, i) => positions[i][0] - 30)
// 					.attr('y', (d, i) => positions[i][1] - 30)
// 					.attr('width', 60)
// 					.attr('height', 60)
// 					.attr('clip-path', 'url(#circleClip)')
// 					.attr('xlink:href', (d) => d.imageSrc)

// 				const imagesCircle = svg
// 					.append('g')
// 					.append('defs')
// 					.append('clipPath')
// 					.attr('id', 'circleClip')
// 					.selectAll('circle')
// 					.data(data)
// 					.enter()
// 					.append('circle')
// 					.attr('cx', (d, i) => positions[i][0])
// 					.attr('cy', (d, i) => positions[i][1])
// 					.attr('r', 30)
// 			})
// 		svg.on('click', function () {
// 			const target = event.target
// 			if (!boardLabel.nodes().includes(target)) {
// 				svg.selectAll('g').remove()
// 			}
// 		})
// 	}, [])

// 	// Return the SVG element
// 	return (
// 		<svg
// 			ref={svgRef}
// 			width='100%'
// 			height='100vh'>
// 			<g />
// 		</svg>
// 	)
// }

// export default Star

// import React, { useRef, useState, useEffect } from 'react'
// import * as d3 from 'd3'

// const index = () => {
// 	const svgRef = useRef(null)

// 	useEffect(() => {
// 		const svg = d3.select(svgRef.current)
// 		const { width, height } = svg.node().getBoundingClientRect()
// 		const quarterWidth = width / 4
// 		const quarterHeight = height / 4
// 		const radius = 30

// 		const circlesPositions = [
// 			{
// 				cx: quarterWidth,
// 				cy: quarterHeight - 11,
// 				src: '/images/icons/accounting.png',
// 			},
// 			{
// 				cx: 2 * quarterWidth,
// 				cy: quarterHeight - 11,
// 				src: '/images/icons/dashboard.png',
// 			},
// 			{
// 				cx: 3 * quarterWidth,
// 				cy: quarterHeight - 11,
// 				src: '/images/icons/email.png',
// 			},

// 			{
// 				cx: quarterWidth / 2,
// 				cy: 2 * quarterHeight - 11,
// 				src: '/images/icons/internet.png',
// 			},
// 			{
// 				cx: (3 * quarterWidth) / 2,
// 				cy: 2 * quarterHeight - 11,
// 				src: '/images/icons/leave.png',
// 			},
// 			{
// 				cx: (5 * quarterWidth) / 2,
// 				cy: 2 * quarterHeight - 11,
// 				src: '/images/icons/menu.png',
// 			},
// 			{
// 				cx: (7 * quarterWidth) / 2,
// 				cy: 2 * quarterHeight - 11,
// 				src: '/images/icons/personal.png',
// 			},

// 			{
// 				cx: quarterWidth,
// 				cy: 3 * quarterHeight - 11,
// 				src: '/images/icons/teamwork.png',
// 			},
// 			{
// 				cx: 2 * quarterWidth,
// 				cy: 3 * quarterHeight - 11,
// 				src: '/images/icons/tickets.png',
// 			},
// 			{
// 				cx: 3 * quarterWidth,
// 				cy: 3 * quarterHeight - 11,
// 				src: '/images/icons/timetable.png',
// 			},
// 		]
// 		const linesPositions = [
// 			//Top Left
// 			{
// 				x1: quarterWidth,
// 				x2: quarterWidth / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: quarterWidth,
// 				x2: (3 * quarterWidth) / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},

// 			//Top Center
// 			{
// 				x1: 2 * quarterWidth,
// 				x2: (3 * quarterWidth) / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: 2 * quarterWidth,
// 				x2: (5 * quarterWidth) / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			//Top Right
// 			{
// 				x1: 3 * quarterWidth,
// 				x2: (5 * quarterWidth) / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: 3 * quarterWidth,
// 				x2: (7 * quarterWidth) / 2,
// 				y1: quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			//Bottom Left
// 			{
// 				x1: quarterWidth,
// 				x2: quarterWidth / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: quarterWidth,
// 				x2: (3 * quarterWidth) / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			//Bottom Center
// 			{
// 				x1: 2 * quarterWidth,
// 				x2: (3 * quarterWidth) / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: 2 * quarterWidth,
// 				x2: (5 * quarterWidth) / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			//TBottom Right
// 			{
// 				x1: 3 * quarterWidth,
// 				x2: (5 * quarterWidth) / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 			{
// 				x1: 3 * quarterWidth,
// 				x2: (7 * quarterWidth) / 2,
// 				y1: 3 * quarterHeight - 11,
// 				y2: 2 * quarterHeight - 11,
// 			},
// 		]

// 		const lines = svg
// 			.selectAll('line')
// 			.data(linesPositions)
// 			.enter()
// 			.append('line')
// 			.attr('x1', quarterWidth * 2)
// 			.attr('y1', quarterHeight * 2)
// 			.attr('x2', quarterWidth * 2)
// 			.attr('y2', quarterHeight / 4)
// 			.transition()
// 			.duration(1111)
// 			.attr('x1', (d) => d.x1)
// 			.attr('x2', (d) => d.x2)
// 			.attr('y1', (d) => d.y1)
// 			.attr('y2', (d) => d.y2)
// 			.attr('stroke', '#a5cd39')
// 			.attr('stroke-width', 2)

// 		const circle = svg
// 			.selectAll('circle')
// 			.data(circlesPositions)
// 			.enter()
// 			.append('circle')
// 			.attr('cx', quarterWidth * 2)
// 			.attr('cy', quarterHeight * 2)
// 			.transition()
// 			.duration(1111)
// 			.attr('cx', (d, i) => d.cx)
// 			.attr('cy', (d, i) => d.cy)
// 			.attr('r', radius)
// 			.style('fill', '#FFF')
// 		const images = svg.append('g').selectAll('image').data(circlesPositions)

// 		images
// 			.enter()
// 			.append('image')
// 			.attr('x', quarterWidth * 2)
// 			.attr('y', quarterHeight * 2)
// 			.transition()
// 			.duration(1111)
// 			.attr('x', (d, i) => d.cx - radius)
// 			.attr('y', (d, i) => d.cy - radius)
// 			.attr('width', radius *2)
// 			.attr('height', radius *2)
// 			.attr('clip-path', 'url(#circleClip)')
// 			.attr('xlink:href', (d) => d.src)

// 		const imagesCircle = svg
// 			.append('g')
// 			.append('defs')
// 			.append('clipPath')
// 			.attr('id', 'circleClip')
// 			.selectAll('circle')
// 			.data(circlesPositions)
// 			.enter()
// 			.append('circle')
// 			.attr('cx', (d, i) => d.cx)
// 			.attr('cy', (d, i) => d.cy)
// 			.attr('r', radius +11)
// 	}, [])

// 	return (
// 		<>
// 			<svg
// 				style={{ backgroundColor: 'FFFFFF', marginLeft: '15%' }}
// 				ref={svgRef}
// 				width='70%'
// 				height='40vh'></svg>
// 		</>
// 	)
// }

// export default index
