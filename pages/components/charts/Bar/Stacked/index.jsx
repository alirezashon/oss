/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [stackedData] = useState({
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
				type: 'bar',
				label: 'First Tip',
				backgroundColor: ' #a5cd39',
				data: [33, 55, 66, 68, 90, 55, 66],
			},
			{
				type: 'bar',
				label: 'Second Tip',
				backgroundColor: '#ff8800',
				data: [77, 99, 74, 55, 37, 65, 77],
			},
			{
				type: 'bar',
				label: 'Third Tip',
				backgroundColor: '#499b01',
				data: [133, 77, 44, 44, 53, 55, 52],
			},
		],
	});
	const getLightTheme = () => {
		let stackedOptions = {
			// تنظیمات نمودار استک
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				legend: {
					labels: {
						color: '#495057',
					},
				},
			},
			scales: {
				x: {
					stacked: true,
					ticks: {
						color: '#495057',
					},
					grid: {
						color: '#ebedef',
					},
				},
				y: {
					stacked: true,
					ticks: {
						color: '#495057',
					},
					grid: {
						color: '#ebedef',
					},
				},
			},
		};
		return stackedOptions;
	};
	const stackedOptions = getLightTheme();
	return (
		<>
			<div className='card'>
				<Chart
					type='bar'
					data={stackedData}
					options={stackedOptions}
				/>
			</div>
		</>
	);
}
