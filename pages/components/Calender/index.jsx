/** @format */

import * as moment from 'jalali-moment';

export default function Calender() {
	// now = moment()
	// moment.locale('fa')
	// moment.format('YYYY/MM/DD')
	let todayJalali = moment().locale('fa').format('YYYY/M/D');
	return (
		<div>
			<div className='post-detail'>
				<p>{todayJalali}</p>
			</div>
		</div>
	);
}
