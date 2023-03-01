/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function index() {
	const [value1, setValue1] = useState(0);

	const interval = useRef(null);

	useEffect(() => {
		let val = value1;
		interval.current = setInterval(() => {
			val += Math.floor(Math.random() * 10) + 1;

			if (val >= 100) {
				val = 100;
				toast.current.show({
					severity: 'info',
					summary: 'Success',
					detail: 'Process Completed',
				});
				clearInterval(interval.current);
			}

			setValue1(val);
		}, 2000);

		return () => {
			if (interval.current) {
				clearInterval(interval.current);
				interval.current = null;
			}
		};
	}, []);

	return (
		<>
			<div className='card'>
				<h5>Dynamic</h5>
				<ProgressBar value={value1}></ProgressBar>
			</div>
		</>
	);
}
