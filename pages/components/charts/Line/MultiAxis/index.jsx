/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [multiAxisData] = useState({
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Dataset 1',
				fill: false,
				borderColor: '#42A5F5',
				yAxisID: 'y',
				tension: 0.4,
				data: [65, 59, 80, 81, 56, 55, 10],
			},
			{
				label: 'Dataset 2',
				fill: false,
				borderColor: '#00bb7e',
				yAxisID: 'y1',
				tension: 0.4,
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	});

	let multiAxisOptions = {
		stacked: false,
		maintainAspectRatio: false,
		aspectRatio: 0.6,
		plugins: {
			legend: {
				labels: {
					color: '#495057',
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: '#495057',
				},
				grid: {
					color: '#ebedef',
				},
			},
			y: {
				type: 'linear',
				display: true,
				position: 'left',
				ticks: {
					color: '#495057',
				},
				grid: {
					color: '#ebedef',
				},
			},
			y1: {
				type: 'linear',
				display: true,
				position: 'right',
				ticks: {
					color: '#495057',
				},
				grid: {
					drawOnChartArea: false,
					color: '#ebedef',
				},
			},
		},
	};
	return (
		<>
			<div className='card'>
				<Chart
					type='line'
					data={multiAxisData}
					options={multiAxisOptions}
				/>
			</div>
		</>
	);
}
