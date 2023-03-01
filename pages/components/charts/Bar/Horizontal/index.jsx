/** @format */ 

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index({ props }) {
	const [basicData] = useState({
		labels: props.labels,
		datasets: [
			{
				label: props.createNew.firstTip.name,
				backgroundColor: props.createNew.firstTip.bg,
				data: props.createNew.firstTip.datas,
			},

			{
				label: props.createNew.secondTip.name,
				backgroundColor: props.createNew.secondTip.bg,
				data: props.createNew.secondTip.datas,
			},
		],
	});

	const getLightTheme = () => {
		let horizontalOptions = {
			indexAxis: 'y', // تنظیمات نمودار ستونی افقی
			maintainAspectRatio: false,
			aspectRatio: 0.8,
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
		};
		return horizontalOptions;
	};
	const horizontalOptions = getLightTheme();
	return (
		<div className='card'>
			<Chart
				type='bar'
				data={basicData}
				options={horizontalOptions}
			/>
		</div>
	);
}
