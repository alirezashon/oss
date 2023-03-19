/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { useRouter } from 'next/router'


const index = () => {
	const [issues, setIssues] = useState([])
	const [project, setProject] = useState([])
	const [jql, setJql] = useState('assignee = currentUser() ')
	const router = useRouter()
	const svgRef = useRef(null)

	useEffect(() => {
		async function getProjectName() {
			const response = await fetch('/api/currentTickets/project', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const project = await response.json()
			setProject(project)
		}
		getProjectName()
	}, [])


		useEffect(() => {
			(async () => {
				const response = await fetch('/api/currentTickets', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ jql: 'assignee = currentUser()' }),
				})

				const data = await response.json()
				setIssues(data.issues)
			})()
		}, [])
	
 


	useEffect(() => {
		const svg = d3.select(svgRef.current)

		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 4
		const quarterHeight = height / 4
		// STAR----------------------------------------------------------------SELECTOR----------------------------------------------------------------

		const radius = 133
		const angle = (2 * Math.PI) / project.length

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
		const treeItems = svg.append('g')
		
		const centerline = treeItems
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
					return ((issues.length - 1) / 2) * 70 + 110
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
			.attr('id', 'ali')
			.attr('stroke', '#499b01')
			.attr('stroke-width', 2)
			
					// ---------------RECTS-------------

		const rects = treeItems
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

		const texts = treeItems
			.selectAll('text')
			.data(issues)
			.enter()
			.append('text')
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
			.style('cursor', 'pointer')
			.style('opacity', 0)
			.on('click', (event, d) => {
				// update URL and redirect to new URL with ID
				let id = d.key
				switch (id.split('-')[0]) {
					case 'SR':
						id = `/screens/issue/screen/SR/${d.key}`
						router.push(`/${id}`)
						break
					case 'IR':
						id = `/screens/issue/screen/IR/${d.key}`
						router.push(`/${id}`)
					case 'RFC':
						id = `/screens/issue/screen/RFC/${d.key}`
						router.push(`/${id}`)
				}
			})
			d3.range(10).forEach((i) => {
				setTimeout(() => {
					texts.style('opacity', 0.1 * i)
				}, i * 110)
			})
		
		
		// -----------------Star--------Selector ----------------
		//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
		const lines = svg.append('g').selectAll('line').data(project).enter()

		// ایجاد دایره اصلی و پیوست تصویر به آن
		const userImg = svg
			.append('defs')
			.append('clipPath')
			.attr('id', 'circle-clips')
			.append('circle')
			.attr('cx', 2.8 * quarterWidth)
			.attr('cy', quarterHeight / 2)
			.attr('r', 30)
			.attr('id', 'image')

		const userImgBox = svg
			.append('g')
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
			.attr('x2', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('y1', quarterHeight / 2)
			.attr('y2', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('fill', 'none')
			.attr('stroke', '#a5cd39')
			.attr('stroke-width', 2)

		const projectsBox = svg
			.append('g')
			.selectAll('circle')
			.data(project)
			.enter()
			.append('circle')
			.attr('cx', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('cy', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('r', 22)
			.style('fill', '#FFFFFF')
			.style('stroke', '#a5cd39')
			.style('stroke-width', '3px')
			.style('opacity', 0)

		setTimeout(() => {
			projectsBox.style('opacity', 1)
		}, 777)

		const projectsName = svg
			.append('g')
			.selectAll('text')
			.data(project)
			.enter()
			.append('text')
			.attr('x', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('y', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text((d) => d)
			.style('cursor', 'pointer')
			.style('opacity', 0)
			.on('click', (event, d) => {
				
			(async () => {
				const response = await fetch('/api/currentTickets', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						jql: `assignee = currentUser() and project = ${d}`,
					}),
				})
				const data = await response.json()
				setIssues(data.issues)
				})()
				treeItems.remove()
					svg.selectAll('#ali').remove()
			
			})
		setTimeout(() => {
			projectsName.style('opacity', 1)
		}, 600)

			
	
	}, [issues, jql, project])

	
	

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
