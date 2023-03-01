
import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

function MyD3Component() {
	const svgRef = useRef(null)

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
		const x1 = centerX / 1.6
		const x2 = centerX * 1.2
		const boardLabelWidth = 150
		const boardLabelHeight = 50
		let y = 40
		const centerLine = [
			{
				CX: centerX,
				CY: 90,
			},
			{
				CX: centerX,
				CY: centerY / 2,
			},
		]

		const data = generateSequence(7827, [])

		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
			.attr('y', (d, i) => {
				if (i % 2 === 0) {
					y += 70
					console.log(y)
					return y
				}
				console.log(y)
				return y
			})
			.attr('width', boardLabelWidth)
			.attr('height', boardLabelHeight)
			.style('fill', () => d3.interpolateRainbow(Math.random()))
			.append('title')
		// .text(() => `Rectangle ${Math.random().toString(36).substr(2, 5)}`)

		// ----------------PATHS----------------
		

		svg
			.append('path')
			.datum(centerLine)
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

	}, [])

	return (
		<svg
			ref={svgRef}
			width='100%'
			height='34190vh'></svg>
	)
}

export default MyD3Component





// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

// function MyD3Component() {
//   const svgRef = useRef(null);

//   function generateSequence(n, arr) {
//     if (n === 0) return arr;
//     const last = arr[arr.length - 1];
//     const next = last === 1 ? 2 : 1;
//     return generateSequence(n - 1, [...arr, next]);
//   }

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     const x1 = 150;
//     const x2 = 450;
//     let y = 20;
//     const data = generateSequence(16, []);

//     svg.selectAll('rect')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('x', (d, i) => i % 2 === 0 ? x1 : x2)
//       .attr('y', (d, i) => {
//         if (i % 2 === 0) {
//           y += 70;
//           return y - 70;
//         }
//         return y;
//       })
//       .attr('width', 150)
//       .attr('height', 50)
//       .style('fill', () => d3.interpolateRainbow(Math.random()))
//       .append('title')
//       .text(() => `Rectangle ${Math.random().toString(36).substring(2, 5)}`);
//   }, []);

//   return (
//     <svg ref={svgRef} width="100%" height="100vh">
//     </svg>
//   );
// }

// export default MyD3Component;

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
