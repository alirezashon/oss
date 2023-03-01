/** @format */

import React, { useState } from 'react';
import { Chips } from 'primereact/chips';

export default function index({ props }) {
	const [values1, setValues1] = useState([]);

	return (
		<div className='card p-fluid'>
			<span className='p-float-label'>
				<Chips
					style={{ width: props.width }}
					value={values1}
					onChange={(e) => setValues1(e.value)}
				/>
				<label htmlFor='username'>{props.name}</label>
			</span>
		</div>
	);
}
