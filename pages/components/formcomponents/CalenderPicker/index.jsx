/** @format */

import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react';

export default function index() {
	let today = new Date();
	let month = today.getMonth();
	let miladi = parseInt(today.getFullYear());
	let year = miladi - 622;
	let prevMonth = month === 0 ? 11 : month - 1;
	let prevYear = prevMonth === 11 ? year - 1 : year;
	let nextMonth = month === 11 ? 0 : month + 1;
	let nextYear = nextMonth === 0 ? year + 1 : year;

	const [date3, setDate3] = useState(null);

	let minDate = new Date();
	minDate.setMonth(prevMonth);
	minDate.setFullYear(prevYear);

	let maxDate = new Date();
	maxDate.setMonth(nextMonth);
	maxDate.setFullYear(nextYear);

	return (
		<>
				<Calendar
					value={date3}
					onChange={(e) => setDate3(e.value)}
					showIcon
				/>
		</>
	);
}
