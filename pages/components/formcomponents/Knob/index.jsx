/** @format */

import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function index() {
	const [value, setValue] = useState(0);

	return (
		<>
			<div className='field col-12 md:col-4'>
				<h5 className='mt-3'>Size</h5>
				<Knob
					value={value}
					size={200}
					onChange={(e) => setValue(e.value)}
				/>
			</div>
		</>
	);
}
