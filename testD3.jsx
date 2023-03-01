
// import { useEffect, useRef } from "react";
// import * as d3 from "d3";

// function ImageFetcher() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const response = await fetch("/images/me.jpg");
//       const blob = await response.blob();
//       const objectURL = URL.createObjectURL(blob);

//       d3.select(imageRef.current)
//         .attr("src", objectURL)
//         .attr("alt", "My Image");
//     };

//     fetchImage();
//   }, []);

//   return <img ref={imageRef} />;
// }

// export default ImageFetcher;

//Brush----------------method-----test

// import * as d3 from "d3";
// import React, { useEffect, useRef } from "react";

// export default function BrushExample() {
//   const svgRef = useRef(null);
//   const brushRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // create brush object
//     const brush = d3.brushX()
//       .extent([[0, 0], [900, 1000]])
//       .on("brush", () => {
//         console.log("brushing...");
//       });

//     // save reference to brush object
//     brushRef.current = brush;

//     // add brush to svg
//     svg.append("g")
//       .attr("class", "brush")
//       .call(brush);
//   }, []);

//   return (
//     <svg ref={svgRef} width={'100%'} height={'100vh'}>
//       <rect x="0" y="0" width="100%" height="100vh" fill="#eee" />
//     </svg>
//   );
// }

// CREATE------CIRCLES----ONCLICK-----SHOW-----STARS

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const CircleExample = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // create circles
//     const circles = svg
//       .selectAll("circle")
//       .data([50, 100, 150]) // data for 3 circles
//       .join("circle")
//       .attr("cx", d => d)
//       .attr("cy", 100)
//       .attr("r", 20)
//       .style("fill", "steelblue")
//       .on("click", function() {
//         // show 5 stars on click
//         const circle = d3.select(this);
//         svg.selectAll(".star").remove(); // remove previous stars
//         svg
//           .selectAll(".star")
//           .data([1, 2, 3, 4, 5]) // data for 5 stars
//           .join("text")
//           .attr("class", "star")
//           .attr("x", d => circle.attr("cx") - 10 + d * 5)
//           .attr("y", circle.attr("cy") - 10)
//           .text("⭐️");
//       });

//     // hide children circles when clicking outside of them
//     svg.on("click", function() {
//       const target = event.target;
//       if (!circles.nodes().includes(target)) {
//         svg.selectAll(".star").remove();
//       }
//     });
//   }, []);

//   return (
//     <svg ref={svgRef} width={300} height={200}>
//       <rect width="100%" height="100%" fill="lightgray" />
//     </svg>
//   );
// };

// export default CircleExample;

// created shapes

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3Component = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // create circle with click event listener
//     const circle = svg
//       .append("circle")
//       .attr("cx", 50)
//       .attr("cy", 50)
//       .attr("r", 30)
//       .style("fill", "blue")
//       .on("click", () => {
//         console.log("Circle clicked!");
//       });

//     // create path with mouseover event listener
//     const path = svg
//       .append("path")
//       .attr(
//         "d",
//         "M 100 100 L 150 50 L 200 100 L 250 50 L 300 100 L 350 50 L 400 100"
//       )
//       .attr("stroke", "#FFFFFF")
//       .attr("stroke-width", 2)
//       .attr("fill", "none")
//       .on("mouseover", () => {
//         console.log("Path mouseover!");
//       });

//     // create rect with mouseout event listener
//     const rect = svg
//       .append("rect")
//       .attr("x", 100)
//       .attr("y", 150)
//       .attr("width", 100)
//       .attr("height", 50)
//       .style("fill", "green")
//       .on("mouseout", () => {
//         console.log("Rect mouseout!");
//       });

//       let dataArray = [20,40,60]

//       let bars = svg
//       .append('rect')
//           .data(dataArray)
//           .enter()
//           .attr('width', (d) => { return d; })
//           .attr('height', 50)
//           .attr('y', function(d, i) {return i * 100})

//   }, []);

//   return (
//     <svg ref={svgRef} width="500" height="300">
//       {/* add additional elements as necessary */}
//     </svg>
//   );
// };

// export default D3Component;

// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

// const Circle = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     svg.append('circle')
//       .attr('cx', 50)
//       .attr('cy', 50)
//       .attr('r', 50)
//       .style('fill', 'red');
//   }, []);

//   return (
//     <svg ref={svgRef}></svg>
//   );
// };

// export default Circle;

// IMPORTANT------------------------SELECT CENTER OF SVG-------

//   const { width, height } = svg.node().getBoundingClientRect()
// 	const centerX = width / 2
// 	const centerY = height / 2




// import React, { useState, useEffect, useRef } from 'react';

// const ResponsiveCanvas = () => {
// 	const [dimensions, setDimensions] = useState({
// 		width: 0,
// 		height: 0,
// 	});
// 	const canvasRef = useRef(null);

// 	useEffect(() => {
// 		setDimensions({
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		});

// 		const canvas = canvasRef.current;
// 		const ctx = canvas.getContext('2d');

// 		const CreateCircle = (posX, posY, radius, color) => {
// 			ctx.beginPath();
// 			ctx.arc(posX, posY, radius, 0, Math.PI * 2);
// 			ctx.strokeStyle = '#a5cd39';
// 			ctx.lineWidth = 1.4;
// 			ctx.fillStyle = color;
// 			ctx.fill();
// 			ctx.stroke();
// 		};

// 		ctx.beginPath();
// 		//top-left-To-bottom-left
// 		ctx.moveTo(dimensions.width / 4.5 + 47, dimensions.height / 11);
// 		ctx.lineTo(dimensions.width / 5.5 - 47, dimensions.height / 2.5);

// 		//top-right-To-bottom-right
// 		ctx.moveTo(dimensions.width / 1.3 + 47, dimensions.height / 11);
// 		ctx.lineTo(dimensions.width / 1.39 - 7, dimensions.height / 2.5);

// 		// middle-left-To-top-left
// 		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4);
// 		ctx.lineTo(dimensions.width / 4.5 + 17, dimensions.height / 11);

// 		// middle-left-To-bottom-left
// 		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4);
// 		ctx.lineTo(dimensions.width / 5.5, dimensions.height / 2.5);

// 		// middle-left-To-bottom-middle
// 		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4);
// 		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5);

// 		// middle-first-center-To-bottom-middle
// 		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5);

// 		// middle-first-center-To-top-middle
// 		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 2, dimensions.height / 11);

// 		// middle-first-center-To-top-left
// 		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 4.5, dimensions.height / 11);

// 		// middle-second-center-To-top-middle
// 		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9);
// 		ctx.lineTo(dimensions.width / 2 + 47, dimensions.height / 11);

// 		// middle-second-center-To-bottom-middle
// 		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9);
// 		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5);

// 		// middle-second-center-To-bottom-right
// 		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9);
// 		ctx.lineTo(dimensions.width / 1.39 - 47, dimensions.height / 2.5);

// 		// middle-right-To-bottom-right
// 		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 1.39, dimensions.height / 2.5);

// 		// middle-right-To-top-right
// 		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 1.3, dimensions.height / 11);

// 		// middle-right-To-bottom-right
// 		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1);
// 		ctx.lineTo(dimensions.width / 2 + 47, dimensions.height / 11);

// 		ctx.stroke();

// 		// top-line-circles
// 		CreateCircle(dimensions.width / 4.5, dimensions.height / 11, 47, '#FFFFFF');
// 		CreateCircle(dimensions.width / 2, dimensions.height / 11, 47, '#FFFFFF');
// 		CreateCircle(dimensions.width / 1.3, dimensions.height / 11, 47, '#FFFFFF');

// 		// middle-line-circles
// 		CreateCircle(
// 			dimensions.width / 3.6,
// 			dimensions.height / 3.4,
// 			35,
// 			'#FFFFFF'
// 		);
// 		CreateCircle(
// 			dimensions.width / 2.5,
// 			dimensions.height / 5.1,
// 			35,
// 			'#FFFFFF'
// 		);
// 		CreateCircle(
// 			dimensions.width / 1.85,
// 			dimensions.height / 3.9,
// 			35,
// 			'#FFFFFF'
// 		);
// 		CreateCircle(
// 			dimensions.width / 1.5,
// 			dimensions.height / 5.1,
// 			35,
// 			'#FFFFFF'
// 		);

// 		// bottom-line-circles
// 		CreateCircle(
// 			dimensions.width / 5.5,
// 			dimensions.height / 2.5,
// 			47,
// 			'#FFFFFF'
// 		);
// 		CreateCircle(
// 			dimensions.width / 2.3,
// 			dimensions.height / 2.5,
// 			47,
// 			'#FFFFFF'
// 		);
// 		CreateCircle(
// 			dimensions.width / 1.39,
// 			dimensions.height / 2.5,
// 			47,
// 			'#FFFFFF'
// 		);

// 		// IMAGES
// 		const createImage = (src, x, y, width, height) => {
// 			const icons = new Image();
// 			icons.src = src;
// 			ctx.drawImage(icons, x, y, width, height);
// 		};

// 		createImage(
// 			'/images/icons/internet.png',
// 			dimensions.width / 4.82,
// 			dimensions.height / 18,
// 			50,
// 			50
// 		);
// 		createImage(
// 			'/images/icons/tickets.png',
// 			dimensions.width / 2.07,
// 			dimensions.height / 18,
// 			55,
// 			55
// 		);
// 		createImage(
// 			'/images/icons/accounting.png',
// 			dimensions.width / 1.33,
// 			dimensions.height / 18,
// 			55,
// 			55
// 		);

// 		createImage(
// 			'/images/icons/dashboard.png',
// 			dimensions.width / 3.8,
// 			dimensions.height / 3.8,
// 			47,
// 			47
// 		);
// 		createImage(
// 			'/images/icons/email.png',
// 			dimensions.width / 1.9,
// 			dimensions.height / 4.5,
// 			44,
// 			44
// 		);
// 		createImage(
// 			'/images/icons/leave.png',
// 			dimensions.width / 6.22,
// 			dimensions.height / 2.82,
// 			66,
// 			66
// 		);
// 		createImage(
// 			'/images/icons/menu.png',
// 			dimensions.width / 2.615,
// 			dimensions.height / 6.3,
// 			55,
// 			55
// 		);
// 		createImage(
// 			'/images/icons/personal.png',
// 			dimensions.width / 2.4,
// 			dimensions.height / 2.7,
// 			55,
// 			55
// 		);
// 		createImage(
// 			'/images/icons/teamwork.png',
// 			dimensions.width / 1.538,
// 			dimensions.height / 6.3,
// 			50,
// 			50
// 		);
// 		createImage(
// 			'/images/icons/timetable.png',
// 			dimensions.width / 1.425,
// 			dimensions.height / 2.74,
// 			55,
// 			55
// 		);
// 		// const drawImageInsideCircle = (img, circleX, circleY, radius) => {
// 		// 	const image = new Image();
// 		// 	image.src = img;
// 		// 	image.onload = () => {
// 		// 		ctx.beginPath();
// 		// 		ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
// 		// 		ctx.strokeStyle = 'dark';
// 		// 		ctx.lineWidth = 1.4;
// 		// 		ctx.fill();
// 		// 		ctx.stroke();
// 		// 		ctx.clip();
// 		// 		ctx.drawImage(image, circleX-44, circleY-44, 150, 150);
// 		// 	};
// 		// }
// 		// drawImageInsideCircle(
// 		// 	'/images/logo.jpg',
// 		// dimensions.width / 2.5, dimensions.height / 1,
// 		// 	75
// 		// );
// 	}, [dimensions]);

// 	return (
// 		<canvas
// 			width={dimensions.width}
// 			height={dimensions.height}
// 			ref={canvasRef}
// 		/>
// 	);
// };

// export default ResponsiveCanvas;

// export default function index() {
// 	return (
// 		<>
// 			<div>
// 				<form
// 					action='/api/form'
// 					method='post'>
// 					<input
// 						type='text'
// 						name='ali'
// 						id='ali'
// 					/>
// 					<input
// 						type='text'
// 						name='reza'
// 						id='reza'
// 					/>
// 					<label className='mt-2'>نیروی های درون سازمانی</label>
// 					<input
// 						className='form-check-input border-warning bg-success mt-2'
// 						type='radio'
// 						name='developer'
// 						id='developer'
// 						value='نیروی های درون سازمانی'
// 						checked
// 					/>
// 					<label className='mt-2'>پیمانکار</label>
// 					<input
// 						className='form-check-input border-warning bg-success mt-2'
// 						type='radio'
// 						name='peymankar'
// 						value='پیمانکار'
// 						id='peymankar'
// 					/>
// 					<button type='submit'>Submit</button>
// 				</form>
// 			</div>
// 		</>
// 	);
// }

// import { useState } from "react"
// import Ticketing from './components/Drawer/Ticketing/Content'
// export default function test() {

//     const [data, setData] = useState([])

//     const addData = (info) => {
//         setData([...data, info])
//     }
//     console.log(data)
//     return (
//         <>
//             <div >
//                 <Ticketing addData = {addData} />
//             </div>
//         </>
//     )
// }

// import Test from './test'

// export default function index (){

//     // const createBarChart = TestData.map((dataset)=>{
//     //         return(
//     //             <Test
//     //             label = {dataset.name}
//     //             bg = {dataset.bg}
//     //             data = {dataset.data}
//     //             />
//     //         )
//     // // })

//     return(
//         <>
//     {/* {createBarChart} */}
//     <Test props={{labels:['Alireza Akbari', 'Zahra Haghanian', 'saeid nasiri', 'bahare dehghan', 'behnam nikzad', 'mohsen mohammad amini', 'masoud godarzi'],createNew:{firstTip:{name:'alireza hacker',bg:'#499b01',datas:[77, 88, 80, 81, 16, 55, 44]},secondTip:{name:'akbariovich',bg:'#a5cd39',datas:[99, 77, 40, 19, 86, 67,90]}}}}/>
//         </>
//     )
// }

//     //      export data in array
//         // const props = [
//         //     ['Alireza Akbari', 'Zahra Haghanian', 'saeid nasiri', 'bahare dehghan', 'behnam nikzad', 'mohsen mohammad amini', 'masoud godarzi'],
//         //         [
//         //        'alireza hacker',
//         //         '#499b01',
//         //         [77, 88, 80, 81, 16, 55, 44]
//         //         ],
//         //        [
//         //         'akbariovich',
//         //         '#a5cd39',
//         //         [99, 77, 40, 19, 86, 67,90]
//         //         ]
//         // ]

//         //   for(const data of createNew){
//         //  console.log(data)
//         //   }

//         //  const getData = Object.entries(createNew)
//         // //  console.log(getData)

//         //  for(const data of getData){
//         //  console.log(data)
//         //  }






// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

// const CircleWithImage = ({ imageUrl }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Define the radius and center of the circle
//     const radius = 100;
//     const centerX = 150;
//     const centerY = 150;

//     // Draw the circle
//     svg.append('circle')
//       .attr('cx', centerX)
//       .attr('cy', centerY)
//       .attr('r', radius)
//       .attr('fill', '#ddd');

//     // Add the image inside the circle
//     svg.append('svg:image')
//       .attr('xlink:href', '/images/me.jpg')
//       .attr('width', radius * 2)
//       .attr('height', radius * 2)
//       .attr('x', centerX - radius)
//       .attr('y', centerY - radius)
//       .attr('clip-path', 'circle(' + radius + 'px)');
//   }, );

//   return (
//     <svg width="300" height="300" ref={svgRef} />
//   );
// };

// export default CircleWithImage;

// import React, { useEffect, useRef } from 'react'
// import * as d3 from 'd3'

// const CircleComponent = () => {
// 	const svgRef = useRef(null)

// 	useEffect(() => {
// 		const data = [
// 			{ x: 50, y: 50 },
// 			{ x: 150, y: 50 },
// 			{ x: 50, y: 150 },
// 			{ x: 150, y: 150 },
// 		]

// 		const svg = d3.select(svgRef.current)

// 		svg
// 			.selectAll('circle')
// 			.data(data)
// 			.enter()
// 			.append('circle')
// 			.attr('cx', (d) => d.x)
// 			.attr('cy', (d) => d.y)
// 			.attr('r', 50)
// 			.style('fill', 'steelblue')

// 		svg
// 			.selectAll('image')
// 			.data(data)
// 			.enter()
// 			.append('image')
// 			.attr('xlink:href', '/images/me.jpg')
// 			.attr('x', (d) => d.x - 50)
// 			.attr('y', (d) => d.y - 50)
// 			.attr('width', 50)
// 			.attr('height', 50)
// 			.attr('clip-path', 'circle(' + 50 + 'px)')
// 	}, [])

// 	return (
// 		<svg
// 			ref={svgRef}
// 			width={200}
// 			height={200}></svg>
// 	)
// }

// export default CircleComponent
//add dynamiclly input

// import { useState, useEffect } from 'react';

// export default function index() {
//   const [formData, setFormData] = useState({}); // Initialize form data as empty object
//   const [fields, setFields] = useState([{ name: 'field1', label: 'Field 1', type: 'text' }]); // Initialize fields with one text field

//   const addField = () => {
//     const newFields = [...fields];
//     newFields.push({
//       name: `field${newFields.length + 1}`,
//       label: `Field ${newFields.length + 1}`,
//       type: 'text'
//     });
//     setFields(newFields);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div style={{color:'white'}}>
//       {fields.map((field) => (
//         <div key={field.name}>
//           <label htmlFor={field.name}>{field.label}</label>
//           <input type={field.type} name={field.name} id={field.name} onChange={handleInputChange} value={formData[field.name] || ''} />
//         </div>
//       ))}
//       <button onClick={addField}>Add Field</button>
//     </div>
//   );
// }

// /** @format */
// import { HexColorPicker } from 'react-colorful';
// import { useState, useEffect } from 'react';
// import { MdModeEditOutline } from 'react-icons/md';

// // async function dashboard () {
// //   const response = await fetch(
// // 	  `http://localhost:3000/api/getDashboard`,
// // 	  )
// // 	const data = await response.json();
// // 	return data
// // }

// export default function index() {
// 	const [color, setColor] = useState('#499b01');
// 	const [showPicker, setShowPicker] = useState(false);
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		async function fetchData() {
// 			const response = await fetch('/api/getDashboard');
// 			const d = await response.json();
// 			setData(d);
// 		}
// 		fetchData();
// 	}, []);

// 	const tableHead = [
// 		{
// 			created: { name: 'Created', col: 3 },
// 			type: { name: 'T', col: 3 },
// 			key: { name: 'Key', col: 2 },
// 			customerRequestType: { name: 'CustomerRequestType', col: 3 },
// 			summary: { name: 'Summary', col: 3 },
// 			P: { name: 'P', col: 3 },
// 			assignee: { name: 'Assignee', col: 3 },
// 			// timeTofirstResponse: { name: 'timeTofirstResponse', col: 3 },
// 			// timeToResolution: { name: 'timeToResolution', col: 3 },
// 			reporter: { name: 'Reporter', col: 3 },
// 			lastComment: { name: 'LastComment', col: 3 },
// 			update: { name:'Updated', col: 3 },
// 		},
// 	];

// 	return (
// 		<div className='bg'>
// 			<div
// 				className='board-box'
// 				style={{ backgroundColor: color }}>
// 				<div
// 					className='table-board-label'
// 					style={{ backgroundColor: color }}>
// 					Filter Results : IT-OSS-Request-Waiting For Support &nbsp;
// 					<MdModeEditOutline onClick={() => setShowPicker(!showPicker)} />
// 					{showPicker && (
// 						<HexColorPicker
// 							color={color}
// 							onChange={setColor}
// 						/>
// 					)}
// 					<div></div>
// 				</div>

// 				<div className='table-box'>
// 					<table className='table'>
// 						<thead>
// 							{tableHead.map((title) => (
// 								<tr>
// 									<th
// 										colSpan={title.created.col}
// 										className='td'
// 										scope='col'>
// 										{title.created.name}
// 									</th>
// 									<th
// 										colSpan={title.type.col}
// 										className='td'
// 										scope='col'>
// 										{title.type.name}
// 									</th>
// 									<th
// 										colSpan={title.key.col}
// 										className='td'
// 										scope='col'>
// 										{title.key.name}
// 									</th>
// 									<th
// 										colSpan={title.customerRequestType.col}
// 										className='td'
// 										scope='col'>
// 										{title.customerRequestType.name}
// 									</th>
// 									<th
// 										colSpan={title.summary.col}
// 										className='td'
// 										scope='col'>
// 										{title.summary.name}
// 									</th>
// 									<th
// 										colSpan={title.P.col}
// 										className='td'
// 										scope='col'>
// 										{title.P.name}
// 									</th>
// 									<th
// 										colSpan={title.assignee.col}
// 										className='td'
// 										scope='col'>
// 										{title.assignee.name}
// 									</th>
// 									<th
// 										colSpan={title.reporter.col}
// 										className='td'
// 										scope='col'>
// 										{title.reporter.name}
// 									</th>
// 									<th
// 										colSpan={title.lastComment.col}
// 										className='td'
// 										scope='col'>
// 										{title.lastComment.name}
// 									</th>
// 									<th
// 										colSpan={title.update.col}
// 										className='td'
// 										scope='col'>
// 										{title.update.name}
// 									</th>
// 								</tr>
// 							))}
// 						</thead>
// 						<tbody>
// 							{data.map((item) => (
// 								<tr>
// 									<td
// 										colSpan={3}
// 										className='td'
// 										key={item.id}>
// 										{item.fields.created}
// 									</td>
// 									<td
// 										colSpan={3}
// 										className='td'
// 										key={item.id}>
// 										{/* {item.fields.issuetype.name} */}
// 										<img src={item.fields.issuetype.iconUrl} />
// 									</td>
// 									<td
// 										colSpan={2}
// 										className='td'
// 										key={item.id}>
// 										{item.key}
// 									</td>
// 									<td
// 										colSpan={3}
// 										className='td'
// 										key={item.id}>
// 										{item.fields.customfield_17501.requestType.name}
// 									</td>

// 									<td
// 										className='td'
// 										key={item.id}>
// 										{item.fields.summary}
// 									</td>
// 									<td
// 										className='td'
// 										key={item.id}>
// 										{item.fields.priority.name}
// 										<img src={item.fields.priority.iconUrl} />
// 									</td>
// 									<td
// 										colSpan={2}
// 										className='td'
// 										key={item.id}>
// 										{item.fields.assignee.name}
// 									</td>
// 									<td
// 										colSpan={2}
// 										className='td'
// 										key={item.id}>
// 										{item.fields.reporter.name}
// 									</td>

// 									<td
// 										colSpan={2}
// 										className='td'
// 										key={item.id}>
// 										{item.fields.updated}
// 									</td>
// 								</tr>
// 							))}
// 						</tbody>
// 					</table>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// charts

// import React, { useState } from 'react';
// import { Chart } from 'primereact/chart';
// import test from './TestData'
// export default function index(props){

//     async function fetchData(){
//         const response = await fetch(test)
//         const datapoints = await response.json()
//         console.log(datapoints)
//         return datapoints
//     }
//     fetchData()

//      const [basicData] = useState({
//      labels:['Alireza Akbari', 'Zahra Haghanian', 'saeid nasiri', 'bahare dehghan', 'behnam nikzad', 'mohsen mohammad amini', 'masoud godarzi'],
//     datasets: [
//         {
//             label: props.label,
//             backgroundColor: props.bg,
//             data: props.data
//         },

//     ]
// })

// const getLightTheme = () => {
//     let horizontalOptions = {
//         indexAxis: 'y',    // تنظیمات نمودار ستونی افقی
//         maintainAspectRatio: false,
//         aspectRatio: .8,
//         plugins: {
//             legend: {
//                 labels: {
//                     color: '#495057'

//                 }
//             }
//         },
//         scales: {
//             x: {
//                 ticks: {
//                     color: '#495057'
//                 },
//                 grid: {
//                     color: '#ebedef'
//                 }
//             },
//             y: {
//                 ticks: {
//                     color: '#495057'
//                 },
//                 grid: {
//                     color: '#ebedef'
//                 }
//             }
//         }
//     }
// return horizontalOptions
// }
// const horizontalOptions = getLightTheme()
// return (
//       <div className="card">
//          <Chart type="bar" data={basicData} options={horizontalOptions} />
//       </div>

// )
// }

// // export default function test(){

// //  const createNew={firstTip:{name:'alireza hacker',bg:'#499b01',datas:[77, 88, 80, 81, 16, 55, 44]},secondTip:{name:'akbariovich',bg:'#a5cd39',datas:[99, 77, 40, 19, 86, 67,90]}}
// //  const k = []
// //  const v = []
// //  for (let i= 0; i < createNew.length; i++) {
// //     const element = createNew[i];
// //     Object.keys(element).forEach((b) => {k.push(b) });
// //     Object.values(element).forEach((p) => {v.push(p) });
// //  }
// //  return(
// //         <>
// //             {
// //                 v.map((ali)=>(
// //                     <p>{ali}</p>
// //                 ))
// //             }
// //         </>
// //     )
// // }

// use arrays to import data

// console.log(props)
// const [basicData] = useState({
// labels: props[0],
//    datasets: [
//        {
//            label: props[1][0],
//            backgroundColor: props[1][1],
//            data: props[1][2]
//        },

//        {
//            label:props[2][0],
//            backgroundColor:props[2][1],
//            data: props[2][2],
//        },

//    ]
// })

// DYNAMIC---FORM---TESTS

// import { useState } from 'react';

// function DynamicForm() {
//   const [selectedOption1, setSelectedOption1] = useState('');
//   const [selectedOption2, setSelectedOption2] = useState('');

//   const options1 = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const options2 = [
//     { value: 'option4', label: 'Option 4' },
//     { value: 'option5', label: 'Option 5' },
//     { value: 'option6', label: 'Option 6' },
//   ];

//   const handleOption1Change = (event) => {
//     setSelectedOption1(event.target.value);
//   };

//   const handleOption2Change = (event) => {
//     setSelectedOption2(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Option 1:', selectedOption1);
//     console.log('Option 2:', selectedOption2);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="option1">Select an option from list 1:</label>
//       <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
//         <option value="">--Please choose an option--</option>
//         {options1.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="option2">Select an option from list 2:</label>
//       <select id="option2" value={selectedOption2} onChange={handleOption2Change}>
//         <option value="">--Please choose an option--</option>
//         {options2.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default DynamicForm;

// import React, { useState } from 'react';

// export default function index() {
//   const [formFields, setFormFields] = useState([{ name: '', email: '' }]);

//   const handleAddFields = () => {
//     const values = [...formFields];
//     values.push({ name: '', email: '' });
//     setFormFields(values);
//   };

//   const handleRemoveFields = (index) => {
//     const values = [...formFields];
//     values.splice(index, 1);
//     setFormFields(values);
//   };

//   const handleChange = (index, event) => {
//     const values = [...formFields];
//     if (event.target.name === 'name') {
//       values[index].name = event.target.value;
//     } else {
//       values[index].email = event.target.value;
//     }
//     setFormFields(values);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted:', formFields);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {formFields.map((field, index) => (
//         <div key={`${field}-${index}`}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={field.name}
//               onChange={(event) => handleChange(index, event)}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={field.email}
//               onChange={(event) => handleChange(index, event)}
//             />
//           </label>
//           <button type="button" onClick={() => handleRemoveFields(index)}>
//             Remove
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={() => handleAddFields()}>
//         Add more fields
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
