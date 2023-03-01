/** @format */

import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
    
const [issues, setIssues] = useState([]);

    useEffect(() => {
			async function fetchData() {
				const response = await fetch(
					'/api/dashboards/oss/all-requests-assignee'
				);
				const data = await response.json();
				setIssues(data);
			}
			fetchData();
    }, []);
   
const processData = () => {
	const assigneeMap = new Map();
	issues.forEach((issue) => {
		const assigneeName = issue.fields.assignee.displayName;
		const assigneeCount = assigneeMap.get(assigneeName) || 0;
		assigneeMap.set(assigneeName, assigneeCount + 1);
	});
	const labels = Array.from(assigneeMap.keys());
	const data = Array.from(assigneeMap.values());
	return {
		labels,
		datasets: [
			{
				data,
				backgroundColor: [
					'#42A5F5',
					'#66BB6A',
					'#FFA726',
					'#26C6DA',
                    '#7E57C2',
                    '#499b01',
                    '#a5cd39',
                    'coral'
				],
			},
		],
	};
};

		
	
		
    return (
			<>
				<div className='oss-dashboard-chart-box'>
					<Chart
						type='polarArea'
						data={processData()}
					/>
				</div>
			</>
		);
}









