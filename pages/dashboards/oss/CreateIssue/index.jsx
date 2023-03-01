/** @format */
import { RiAttachment2 } from 'react-icons/ri'
import { useState } from 'react'
import { Editor } from 'primereact/editor'
export default function index() {
	const [selectedOption, setSelectedOption] = useState('')
	const [selectedOption1, setSelectedOption1] = useState('')

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value)
	}
	const handleSelectChange1 = (event) => {
		setSelectedOption1(event.target.value)
	}
	const showDynamic = () => {
		return (
			<div style={{ display: 'block' }}>
				<label
					className='ticketing-btn-styles'
					htmlFor='dynamic'>
					IMSI
				</label>
				<input
					className='auth-input'
					htmlFor='dynamic'
					name='imsi'
				/>
				<label
					className='ticketing-btn-styles'
					htmlFor='dynamic'>
					IMEI
				</label>
				<input
					className='auth-input'
					htmlFor='dynamic'
					name='imei'
				/>
				<label
					className='ticketing-btn-styles'
					htmlFor='dynamic'>
					MSIDSDN
				</label>
				<input
					className='auth-input'
					htmlFor='dynamic'
					name='msidsn'
				/>
			</div>
		)
	}
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
								<div className='oss-ticketing-layout-dynamic-form-box'>
									<div className='OSS-ticketing-layout-row'>
										<select
											className='dynamic-form-select '
											id='select-option'
											value={selectedOption}
											onChange={handleSelectChange}>
											<option
												className='dynamic-form-options'
												value=''>
												انتخاب
											</option>
											<option
												className='dynamic-form-options'
												value='CRM(B2C-LTE)'>
												{' '}
												CRM(B2C-LTE)
											</option>
											<option
												className='dynamic-form-options'
												value='MY'>
												MY
											</option>
											<option
												className='dynamic-form-options'
												value='CRM(B2B)'>
												CRM(B2B)
											</option>
											<option
												className='dynamic-form-options'
												value='Workflow'>
												Workflow
											</option>
											<option
												className='dynamic-form-options'
												value='Hispot'>
												Hispot
											</option>
											<option
												className='dynamic-form-options'
												value='Hotspot'>
												Hotspot
											</option>
											<option
												className='dynamic-form-options'
												value='IPG'>
												IPG
											</option>
											<option
												className='dynamic-form-options'
												value='LTE IBSng'>
												LTE IBSng
											</option>
											<option
												className='dynamic-form-options'
												value='Notifier'>
												Notifier
											</option>
											<option
												className='dynamic-form-options'
												value='VPN Tools'>
												VPN Tools
											</option>
											<option
												className='dynamic-form-options'
												value='Dashboard CRM'>
												Dashboard CRM
											</option>
											<option
												className='dynamic-form-options'
												value='Eshop'>
												Eshop
											</option>
											<option
												className='dynamic-form-options'
												value='laaS'>
												laaS
											</option>
											<option
												className='dynamic-form-options'
												value='Agent Management'>
												Agent Management
											</option>
										</select>

										<select
											className='dynamic-form-select w-50'
											id='select-option1'
											value={selectedOption1}
											onChange={handleSelectChange1}>
											<option
												className='dynamic-form-options'
												value=''>
												انتخاب
											</option>
											<option
												className='dynamic-form-options'
												value='option1'>
												تعریف محصول جدید
											</option>
											<option
												className='dynamic-form-options'
												value='option2'>
												تغییر نوع سرویس به صورت دسته ای
											</option>
											<option
												className='dynamic-form-options'
												value='option3'>
												حذف یا تغییر درخواست کد تخفیف فیلیمو
											</option>
											<option
												className='dynamic-form-options'
												value='option4'>
												حذف یا تغییر سند برگشتی
											</option>
											<option
												className='dynamic-form-options'
												value='option5'>
												حذف یا تغییر درخواست تایید شده
											</option>
											<option
												className='dynamic-form-options'
												value='option6'>
												تغییر قیمت بودجه
											</option>
											<option
												className='dynamic-form-options'
												value='option7'>
												ثبت شاخص CRA
											</option>
											<option
												className='dynamic-form-options'
												value='option8'>
												اصلاح اطلاعات فنی فرم
											</option>
											<option
												className='dynamic-form-options'
												value='option9'>
												اصلاح فاکتور اولیه
											</option>
											<option
												className='dynamic-form-options'
												value='option10'>
												اصلاح وضعیت تجهیزات ( مودم & سیم کارت )
											</option>
											<option
												className='dynamic-form-options'
												value='option11'>
												تغییر وضعیت درخواست
											</option>
											<option
												className='dynamic-form-options'
												value='option12'>
												محدودیت در ثبت درخواست حقیقی / حقوقی
											</option>
											<option
												className='dynamic-form-options'
												value='option13'>
												اصلاح درخواست IP
											</option>
											<option
												className='dynamic-form-options'
												value='option14'>
												عدم دریافت کد شاهکار
											</option>
											<option
												className='dynamic-form-options'
												value='option15'>
												تغییر زمان منتظ آپلود
											</option>
										</select>
									</div>

									{selectedOption1 === 'option8' && showDynamic()}
									{selectedOption1 === 'option9' && showDynamic()}
									{selectedOption1 === 'option10' && showDynamic()}
									{selectedOption1 === 'option11' && showDynamic()}
									{selectedOption1 === 'option14' && showDynamic()}
								</div>

								<Editor
									id='text'
									// value={text}
									// onTextChange={(e) => setText(e.textValue)}
								/>
								<div className='ticketing-layout-row '>
									<select
										className='dynamic-form-select w-50'
										id='select-option1'
										value={selectedOption1}
										onChange={handleSelectChange1}>
										<option
											className='dynamic-form-options'
											value=''>
											اولویت
										</option>
										<option
											className='dynamic-form-options'
											value='high'>
											بالا
										</option>
										<option
											className='dynamic-form-options'
											value='medium'>
											متوسط
										</option>
										<option
											className='dynamic-form-options'
											value='low'>
											پایین
										</option>
									</select>
								</div>
								<div className='ticketing-layout-row '>
									<label className='ticketing-btn-styles '>گزارش دهنده</label>
									<input
										dir='rtl'
										name='informer'
										id='strategy'
										type='text'
										className='ticketing-input text-success'
									/>
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
									ارسال
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
