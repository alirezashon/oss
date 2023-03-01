/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [multiAxisData] = useState({
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
				label: 'First Tip',
				backgroundColor: [
					'#10c5d5',
					'#a010d5',
					'#a5cd39',
					'#7E57C2',
					'#d59010',
					'#FFCA28',
					'#26A69A',
				],
				yAxisID: 'y',
				data: [33, 59, 80, 81, 56, 55, 72],
			},
			{
				label: 'Second Tip',
				backgroundColor: '#499b01',
				yAxisID: 'y1',
				data: [99, 77, 60, 39, 76, 57, 73],
			},
		],
	});

	const getLightTheme = () => {
		let multiAxisOptions = {
			// تنظیمات نمودار مولتی اکسیس
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: {
					labels: {
						color: '#495057',
					},
				},
				tooltips: {
					mode: 'index',
					intersect: true,
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
						min: 0,
						max: 100,
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
					grid: {
						drawOnChartArea: false,
						color: '#ebedef',
					},
					ticks: {
						min: 0,
						max: 100,
						color: '#495057',
					},
				},
			},
		};
		return multiAxisOptions;
	};
	const multiAxisOptions = getLightTheme();
	return (
		<>
			<div className='card'>
				<Chart
					type='bar'
					data={multiAxisData}
					options={multiAxisOptions}
				/>
			</div>
		</>
	);
}
