/** @format */
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'

export default function index() {
	const [issues, setIssues] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/currentTickets')
			const data = await response.json()
			setIssues(data.issues)
		}
		fetchData()
	}, [])

	return (
		<>
			<div className='text-white'>
				{issues.map((issue) => (
					<Link href={`/screens/issue/fetch/${issue.id}`}>
						<p key={issue.id}>{issue.key}</p>
					</Link>
				))}
			</div>
		</>
	)
}
