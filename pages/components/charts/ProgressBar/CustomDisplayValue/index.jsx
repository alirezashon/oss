/** @format */

import { ProgressBar } from 'primereact/progressbar';
import React from 'react';

export default function index() {
	const displayValueTemplate = (value) => {
		return (
			<React.Fragment>
				{value}/<b>100</b>
			</React.Fragment>
		);
	};

	return (
		<>
			<h5>Custom display value</h5>
			<ProgressBar
				value={40}
				displayValueTemplate={displayValueTemplate}></ProgressBar>
		</>
	);
}
