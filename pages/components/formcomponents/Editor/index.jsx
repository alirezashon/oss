/** @format */

import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

export default function index() {
	const [text, setText] = useState('');

	return (
		<div>
			<div className='card'>
				<Editor
					formats={{ TextDirection: 'rtl' }}
					style={{
						direction: 'rtl',
						position:'relative',
					}}
					value={text}
					onTextChange={(e) => setText(e.htmlValue)}
				/>
			</div>
		</div>
	);
}
