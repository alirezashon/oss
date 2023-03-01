/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [chartData] = useState({
		datasets: [
			{
				data: [23, 22, 11, 13, 14, 20, 11],
				backgroundColor: [
					'#42A5F5',
					'#66BB6A',
					'#FFA726',
					'#a5cd39',
					'#26C6DA',
					'#7E57C2',
					'#499b01',
				],
				label: 'My dataset',
			},
		],
		labels: [
			'Alireza Akbari',
			'Zahra Haghanian',
			'saeid nasiri',
			'bahare dehghan',
			'behnam nikzad',
			'mohsen mohammad amini',
			'masoud godarzi',
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
				grid: {
					color: '#ebedef',
				},
			},
		},
	});

	return (
		<Chart
			type='polarArea'
			data={chartData}
			options={lightOptions}
		/>
	);
}
