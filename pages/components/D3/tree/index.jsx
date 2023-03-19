/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { useRouter } from 'next/router'


const index = ({props}) => {
	const [issues, setIssues] = useState([])
	const svgRef = useRef(null)
	const router = useRouter()

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/searchEngine', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					field: props.field,
					value: props.value,
				}),
			})

			const data = await response.json()
			setIssues(data.issues)
		}
		fetchData()
	}, [])

	useEffect(() => {
		const svg = d3.select(svgRef.current)

		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 2
		const quarterHeight = height / 4


	
	

		//------------------TREE--CODES----------------------------------------------------------------
		const x1 = quarterWidth / 1.52
		const x2 = quarterWidth * 1.16
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
				} else if (issues.length % 2 == 0) {
					return ((issues.length - 1) / 2) * 70 + 75
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
					case 'BR':
						id = `/screens/issue/screen/BR/${d.key}`
						router.push(`/${id}`)
						break
					case 'BI':
						id = `/screens/issue/screen/BI/${d.key}`
						router.push(`/${id}`)
				}
			})
			setTimeout(() => {
				texts.style('opacity', 1)
			}, 600)
			
		
		
		
	
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
	}, [issues])

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
