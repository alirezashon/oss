/** @format */
import { MdEdit } from 'react-icons/md';

import { BsPersonCircle } from 'react-icons/bs';

export default function index() {
	//sende accordion content dynamiclly
	const content = () => {
		return (
			<>
				<div>test</div>
			</>
		);
	};
	//make accordion dynamiclly
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
							style={{ backgroundColor: '#a5cd39', direction: 'rtl' }}
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

	const personalData = () => {
		return (
			<>
				<div className='personal-data-box'>
					<div className='personal-data-profile-box'>
						<div className='personal-data-profile-top-banner'>
							<p></p>
							<p> علیرضا اکبری</p>
							<MdEdit
								style={{ marginLeft: '11px' }}
								size={27}
								color={'white'}
							/>
						</div>
						<img
							className='personal-data-profile-img'
							src='/images/me.jpg'
						/>
						<div className='personal-data-tips-box'>
							<p
								className='personal-data-tips'
								style={{ direction: 'rtl' }}>
								کارشناس طرح و توسعه سامانه های نرم افزاری
							</p>
							<p className='personal-data-tips'>۰۹۹۴۱۴۱۹۶۵۶</p>
							<p className='personal-data-tips'>al.akbari@mobinnet.ir</p>
						</div>
					</div>

					<div className='personal-data-requests-box'>
						<div className='call-list-page'>
							{accordion(
								'درخواست مساعده',
								'headingOne',
								'collapseOne',
								'#collapseOne'
							)}
							{accordion(
								'درخواست پاداش',
								'headingTwo',
								'collapseTwo',
								'#collapseTwo'
							)}
							{accordion(
								'درخواست خدمات رفاهی',
								'headingThree',
								'collapseThree',
								'#collapseThree'
							)}
							{accordion(
								'درخواست وام',
								'headingFour',
								'collapseFour',
								'#collapseFour'
							)}
						</div>
					</div>

					<div className='personal-data-financial-box'>
						<div
							className='personal-data-profile-top-banner text-white'
							style={{ display: 'block' }}>
							حسابداری مالی
						</div>
						<div className='personal-data-profile-financial-first-row-btns'>
							<p className='personal-data-financial-btns'>۱۴۰۱/۱۱/۱۲</p>
							<p className='personal-data-financial-btns'>هشتمین ماه همکاری</p>
						</div>
						<div className='personal-data-financial-payments-box'>
							<p className='personal-data-financial-payment'>
								مبلغ دریافتی کل به ریال : هفتصد و هفتاد و هفت میلیون و هفت صد و
								هفتاد و هفت هزار و هفتصد و هفتاد و هفت
							</p>
						</div>
						<img
							className='personal-data-logo'
							src='/images/logo.jpg'
						/>
					</div>
				</div>
			</>
		);
	};
	const leaveData = () => {
        return (
            <>
                <div className='personal-data-leave-box'>
                    <div className='personal-data-leave-history-box'>
                    
                    </div>
                </div>
            </>
        )
            
	}
	return (
		<>
			<div className='personal-page-nav'>
				<BsPersonCircle
					color='#ffffff'
					size={44}
				/>
				<a className='personal-page-btns first-personal-page-btns'> مرخصی </a>
				<a className='personal-page-btns'> ماموریت </a>
				<a className='personal-page-btns'> اضافه کاری </a>
				<a className='personal-page-btns'> ورود و خروج </a>
			</div>
			{personalData()}
            <div className='split-border'></div>
            {leaveData()}
		</>
	);
}
