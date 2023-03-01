/** @format */

import React, { useState } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

export default function index() {
	const [selectedCity1, setSelectedCity1] = useState(null);
	const countries = [
		{
			name: 'Australia',
			code: 'AU',
			states: [
				{
					name: 'New South Wales',
					cities: [
						{ cname: 'Sydney', code: 'A-SY' },
						{ cname: 'Newcastle', code: 'A-NE' },
						{ cname: 'Wollongong', code: 'A-WO' },
					],
				},
				{
					name: 'Queensland',
					cities: [
						{ cname: 'Brisbane', code: 'A-BR' },
						{ cname: 'Townsville', code: 'A-TO' },
					],
				},
			],
		},
		{
			name: 'Canada',
			code: 'CA',
			states: [
				{
					name: 'Quebec',
					cities: [
						{ cname: 'Montreal', code: 'C-MO' },
						{ cname: 'Quebec City', code: 'C-QU' },
					],
				},
				{
					name: 'Ontario',
					cities: [
						{ cname: 'Ottawa', code: 'C-OT' },
						{ cname: 'Toronto', code: 'C-TO' },
					],
				},
			],
		},
		{
			name: 'United States',
			code: 'US',
			states: [
				{
					name: 'California',
					cities: [
						{ cname: 'Los Angeles', code: 'US-LA' },
						{ cname: 'San Diego', code: 'US-SD' },
						{ cname: 'San Francisco', code: 'US-SF' },
					],
				},
				{
					name: 'Florida',
					cities: [
						{ cname: 'Jacksonville', code: 'US-JA' },
						{ cname: 'Miami', code: 'US-MI' },
						{ cname: 'Tampa', code: 'US-TA' },
						{ cname: 'Orlando', code: 'US-OR' },
					],
				},
				{
					name: 'Texas',
					cities: [
						{ cname: 'Austin', code: 'US-AU' },
						{ cname: 'Dallas', code: 'US-DA' },
						{ cname: 'Houston', code: 'US-HO' },
					],
				},
			],
		},
	];

	return (
		<div>
			<div className='card'>
				<h5>Basic</h5>
				<CascadeSelect
					value={selectedCity1}
					options={countries}
					optionLabel={'cname'}
					optionGroupLabel={'name'}
					optionGroupChildren={['states', 'cities']}
					style={{ minWidth: '14rem' }}
					placeholder={'Select a City'}
					onChange={(event) => setSelectedCity1(event.value)}
				/>
			</div>
		</div>
	);
}
