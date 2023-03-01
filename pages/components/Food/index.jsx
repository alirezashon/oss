/** @format */
import { MdArrowLeft } from 'react-icons/md'
import { MdArrowRight } from 'react-icons/md'

export default function index() {
	let tableHead = [
		'جمعه',
        'پنجشنبه',
        'چهارشنبه',
        'سشنبه',
        'دوشنبه',
        'یکشنبه',
		'شنبه',
	]

	return (
		<>
			<div className='food-banner-box'>
				<div className='food-page'>
					<div className='food-banner'>
						<h1 className='food-banner-text text-white'>سامانه رزرو غذا</h1>
					</div>
					<div className='food-date-box'>
						<select
							className='dynamic-form-select '
							name='month'
							id='month'>
							<option
								className='dynamic-form-options'
								value='1'>
								فروردین
							</option>
							<option
								className='dynamic-form-options'
								value='2'>
								اردیبهشت
							</option>
							<option
								className='dynamic-form-options'
								value='3'>
								خرداد
							</option>
							<option
								className='dynamic-form-options'
								value='4'>
								تیر
							</option>
							<option
								className='dynamic-form-options'
								value='5'>
								مرداد
							</option>
							<option
								className='dynamic-form-options'
								value='6'>
								شهریور
							</option>
							<option
								className='dynamic-form-options'
								value='7'>
								مهر
							</option>
							<option
								className='dynamic-form-options'
								value='8'>
								آبان
							</option>
							<option
								className='dynamic-form-options'
								value='9'>
								آذر
							</option>
							<option
								className='dynamic-form-options'
								value='10'>
								دی
							</option>
							<option
								className='dynamic-form-options'
								value='11'
								selected>
								بهمن
							</option>
							<option
								className='dynamic-form-options'
								value='12'>
								اسفند
							</option>
						</select>

						<select
							className='dynamic-form-select mx-3'
							name='month'
							id='month'>
							<option
								className='dynamic-form-options'
								value='1'>
								۱۴۰۱
							</option>
							<option
								className='dynamic-form-options'
								value='2'>
								۱۴۰۲
							</option>
						</select>
					</div>
				</div>
			</div>
			<div className='w-75 mx-auto my-4 dir-rtl'>
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
							<td className='calender-table-cel'>
								۱<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۳<h5 className='d-block'>زرشک پلو</h5>
							</td>

							<td className='calender-table-cel'>
								۴<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۵<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۶<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۷<h5 className='d-block'>زرشک پلو</h5>
							</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>
								۸<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۹<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۰
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۱
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۲
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۳
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۴
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>
								۱۵
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۶
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۷
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۸
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۱۹
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۰
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۱
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
						</tr>

						<tr className='calender-table-column'>
							<td className='calender-table-cel'>
								۲۲
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۳
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۴
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۵
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۶
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۷
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۲۸
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
						</tr>
						<tr className='calender-table-column'>
							<td className='calender-table-cel'>
								۲۹
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۳۰
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
							<td className='calender-table-cel'>
								۳۱
								<h5 className='d-block'>زرشک پلو</h5>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
