/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [chartData] = useState({
		labels: [
			'Eating',
			'Drinking',
			'Sleeping',
			'Designing',
			'Coding',
			'Cycling',
			'Running',
		],
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgba(179,181,198,0.2)',
				borderColor: 'rgba(179,181,198,1)',
				pointBackgroundColor: 'rgba(179,181,198,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(179,181,198,1)',
				data: [65, 59, 90, 81, 56, 55, 40],
			},
			{
				label: 'My Second dataset',
				backgroundColor: 'rgba(255,99,132,0.2)',
				borderColor: 'rgba(255,99,132,1)',
				pointBackgroundColor: 'rgba(255,99,132,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,99,132,1)',
				data: [28, 48, 40, 19, 96, 27, 100],
			},
		],
	});

	const [lightOptions] = useState({
		plugins: {
			legend: {
				labels: {
					color: '#495057',
				},
			},
		},
		scales: {
			r: {
				pointLabels: {
					color: '#495057',
				},
				grid: {
					color: '#ebedef',
				},
				angleLines: {
					color: '#ebedef',
				},
			},
		},
	});

	return (
		<div className='card flex justify-content-center'>
			<Chart
				type='radar'
				data={chartData}
				options={lightOptions}
				style={{ position: 'relative' }}
			/>
		</div>
	);
}
