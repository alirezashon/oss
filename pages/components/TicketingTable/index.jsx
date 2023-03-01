/** @format */

export default function index() {
	const headers = [
		'Created',
		'T',
		'Key',
		'Customer Request Type',
		'Summary',
		'P',
		'Assignee',
		'Time to first response',
		'Time to resolution',
		'Last comment',
		'Updated',
		'Reporter',
	];
	const firstContent = [
		'2023/01/28 12:52',
		1,
		'SR-7983',
		'Ticketing',
		'please add 2 sub causes (attached in file )',
		'Medium',
		'Alireza Akbari',
		'1h',
		'3d4h',
		'باسلام انجام شد. پس از تایید تیکت بسته خواهد شد.',
		'2023/01/30 11:57',
		'MobinNet-Shiftmanager',
	];
	const secondContent = [
		'2023/01/28 16:42',
		1,
		'SR-8018',
		'Ticketing',
		'	ایجاد فیلد تعویض ONT',
		'Medium',
		'Alireza Akbari',
		'56min',
		'4d 2h',
		'باسلام انجام شد. پس از تایید تیکت بسته خواهد شد.',
		'2023/01/30 11:57',
		'Ali Heidari',
	];
	return (
		<>
			<div className='ticketing-table-box'>
	
				<div className='ticketing-table-body'>
					<table className='ticketing-table'>
						<thead className='ticketing-thead'>
							<tr>
								<td
									colSpan={6}
									className='ticketing-table-header'>
									Assignee To Me
								</td>
								<td colSpan={6} className='ticketing-table-header'></td>
							</tr>
							<tr className='ticketing-table-head-row'>
								{headers.map((head) => (
									<th className='ticketing-table-head'>{head}</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr className='ticketing-table-rows'>
								{firstContent.map((content) => (
									<td className='ticketing-table-row-cel'>{content}</td>
								))}
							</tr>
							<tr>
								{secondContent.map((content) => (
									<td className='ticketing-table-row-cel'>{content}</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
