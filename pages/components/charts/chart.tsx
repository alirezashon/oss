/** @format */

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart() {
	const data = {
		labels: [
			'نصب ایندور',
			'نصب اوتدور',
			'پشتیبانی ایندور',
			'پشتیبانی اوتدور',
			'سایر',
		],
		options: [
			{
				responsive: true,
				legend: {
					display: false,
					position: 'bottom',
				},
			},
		],
		datasets: [
			{
				label: 'success-tickets',
				data: [11, 19, 3, 5, 2],
				backgroundColor: [
					'#f53918',
					'#0dcbe4',
					'#499b01',
					'#0c8c96',
					'#7c27b4',
				],
				borderColor: ['white'],

				borderWidth: 4,
			},
		],
	};

	return <Doughnut data={data} />;
}
