/** @format */

import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Table from '../Table';

export default function index({ props }) {
	let datas = [<Table />, <Table />];
	return (
		<>
			<div>
				<div className='card'>
					<h5>Horizontal</h5>
					<Splitter
						style={{ height: '300px' }}
						className='mb-5'>
						{datas.map((data) => (
							<SplitterPanel className='flex align-items-center justify-content-center'>
								{data}
							</SplitterPanel>
						))}
					</Splitter>
				</div>
			</div>
		</>
	);
}
