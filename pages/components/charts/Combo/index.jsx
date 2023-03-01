/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [chartData] = useState({
		labels: [
			'Alireza Akbari',
			'Zahra Haghanian',
			'saeid nasiri',
			'bahare dehghan',
			'behnam nikzad',
			'mohsen mohammad amini',
			'masoud godarzi',
		],
		datasets: [
			{
				type: 'line',
				label: 'First Tip',
				borderColor: '#04470f',
				borderWidth: 2,
				fill: false,
				tension: 0.4,
				data: [50, 25, 12, 48, 56, 76, 42],
			},
			{
				type: 'bar',
				label: 'Second Tip',
				backgroundColor: '#a5cd39',
				data: [21, 84, 24, 75, 37, 65, 34],
				borderColor: 'white',
				borderWidth: 2,
			},
			{
				type: 'bar',
				label: 'Third Tip',
				backgroundColor: '#499b01',
				data: [41, 52, 24, 74, 23, 21, 32],
			},
		],
	});

	const [lightOptions] = useState({
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
				ticks: {
					color: '#495057',
				},
				grid: {
					color: '#ebedef',
				},
			},
		},
	});

	return (
		<div className='card'>
			<Chart
				type='bar'
				data={chartData}
				options={lightOptions}
			/>
		</div>
	);
}
