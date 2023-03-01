/** @format */
import { MdPhoneEnabled } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

export default function index() {
	const content = () => {
		return (
			<div className='call-list-details'>
				<MdPhoneEnabled
					color='#499b01'
					size={22}
				/>
				<MdEmail
					color='#a5cd39'
					size={22}
				/>
			</div>
		);
	};
	const accordion = (name, heading, collapse, collapseT) => {
		return (
			<div
				className='accordion'
				id='accordionExample'>
				<div className='accordion-item'>
					<h2
						className='accordion-header'
						id={heading}>
						<button
							id='call-list-labels'
							className='accordion-button '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target={collapseT}
							aria-expanded='true'
							aria-controls={collapse}>
							{name}
						</button>
					</h2>
					<div
						id={collapse}
						class='accordion-collapse collapse show'
						aria-labelledby={heading}
						data-bs-parent='#accordionExample'>
						<div className='accordion-body'>{content()}</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className='call-list-page'>
				{accordion(
					'Alireza Akbari',
					'headingOne',
					'collapseOne',
					'#collapseOne'
				)}
				{accordion(
					'Kamal Khalili',
					'headingTwo',
					'collapseTwo',
					'#collapseTwo'
				)}
				{accordion(
					'Mohsen Akhbari',
					'headingThree',
					'collapseThree',
					'#collapseThree'
				)}
			</div>
		</>
	);
}

// test useState

// export default function index() {
//     const [display , setDisplya] = useState('none')
//     const test = (display) => {
//         return (
//             <div style={{display:display}}>
//                 <MdPhoneEnabled />
//                 <MdEmail/>
//             </div>
//         )
//     }
//     const showDetails = () => {
//         if (display == 'none') setDisplya('block')
//         else setDisplya('none')
//     }

// 	return (
// 		<>
//             <div className='call-list-page'>
//                 <button onClick={showDetails}>hiii</button>
//                 {test(showDetails)}
//             </div>
// 		</>
// 	);
// }
