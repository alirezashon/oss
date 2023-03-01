/** @format */

import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function index() {
	const toast = useRef(null);

	const showStickyMessage = () => {
		toast.current.show({
			severity: 'success',
			summary: 'props.message',
			detail: 'message content',
			sticky: true,
		});
	};
	return (
		<>
			<div onLoad={showStickyMessage}>
				<Toast ref={toast} />
				<div className='card toast-demo'>
					<Button
						label='send message'
						className='bg-success'
						onClick={showStickyMessage}
					/>
				</div>
			</div>
		</>
	);
}
