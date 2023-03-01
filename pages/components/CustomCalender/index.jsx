/** @format */
import { MdArrowLeft } from 'react-icons/md';
import { MdArrowRight } from 'react-icons/md';


export default function index() {


	let tableHead = [
		'شنبه',
		'یکشنبه',
		'دوشنبه',
		'سشنبه',
		'چهارشنبه',
		'پنجشنبه',
		'جمعه',
	];
	

	return (
		<>
			<div className='calender-table-box'>
				<table className='table calender-table'>
					<thead>
						<tr className='calender-table-month-year-row'>
							<td colSpan={1}></td>
							<td
								colSpan={3}
								className='calender-table-month-year'>
								{' '}
								<MdArrowLeft /> 
								فروردین
								<MdArrowRight />
							</td>
							<td
								colSpan={2}
								className='calender-table-month-year'>
								<MdArrowLeft />
								۱۴۰۱
								<MdArrowRight />
							</td>
							<td colSpan={2}></td>
						</tr>
						<tr className='calender-table-head'>
							{tableHead.map((title) => (
								<th
									className='calender-table-head-cel'
									scope='col'>
									{title}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>۱</td>
							<td className='calender-table-cel'>۲</td>
							<td className='calender-table-cel'>۳</td>
							<td className='calender-table-cel'>۴</td>
							<td className='calender-table-cel'>۵</td>
							<td className='calender-table-cel'>۶</td>
							<td className='calender-table-cel'>۷</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>۸</td>
							<td className='calender-table-cel'>۹</td>
							<td className='calender-table-cel'>۱۰</td>
							<td className='calender-table-cel'>۱۱</td>
							<td className='calender-table-cel'>۱۲</td>
							<td className='calender-table-cel'>۱۳</td>
							<td className='calender-table-cel'>۱۴</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>۱۵</td>
							<td className='calender-table-cel'>۱۶</td>
							<td className='calender-table-cel'>۱۷</td>
							<td className='calender-table-cel'>۱۸</td>
							<td className='calender-table-cel'>۱۹</td>
							<td className='calender-table-cel'>۲۰</td>
							<td className='calender-table-cel'>۲۱</td>
						</tr>

						<tr className='calender-table-column'>
							<td className='calender-table-cel'>۲۲</td>
							<td className='calender-table-cel'>۲۳</td>
							<td className='calender-table-cel'>۲۴</td>
							<td className='calender-table-cel'>۲۵</td>
							<td className='calender-table-cel'>۲۶</td>
							<td className='calender-table-cel'>۲۷</td>
							<td className='calender-table-cel'>۲۸</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>۲۹</td>
							<td className='calender-table-cel'>۳۰</td>
							<td className='calender-table-cel'>۳۱</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
