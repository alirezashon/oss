/** @format */

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export default function index({ props }) {
	const [value, setValue] = useState('');

	return (
		<>
			<span className='p-float-label'>
				<InputText
					style={{ width: props.width, direction: 'rtl' }}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<label htmlFor='username'>{props.name}</label>
			</span>
		</>
	);
}
