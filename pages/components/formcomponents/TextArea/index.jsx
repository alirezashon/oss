/** @format */

import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

export default function index() {
	const [value, setValue] = useState('');
	return (
		<div>
			<div className='card'>
				<h5>Auto Resize</h5>
				<InputTextarea
					value={value}
					onChange={(e) => setValue(e.target.value)}
					rows={5}
					cols={30}
					autoResize
				/>
			</div>
		</div>
	);
}
