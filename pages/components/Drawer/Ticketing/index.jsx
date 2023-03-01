/** @format */

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import Content from './Content';

export default function index() {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<div>
				<div>
					<Sidebar
						visible={visible}
						onHide={() => setVisible(false)}
						fullScreen>
						<Content />
					</Sidebar>
					<but
						onClick={() => setVisible(true)}
						style={{ borderRadius: '99px' }}
						className='pt-3 drawer-btn '>
						<i
							className='pi pi-book'
							style={{ fontSize: '1.7rem', color: 'white' }}></i>
					</but>
				</div>
			</div>
		</>
	);
}
