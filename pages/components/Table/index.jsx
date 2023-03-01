/** @format */
import Radar from '../charts/Radar';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';

export default function index() {
	const [color, setColor] = useState('#499b01');
	  const [showPicker, setShowPicker] = useState(false);

	let tableHead = [
		'created',
		'key',
		'customerRequestType',
		'summary',
		'P',
		'Assignee',
		'timeTofirstResponse',
		'timeToResolution',
		'reporter',
		'lastComment',
		'update',
	];

	let data = [
		{
			id: 1,
			created: 'alireza',
			T: 'force',
			key: 'ALI',
			customerRequestType: 'ALIREZA',
			summary: 'GOD IS GREATE',
			P: 'Low Heigh',
			Assignee: 'SOG',
			timeTofirstResponse: '22Years',
			timeToResolution: '2023',
			reporter: 'GOD',
			lastComment: 'You Can Do It',
			update: '2022',
		},
		{
			id: 2,
			created: 'alireza',
			T: 'force',
			key: 'ALI',
			customerRequestType: 'ALIREZA',
			summary: 'GOD IS GREATE',
			P: 'Low Heigh',
			Assignee: 'SOG',
			timeTofirstResponse: '22Years',
			timeToResolution: '2023',
			reporter: 'GOD',
			lastComment: 'You Can Do It',
			update: '2022',
		},
		{
			id: 2,
			created: 'alireza',
			T: 'force',
			key: 'ALI',
			customerRequestType: 'ALIREZA',
			summary: 'GOD IS GREATE',
			P: 'Low Heigh',
			Assignee: 'SOG',
			timeTofirstResponse: '22Years',
			timeToResolution: '2023',
			reporter: 'GOD',
			lastComment: 'You Can Do It',
			update: '2022',
		},
	];

	return (
		<div className='bg'>
			<div className='board-box' style={{backgroundColor:color}}>
				<div
					className='table-board-label'
					style={{ backgroundColor: color }}>
					Filter Results : IT-OSS-Request-Waiting For Support &nbsp;
					<MdModeEditOutline onClick={() => setShowPicker(!showPicker)} />
					{showPicker && (
						<HexColorPicker
							color={color}
							onChange={setColor}
						/>
					)}
					<div></div>
				</div>
				<div className='table-box'>
					<table className='table'>
						<thead>
							<tr>
								{tableHead.map((title) => (
									<th
										className='td'
										scope='col'>
										{title}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((row) => (
								<tr key={row.id}>
									<td className='td'>{row.created}</td>
									<td className='td'>{row.T}</td>
									<td className='td'>{row.key}</td>
									<td className='td'>{row.customerRequestType}</td>
									<td className='td'>{row.summary}</td>
									<td className='td'>{row.P}</td>
									<td className='td'>{row.timeTofirstResponse}</td>
									<td className='td'>{row.timeToResolution}</td>
									<td className='td'>{row.reporter}</td>
									<td className='td'>{row.lastComment}</td>
									<td className='td'>{row.update}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
