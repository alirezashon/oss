/** @format */

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Badge } from 'primereact/badge';
import Content from './Content'

export default function index() {
    const [visible, setVisible] = useState(false);

	return (
		<div>
			<div className='card'>
				<Sidebar
					visible={visible}
					onHide={() => setVisible(false)}
                    fullScreen>
                    <Content/>
                    </Sidebar>
				<but
					onClick={() => setVisible(true)}
					className='mr-2 drawer-btn border border-white'>
					<i
						className='pi pi-user mr-4 p-text-secondary p-overlay-badge'
						style={{ fontSize: '1.7rem', color: 'white' }}>
						<Badge
							value='7'
							className='bg-danger text-white'></Badge>
					</i>
				</but>
			</div>
		</div>
	);
}
