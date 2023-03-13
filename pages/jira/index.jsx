/** @format */

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const index = () => {
	const svgRef = useRef()

	useEffect(() => {
		const data = ['text 1', 'text 2', 'text 3']
		const svg = d3.select(svgRef.current)

		const text = svg
			.selectAll('text')
			.data(data)
			.join('text')
			.text((d) => d)
			.attr('x', (d, i) => i * 100 + 50)
			.attr('y', 50)
			.attr('font-size', 20)
			.attr('fill', 'black')
			.attr('font-size', 30)
			.style('opacity', 0)
			.style('cursor', 'pointer')
		setTimeout(() => {
			text.style('opacity', 1) 
		}, 1000)
		text.on('click', (event, d) => {
			console.log(`${d} clicked`)
		})
	}, [])

	return <svg ref={svgRef}></svg>
}

export default index
// /** @format */

// import { useRouter } from 'next/router'
// import { useEffect, useRef } from 'react'
// import * as d3 from 'd3'

// const IndexPage = () => {
// 	const router = useRouter()
// 	const svgRef = useRef(null)

// 	useEffect(() => {
// 		const svg = d3.select(svgRef.current)

// 		const { width, height } = svg.node().getBoundingClientRect()
// 		const quarterWidth = width / 2
// 		const quarterHeight = height / 4

// 		const x1 = quarterWidth / 2
// 		const x2 = quarterWidth * 1.16
// 		const projectRectWidth = 150
// 		const projectRectHeight = 50
// 		let paddingY = 40
// 		let lineY1 = 40
// 		let lineY2 = 40
// 		function generateSequence(n, arr) {
// 			if (n === 0) return arr
// 			const last = arr[arr.length - 1]
// 			const next = last === 1 ? 2 : 1
// 			return generateSequence(n - 1, [...arr, next])
// 		}

// 		const treeData = generateSequence(22, [])
// 		// create a rectangle generator that alternates x position for even and odd indices

// 		// use data method to create rectangles with different Y positions and alternating X positions
// 		const data = [1, 2, 3, 4, 5]
// 		const rects = svg
// 			.selectAll('rect')
// 			.data(treeData)
// 			.enter()
// 			.append('rect')
// 			.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
// 			.attr('y', (d, i) => {
// 				if (i % 2 === 0) {
// 					paddingY += 70

// 					return paddingY
// 				}

// 				return paddingY
// 			})
// 			.attr('width', 50)
// 			.attr('height', 50)
// 			.attr('id', (d) => `rect-${d}`)
// 			.style('fill', 'lightblue')
// 			.on('click', (event, d) => {
// 				// update URL and redirect to new URL with ID
// 				const id = `rect-${d}`
// 				router.push(`/${id}`)
// 			})
// 	}, [])

// 	return (
// 		<svg
// 			ref={svgRef}
// 			width='100%'
// 			height='900vh'>
// 			{/* add SVG container */}
// 		</svg>
// 	)
// }

// export default IndexPage

// import axios from 'axios';

// export default function index() {
//   const baseUrl = 'https://yax.mobinnet.net/rest/api/2';
//   async function fetchJiraData(jql) {
//     const auth = {
//       username: 'al.akbari',
//       password: '1234#D%@li'
//     };
//     const response = await axios.get(`${baseUrl}/search`, {
//       params: { jql },
//       auth
//     });
//     return response.data;
//   }

//   function JiraResults({ jql }) {
//     const jql = 'project = ALIREZA and status = DONE'
//     const [jiraData, setJiraData] = useState(null);
//     useEffect(() => {
//       fetchJiraData(jql).then(data => setJiraData(data));
//     }, [jql]);

// JiraResults()
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Key</th>
//             <th>Summary</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jiraData.issues.map(issue => (
//             <tr key={issue.key}>
//               <td>{issue.key}aa</td>
//               <td>{issue.fields.summary}</td>
//               <td>{issue.fields.status.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

// }

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import querystring from 'querystring';
// // import https from 'https';

// // const instance = axios.create({
// //   httpsAgent: new https.Agent({
// //     rejectUnauthorized: false
// //   }),
// //   baseURL: 'https://yax.mobinnet.net/rest/api/2/search' + querystring.stringify({ jql }),
// //   auth: {
// //     username: 'al.akbari',
// //     password: '1234#D%@li'
// //   }
// // });

// // const JiraIssues = () => {
// //   const [issues, setIssues] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await instance.get(`/search?jql=project = ALIREZA  AND  status = DONE `);

// //         setIssues(response.data.issues.map(issue => ({
// //           key: issue.key,
// //           summary: issue.fields.summary,
// //           status: issue.fields.status.name,
// //           assignee: issue.fields.assignee?.name
// //         })));
// //       } catch (error) {
// //         setError(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (error) {
// //     return <p>Failed to fetch Jira issues: {error.message}</p>;
// //   }

// //   return (
// //     <ul>
// //       {issues.map(issue => (
// //         <li key={issue.key}>
// //           <p>Key: {issue.key}</p>
// //           <p>Summary: {issue.summary}</p>
// //           <p>Status: {issue.status}</p>
// //           <p>Assignee: {issue.assignee}</p>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default JiraIssues;

// // import React, { useState, useEffect } from 'react';
// // import Search from './Search';

// // const JiraData = () => {
// //   const [data, setData] = useState([]);
// //   useEffect(() => {
// //     const getData = async () => {
// //       const jql = 'project =ALIREZA AND STATUS = DONE';
// //       const results = await Search(jql);
// //       setData(results);
// //     };
// //     getData();
// //   }, []);

// //   return (
// //     <div>
// //       {data.map((issue) => (
// //         <div key={issue.key}>
// //           <p>{issue.fields.summary}</p>
// //           <p>{issue.fields.status.name}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default JiraData;
