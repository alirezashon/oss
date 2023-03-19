import { useState } from 'react';

function FileInput() {
  const [rows, setRows] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;
      const rows = csvText.split('\n').map((row) => row.split(','));
		setRows(rows);
		console.log(rows)
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <ul>
        {rows.map((row, rowIndex) => (
          <li key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>{cell}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileInput;

// import { useState } from 'react'
// import Dropzone from 'react-dropzone'

// export default function Upload() {
// 	const [data, setData] = useState([])

// 	const handleFileUpload = async (file) => {
// 		const content = await readCsvFile(file)
// 		setData(content)
// 		console.log(content)
// 	}

// 	const readCsvFile = async (file) => {
// 		const text = await file.text()
// 		const rows = text.split('\n')
// 		const data = rows.map((row) => row.split(','))
// 		return data
// 	}

// 	return (
// 		<div className='text-white'>
// 			<h1>Upload CSV File</h1>
// 			<Dropzone onDrop={(acceptedFiles) => handleFileUpload(acceptedFiles[0])}>
// 				{({ getRootProps, getInputProps }) => (
// 					<div {...getRootProps()}>
// 						<input {...getInputProps()} />
// 						<p>Drag and drop a CSV file here, or click to select a file</p>
// 					</div>
// 				)}
// 			</Dropzone>
// 			<ul>
// 				{data.map((row, index) => (
// 					<p key={index}>{row.join(', ')}</p>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }
// /** @format */

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
// 		const { width, height } = svg.node().getBoundingClientRect()
// 		const centerX = width / 2
// 		const centerY = height / 2
// 		const x1 = centerX / 1.6
// 		const x2 = centerX * 1.2
// 		const boardLabelWidth = 150
// 		const boardLabelHeight = 50
// 		let y = 40
// 		let lineY1 = 40
// 		let lineY2 = 40
// 		const centerLine = [
// 			{
// 				CX: centerX,
// 				CY: 77,
// 			},
// 			{
// 				CX: centerX,
// 				CY: centerY / 2,
// 			},
// 		]

// 		const data = generateSequence(78, [])
// 		// ----------------PATHS----------------

// 		svg
// 			.append('path')
// 			.datum(centerLine)
// 			.attr('fill', 'none')
// 			.attr('stroke', '#499b01')
// 			.attr('stroke-width', 2)
// 			.attr(
// 				'd',
// 				d3
// 					.line()
// 					.x((d) => d.CX)
// 					.y((d) => d.CY)
// 		)

// 		svg
// 			.selectAll('line')
// 			.data(data)
// 			.enter()
// 			.append('line')
// 			.attr('x1', centerX)
// 			.attr('x2', (d, i) =>
// 				i % 2 === 0 ? x1 + boardLabelWidth / 2 : x2 + boardLabelWidth / 2
// 			)
// 			.attr('y1', (d, i) => {
// 				if (i % 2 === 0) {
// 					lineY1 += 35
// 					return lineY1
// 				}
// 				return lineY1
// 			})
// 			.attr('y2', (d, i) => {
// 				if (i % 2 === 0) {
// 					lineY2 += 70
// 					return lineY2
// 				}
// 				return lineY2
// 			})
// 			.attr('stroke', '#a5cd39')
// 			.attr('stroke-width', 2)

// 		// ---------------RECTS-------------

// 		svg
// 			.selectAll('rect')
// 			.data(data)
// 			.enter()
// 			.append('rect')
// 			.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
// 			.attr('y', (d, i) => {
// 				if (i % 2 === 0) {
// 					y += 70

// 					return y
// 				}

// 				return y
// 			})
// 			.attr('width', boardLabelWidth)
// 			.attr('height', boardLabelHeight)
// 			.style('fill', () => d3.interpolateRainbow(Math.random()))
// 			.append('title')
// 			.text(() => `Rectangle ${Math.random().toString(36).substr(2, 5)}`)
// 	}, [])

// 	return (
// 		<svg
// 			ref={svgRef}
// 			width='100%'
// 			height='888vh'></svg>
// 	)
// }

// export default MyD3Component

// import React, { useRef, useEffect } from 'react'
// import * as d3 from 'd3'

// const MyComponent = () => {
// 	const data = [1, 12, 23, 34, 45,33 , 22, 11, 1,14,26,37,95,44,32,21,10,1]
// 	const svgRef = useRef()

// 	useEffect(() => {
// 		const svg = d3.select(svgRef.current)

// 		// Define the margin and width of the SVG container
// 		const margin = { top: 20, right: 20, bottom: 20, left: 20 }
// 		const width = 600 - margin.left - margin.right
// 		const height = 400 - margin.top - margin.bottom

// 		// Define the scales for X and Y axes
// 		const xScale = d3
// 			.scaleLinear()
// 			.domain([0, 18])
// 			.range([50, width - 50])
// 		const yScale = d3
// 			.scaleLinear()
// 			.domain([0, 100])
// 			.range([height - 50, 50])

// 		// Generate 12 lines with fixed X positions and different Y positions
// 		const lines = svg
// 			.selectAll('line')
// 			.data(data)
// 			.enter()
// 			.append('line')
// 			.attr('x1', (d, i) => xScale(i))
// 			.attr('x2', (d, i) => xScale(i))
// 			.attr('y1', (d) => yScale(d) + margin.top)
// 			.attr('y2', height - margin.bottom)
// 			.attr('stroke', '#FFFFFF')
// 			.attr('stroke-width', 2)
// 	}, [data])

// 	return (
// 		<svg
// 			ref={svgRef}
// 			height='100vh'
// 			width='200vh'></svg>
// 	)
// }

// export default MyComponent

// import { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";

// const Virtualization = () => {
//   const data = d3.range(10000);
//   const [startIndex, setStartIndex] = useState(0);
//   const [endIndex, setEndIndex] = useState(50);
//   const ref = useRef();

//   useEffect(() => {
//     const container = d3.select(ref.current);

//     const update = () => {
//       const visibleData = data.slice(startIndex, endIndex);
//       const items = container.selectAll("div").data(visibleData);

//       items.enter()
//         .append("div")
//         .style("opacity", 0)
//         .transition()
//         .duration(500)
//         .style("opacity", 1)
//         .text(d => d);

//       items.exit()
//         .transition()
//         .duration(500)
//         .style("opacity", 0)
//         .remove();

//       items
//         .style("transform", (_, i) => `translateY(${i * 20}px)`);
//     };

//     update();
//   }, [startIndex, endIndex]);

//   const handleScroll = () => {
//     const container = ref.current;
//     const { scrollTop, clientHeight } = container;
//     const scrollBottom = scrollTop + clientHeight;
//     const newStartIndex = Math.floor(scrollTop / 20);
//     const newEndIndex = Math.ceil(scrollBottom / 20);

//     if (newStartIndex !== startIndex || newEndIndex !== endIndex) {
//       setStartIndex(newStartIndex);
//       setEndIndex(newEndIndex);
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       style={{
//         height: "400px",
//         overflowY: "scroll"
//       }}
//       onScroll={handleScroll}
//     />
//   );
// };

// export default Virtualization;
// import { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Example = () => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Define the initial state of the circle
//     const circle = svg
//       .append('circle')
//       .attr('cx', 50)
//       .attr('cy', 50)
//       .attr('r', 10)
//       .attr('fill', 'red');

//     // Define the transition to move the circle to a new location
//     const transition = d3
//       .transition()
//       .duration(1000)
//       .ease(d3.easeCubicOut);

//     circle
//       .transition(transition).duration(2500)
//       .attr('cx', 150)
//       .attr('cy', 150);

//   }, []);

//   return (
//     <svg ref={svgRef} width={200} height={200} />
//   );
// };

// export default Example;

// import * as d3 from 'd3'
// import { useRef, useEffect } from 'react'
// const CircleComponent = () => {
// 	const svgRef = useRef(null)

// 	useEffect(() => {
// 		const data = [
// 			{ x: 50, y: 50, imageSrc: '/images/me.jpg' },
// 			{ x: 150, y: 50, imageSrc: '/images/icons/dashboard.png' },
// 			{ x: 50, y: 150, imageSrc: '/images/me.jpg' },
// 			{ x: 150, y: 150, imageSrc: '/images/logo.jpg' },
// 		]
// 		const svg = d3.select(svgRef.current)
// 		const circles = svg.selectAll('circle').data(data)

// 		circles
// 			.enter()
// 			.append('circle')
// 			.attr('cx', (d) => d.x)
// 			.attr('cy', (d) => d.y)
// 			.attr('r', 50)

// 		const images = svg.selectAll('image').data(data)

// 		images
// 			.enter()
// 			.append('image')
// 			.attr('x', (d) => d.x - 50)
// 			.attr('y', (d) => d.y - 50)
// 			.attr('width', 100)
// 			.attr('height', 100)
// 			.attr('clip-path', 'url(#circleClip)')
// 			.attr('xlink:href', (d) => d.imageSrc)

// 		svg
// 			.append('defs')
// 			.append('clipPath')
// 			.attr('id', 'circleClip')
// 			.selectAll('circle')
// 			.data(data)
// 			.enter()
// 			.append('circle')
// 			.attr('cx', (d) => d.x)
// 			.attr('cy', (d) => d.y)
// 			.attr('r', 50)
// 	}, [])

// 	return (
// 		<svg
// 			width='100vh'
// 			height='100vh'
// 			ref={svgRef}>
// 			<circle />
// 		</svg>
// 	)
// }

// export default CircleComponent
