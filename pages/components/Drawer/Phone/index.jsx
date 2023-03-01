/** @format */

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Badge } from 'primereact/badge';
import Content from './Content';
export default function index() {
	const [visibleRight, setVisibleRight] = useState(false);

	return (
		<div>
			<div className='card'>
				<Sidebar
					visible={visibleRight}
					position='right'
					style={{
						border: 'solid 5px #499b01',
						borderRadius: '44px',
						backgroundColor: '#a5cd39',
					}}
					onHide={() => setVisibleRight(false)}>
					<Content />
				</Sidebar>

				<but
					onClick={() => setVisibleRight(true)}
					className='mr-2 drawer-btn border border-white'>
					<i
						className='pi pi-phone mr-4 p-text-secondary p-overlay-badge'
						style={{ fontSize: '1.7rem', color: 'white' }}>
						<Badge
							value='3'
							style={{ backgroundColor: '#fb6400' }}
							className='text-white'></Badge>
					</i>
				</but>
			</div>
		</div>
	);
}
