/** @format */
import { HexColorPicker } from 'react-colorful';
import { useState, useEffect } from 'react';
import { MdModeEditOutline } from 'react-icons/md';

export default function index({props}) {
	const [color, setColor] = useState('#499b01');
	const [showPicker, setShowPicker] = useState(false);



	return (
		<div className='bg'>
			<div
				className='board-box'
				style={{ backgroundColor: color }}>
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
							{props.tableHead.map((title) => (
								<tr>
									<th
										colSpan={title.created.col}
										className='td'
										scope='col'>
										{title.created.name}
									</th>
									<th
										colSpan={title.type.col}
										className='td'
										scope='col'>
										{title.type.name}
									</th>
									<th
										colSpan={title.key.col}
										className='td'
										scope='col'>
										{title.key.name}
									</th>
									<th
										colSpan={title.customerRequestType.col}
										className='td'
										scope='col'>
										{title.customerRequestType.name}
									</th>
									<th
										colSpan={title.summary.col}
										className='td'
										scope='col'>
										{title.summary.name}
									</th>
									<th
										colSpan={title.P.col}
										className='td'
										scope='col'>
										{title.P.name}
									</th>
									<th
										colSpan={title.assignee.col}
										className='td'
										scope='col'>
										{title.assignee.name}
									</th>
									<th
										colSpan={title.reporter.col}
										className='td'
										scope='col'>
										{title.reporter.name}
									</th>
									<th
										colSpan={title.lastComment.col}
										className='td'
										scope='col'>
										{title.lastComment.name}
									</th>
									<th
										colSpan={title.update.col}
										className='td'
										scope='col'>
										{title.update.name}
									</th>
								</tr>
							))}
						</thead>
						<tbody>
							{props.data.map((item) => (
								<tr>
									<td
										colSpan={3}
										className='td'
										key={item.id}>
										{item.fields.created}
									</td>
									<td
										colSpan={3}
										className='td'
										key={item.id}>
										{/* {item.fields.issuetype.name} */}
										<img src={item.fields.issuetype.iconUrl} />
									</td>
									<td
										colSpan={2}
										className='td'
										key={item.id}>
										{item.key}
									</td>
									<td
										colSpan={3}
										className='td'
										key={item.id}>
										{item.fields.customfield_17501.requestType.name}
									</td>

									<td
										className='td'
										key={item.id}>
										{item.fields.summary}
									</td>
									<td
										className='td'
										key={item.id}>
										{item.fields.priority.name}
										<img src={item.fields.priority.iconUrl} />
									</td>
									{/* <td
										colSpan={2}
										className='td'
										key={item.id}>
										{item.fields.assignee.name}
									</td> */}
									<td
										colSpan={2}
										className='td'
										key={item.id}>
										{item.fields.reporter.name}
										<img src={item.fields.reporter.avatarUrls['48x48']} />
									</td>

									<td
										colSpan={2}
										className='td'
										key={item.id}>
										{item.fields.updated}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
