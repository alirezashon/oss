/** @format */

import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export default function index() {
	const [checked1, setChecked1] = useState(false);

	return (
		<div>
			<div className='card'>
				<h5>Basic</h5>
				<InputSwitch
					checked={checked1}
					onChange={(e) => setChecked1(e.value)}
				/>
			</div>
		</div>
	);
}
