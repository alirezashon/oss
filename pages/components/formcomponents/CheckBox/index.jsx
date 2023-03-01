/** @format */

import { Checkbox } from 'primereact/checkbox';
import React, { useState } from 'react';

export default function index() {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className='field-checkbox'>
				<Checkbox
					inputId='binary'
					checked={checked}
					onChange={(e) => setChecked(e.checked)}
				/>
				<label htmlFor='binary'> forgot Me</label>
			</div>
		</>
	);
}
