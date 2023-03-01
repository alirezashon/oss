/** @format */

import { ProgressBar } from 'primereact/progressbar';

export default function index() {
	return (
		<>
			<h5>Indeterminate</h5>
			<ProgressBar
				mode='indeterminate'
				style={{ height: '6px' }}></ProgressBar>
		</>
	);
}
