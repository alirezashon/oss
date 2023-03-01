/** @format */

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index() {
	const [basicData] = useState({
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
				backgroundColor: '#499b01',
				data: [77, 88, 80, 81, 16, 55, 44],
			},
			{
				label: 'Second Tip',
				backgroundColor: '#a5cd39',
				data: [99, 77, 40, 19, 86, 67, 90],
			},
		],
	});

	const getLightTheme = () => {
		let basicOptions = {
			// تنظیمات نمودار ستونی عمودی
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: {
					labels: {
						color: '#495057', //      رنگ متن راهنمای جدول   قسمت بالا
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: '#495057', //  رنگ متن محور افقی
					},
					grid: {
						color: '#ebedef', //      رنگ خطوط محور عمودی
					},
				},
				y: {
					ticks: {
						color: '#495057', //رنگ متن محور عمودی
					},
					grid: {
						color: '#ebedef', //      رنگ خطوط محور افقی
					},
				},
			},
		};
		return basicOptions;
	};
	const basicOptions = getLightTheme();
	return (
		<div className='card'>
			<Chart
				type='bar'
				data={basicData}
				options={basicOptions}
			/>
		</div>
	);
}
