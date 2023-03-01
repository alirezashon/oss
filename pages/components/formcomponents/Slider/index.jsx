/** @format */

import React, { useState } from 'react';
import { Slider } from 'primereact/slider';

export default function index() {
	const [value, setValue] = useState(null);

	return (
		<>
			<div className='card'>
				<h5>Basic: {value}</h5>
				<Slider
					value={value}
					onChange={(e) => setValue(e.value)}
				/>
			</div>
		</>
	);
}
