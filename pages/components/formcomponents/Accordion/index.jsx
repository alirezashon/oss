/** @format */

import { Accordion, AccordionTab } from 'primereact/accordion';
import React, { useState , useEffect } from 'react';
import { GoMailRead } from 'react-icons/go';

export default function index({ props }) {
	// const data = {label:props.label,content:props.content}
	// Object.keys(data).forEach((h)=>{header.push(h)})
	// Object.values(data).forEach((c)=>{content.push(c)})

	// باید از یوز افکت استفاده شه برای مپ کردن پراپس ها
	const [content , setContent] = useState([props.content])
	const [head , sethead] = useState([props.label])
	return (
		<>
			{head.map((sethead) => (
				<div>
					<Accordion
						className='accordion-custom '
						activeIndex={0}>
						<AccordionTab
							className='p-accordion-content'
							header={
								<React.Fragment>
									<GoMailRead />
									{sethead}
								</React.Fragment>
							}>
							{content.map((setContent) => (
								<p>{setContent}</p>
							))}
						</AccordionTab>
					</Accordion>
				</div>
			))}
		</>
	);
}
