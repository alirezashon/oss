/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { useRouter } from 'next/router'
import { HiArrowCircleUp } from 'react-icons/hi'

const index = () => {
	const [issues, setIssues] = useState([])
	const router = useRouter()
	const svgRef = useRef(null)
	const inputRef = useRef(null)
	const inputFile = useRef(null)
	const [rows, setRows] = useState([])
	//   const [value, setValue] = useState([359760091895140, 359760091814182, 869492053878244, 862343030750005,359760091887998])


	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0]
		const reader = new FileReader()

		reader.onload = (event) => {
			const csvText = event.target.result
			const rows = csvText.split('\n').map((row) => row.split(','))
			setRows(rows)
			console.log(rows)
		}

		reader.readAsText(selectedFile)
	}

	
	useEffect(() => {
		;(async () => {
			const response = await fetch('/api/searchEngine', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					field: 'IMEI',
					value: [
						359760091895140, 359760091814182, 869492053878244, 862343030750005,
					],
				}),
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
		const textInput = d3.select(inputRef.current)
		textInput.on('input', function () {
			;(async () => {
					const response = await fetch('/api/searchEngine', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							field: 'IMEI',
							value: [this.value],
						}),
					})
					const data = await response.json()
					setIssues(data.issues)
			})()
			treeItems.remove()
			svg.selectAll('#ali').remove()
		})
	
			const fileInput = d3.select(inputFile.current)
			fileInput.on('input', function () {
				;(async () => {
					const response = await fetch('/api/searchEngine', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							field: 'IMEI',
							value: rows,
						}),
					})
					const data = await response.json()
					setIssues(data.issues)
				})()
				treeItems.remove()
				svg.selectAll('#ali').remove()
			})
		
		
	}, [issues])

	return (
		<>
			<div className='search-engine-input-box'>
				<form className='search-engine-input-box-values-form'>
					<div className='search-engine-value-box'>
						<div class='wrapper'>
							<div class='file-upload'>
								<input
									type='file'
									onChange={handleFileChange}
									ref={inputFile}
								/>
								<HiArrowCircleUp />
							</div>
						</div>
					</div>
					<div className='search-engine-field-box'>
						<input
							type='text'
							className='search-engine-input-box-values-text'
							placeholder='value'
							ref={inputRef}
						/>
						<select className='search-engine-input-field-labels'>
							<option className='search-engine-input-field-label'>IMEI</option>
							<option className='search-engine-input-field-label'>
								ASSIGNEE
							</option>
							<option className='search-engine-input-field-label'>
								APPROVAL
							</option>
							<option className='search-engine-input-field-label'>
								CREATED
							</option>
							<option className='search-engine-input-field-label'>
								REPORTER
							</option>
							<option className='search-engine-input-field-label'>IMSI</option>
						</select>
						<input
							type='text'
							className='search-engine-input-box-field-text'
							placeholder='field'
						/>
						<input
							type='submit'
							value='send'
						/>
					</div>
				</form>
			</div>
			<div className='search-engine-output-box w-100 h-100'>
				<svg
					ref={svgRef}
					width='100%'
					height='fit-content'></svg>
			</div>
		</>
	)
}

export default index

// import { useState } from 'react'
// import Tree from '../../../../components/D3/tree'

// const index = () => {
//   const [field, setField] = useState('IMEI')
//   const [props, setProps] = useState()
//   const [value, setValue] = useState([359760091895140, 359760091814182, 869492053878244, 862343030750005,359760091887998])

//   const searchIssues = () => {
//   setProps({field: field,
// 				value: value,})
//   }

// 	return (
// 		<>
// 			<div className='search-engine-input-box'>
// 				<form className='search-engine-input-box-values-form'>
// 					<div className='search-engine-value-box'>
// 						<div class='wrapper'>
// 							<div class='file-upload'>
// 								<input type='file' />
// 								<HiArrowCircleUp />
// 							</div>
// 						</div>
// 					</div>
// 					<div className='search-engine-field-box'>
// 						<input
// 							type='text'
// 							className='search-engine-input-box-values-text'
// 							placeholder='value'
// 						/>
// 						<select className='search-engine-input-field-labels'>
// 							<option className='search-engine-input-field-label'>IMEI</option>
// 							<option className='search-engine-input-field-label'>
// 								ASSIGNEE
// 							</option>
// 							<option className='search-engine-input-field-label'>
// 								APPROVAL
// 							</option>
// 							<option className='search-engine-input-field-label'>
// 								CREATED
// 							</option>
// 							<option className='search-engine-input-field-label'>
// 								REPORTER
// 							</option>
// 							<option className='search-engine-input-field-label'>IMSI</option>
// 						</select>
// 						<input
// 							type='text'
// 							className='search-engine-input-box-field-text'
// 							placeholder='field'
//             />
//             <input type='submit' value='send' onClick={searchIssues } />
// 					</div>
// 				</form>
// 			</div>
// 			<div className='search-engine-output-box h-100'>
// 			<Tree
// 			props={{
// 				field:field,
// 				value:value,
//           }}
// 		/>
// 			</div>
// 		</>
// 	)
// }
// export default index

// import React, { useRef, useEffect } from "react";
// import * as d3 from "d3";

// const CircleWithInput = () => {
//   const inputRef = useRef(null);
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     const circle = svg
//       .append("circle")
//       .attr("cx", 50)
//       .attr("cy", 50)
// 		  .attr("r", 40)
// 			.style('fill', '#FFFFFF')

//     const input = d3.select(inputRef.current);

//     input.on("input", function () {
//     svg
// 			.append('text')
// 			.attr('x', 800)
// 			.attr('y', 50)
// 			.attr('text-anchor', 'middle')
// 			.attr('alignment-baseline', 'middle')
// 			.text(this.value)
// 			.attr('fill', 'yellow')
// 			.style('cursor', 'pointer')
//     });
//   }, []);

//   return (
//     <>
//       <svg ref={svgRef} width="900" height="1000" />
//       <input type="text" ref={inputRef} />
//     </>
//   );
// };

// export default CircleWithInput;
