/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [basicData] = useState({
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				borderColor: '#42A5F5',
				tension: 0.4,
			},
			{
				label: 'Second Dataset',
				data: [28, 48, 40, 19, 86, 27, 90],
				fill: false,
				borderColor: '#FFA726',
				tension: 0.4,
			},
		],
	});

	const [lineStylesData] = useState({
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				tension: 0.4,
				borderColor: '#42A5F5',
			},
			{
				label: 'Second Dataset',
				data: [28, 48, 40, 19, 86, 27, 90],
				fill: false,
				borderDash: [5, 5],
				tension: 0.4,
				borderColor: '#66BB6A',
			},
			{
				label: 'Third Dataset',
				data: [12, 51, 62, 33, 21, 62, 45],
				fill: true,
				borderColor: '#FFA726',
				tension: 0.4,
				backgroundColor: 'rgba(255,167,38,0.2)',
			},
		],
	});

	const getLightTheme = () => {
		let basicOptions = {
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
		};
		return basicOptions;
	};
	const basicOptions = getLightTheme();
	return (
		<>
			<div className='card'>
				<Chart
					type='line'
					data={lineStylesData}
					options={basicOptions}
				/>
			</div>
		</>
	);
}
