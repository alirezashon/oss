/** @format */
import Ticketing from '../Drawer/Ticketing'
import React from 'react';
import Link from 'next/link';
export default function index() {
	return (
		<>
			<nav class='navbar navbar-expand-lg text-light navigation'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler search-btn'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					{/*menu*/}
					<div
						className='collapse navbar-collapse'
						id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item m-3'>
								<Link
									className='Link'
									href='/'>
									داشبورد
								</Link>
							</li>
							<li className='nav-item m-3'>
								<Link
									className='Link'
									href='/screens/fourth'>
									تیکتینگ
								</Link>
							</li>
							<li className='nav-item m-3'>
								<Link
									className='Link'
									href='/screens/formComponents'>
									کامپوننت
								</Link>
							</li>
							<li className='nav-item m-3'>
								<Link
									className='Link'
									href='/screens/charts'>
									نمودار ها
								</Link>
							</li>
						</ul>
					</div>
					{/*end-of-menu*/}
					<div className='calender-box'>
						<img
							className='logo'
							src={'/images/logo.jpg'}
							/>
					</div>
							<Ticketing/>
					{/*dropdown */}
					<div className='dropdown mx-5'>
						<button
							className='btn text-white dropdown-toggle'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							جستجوی پیشرفته
						</button>
						<div className='dropdown-menu p-3  search-options-box'>
							<div className='d-flex'>
								<div className='form-check mx-3'>
									<input
										className='form-check-input'
										type='radio'
										name='flexRadioDefault'
										id='flexRadioDefault1'
									/>
									<label
										className='form-check-label'
										for='flexRadioDefault1'>
										جدید ترین
									</label>
								</div>
								<div className='form-check mx-3'>
									<input
										className='form-check-input'
										type='radio'
										name='flexRadioDefault'
										id='flexRadioDefault2'
										checked
									/>
									<label
										className='form-check-label'
										for='flexRadioDefault2'>
										تیکت های باز
									</label>
								</div>
								<div className='form-check mx-3'>
									<input
										className='form-check-input'
										type='radio'
										name='flexRadioDefault'
										id='flexRadioDefault2'
										checked
									/>
									<label
										className='form-check-label'
										for='flexRadioDefault2'>
										تیکت های بسته شده
									</label>
								</div>
								<div className='form-check form-switch mx-4'>
									<input
										className='form-check-input'
										type='checkbox'
										role='switch'
										id='flexSwitchCheckChecked'
										checked
									/>
									<label
										className='form-check-label '
										for='flexSwitchCheckChecked'>
										موجود
									</label>
								</div>
							</div>

							<div className='d-flex mt-3'>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='checkbox'
										id='inlineCheckbox1'
										value='option1'
									/>
									<label
										className='form-check-label'
										for='inlineCheckbox1'>
										BR
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input '
										type='checkbox'
										id='inlineCheckbox2'
										value='option2'
									/>
									<label
										className='form-check-label'
										for='inlineCheckbox2'>
										BI
									</label>
								</div>
							</div>
							<button
								type='button'
								className='btn btn-light btn-outline-success'>
								جستجو
							</button>
						</div>
					</div>
					{/* end-of-dropdown */}
					<form
						className='d-flex'
						role='search'>
						<input
							className='form-control'
							type='search'
							placeholder='جستجو...'
							aria-label='جستجو'
						/>
						<button
							className='btn text-white'
							style={{ backgroundColor: '#499b01', marginRight: '-11%' }}
							type='submit'>
							جستجو
						</button>
					</form>
				</div>
			</nav>
		</>
	);
}
