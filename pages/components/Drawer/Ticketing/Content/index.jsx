/** @format */
import { RiAttachment2 } from 'react-icons/ri';
import MultiSelect from '../../../formcomponents/MultiSelect';
import DropDown from '../../../formcomponents/DropDown';
import Editor from '../../../formcomponents/Editor';

export default function index() {
	return (
		<>
			<div className='ticketing-box'>
				<div className='ticketing-layout'>
					<div className='ticketing-inner-layout'>
						<form
							action='/api/ticketing'
							method='post'
							className='ticketing-form'>
							<div className='ticketing-form-scroll'>
								<div className='ticketing-top-header-row'>
									<img
										src='/images/logo.jpg'	
										className='ticketing-logo'
									/>
									<img
										src='/images/me.jpg'
										className='ticketing-profile-image'
									/>
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-label '>خلاصه</label>
									<input
										name='summary'
										id='summary'
										dir='rtl'
										type='text'
										className='ticketing-input text-success'
									/>
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-btn-styles'> توسعه دهنده</label>
									<label className='mt-2'>نیروی های درون سازمانی</label>
									<input
										className='form-check-input border-warning bg-success mt-2'
										type='radio'
										name='developer'
										value='نیروی های درون سازمانی'
										id='self-team'
										checked
									/>
									<label className='mt-2'>پیمانکار</label>
									<input
										className='form-check-input border-warning bg-success mt-2'
										type='radio'
										name='developer'
										value='no'
										id='peymankar'
									/>
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-btn-styles'> تیم توسعه</label>
									<MultiSelect props={{ class: 'ticketing-multi-select' }} />
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-btn-styles w-25'>
										برآورد هزینه
									</label>
									<input
										dir='rtl'
										type='text'
										name='payment'
										id='payment'
										className='ticketing-input text-success'
									/>
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-btn-styles'>استراتژی</label>
									<input
										dir='rtl'
										name='strategy'
										id='strategy'
										type='text'
										className='ticketing-input text-success'
									/>
								</div>
								<div className='ticketing-layout-row'>
									<label className='ticketing-btn-styles'>اسکرام مستر</label>
									<DropDown />
								</div>
								<div className='ticketing-editor-box '>
									<Editor />
								</div>
								<div className='ticketing-layout-row '>
									<input
										style={{ display: 'none' }}
										type='file'
										name='file'
										id='file'
										class='inputfile'
									/>
									<label
										for='file'
										className='ticketing-file-input-label'>
										پیوست <RiAttachment2 size={24} />
									</label>
								</div>
								<button
									type='submit'
									className='ticketing-submit'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
