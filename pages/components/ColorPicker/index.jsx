/** @format */

import React, { useState } from 'react';
import { ColorPicker } from 'primereact/colorpicker';

export default function index() {
	const [color2, setColor2] = useState('499b01');

	return (
		<div>
			<div className='card'>
				<ColorPicker
					value={color2}
					onChange={(e) => setColor2(e.value)}></ColorPicker>
			</div>
		</div>
	);
}
