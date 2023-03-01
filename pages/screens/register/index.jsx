/** @format */

export default function register() {
		const logo = '/images/logo.jpg';
	return (
		<div className='auth-box'>
			<div className='auth-inner-box'>
				<img
					className='auth-logo'
					src={logo}
				/>
				<form
					action='/api/register'
					method='post'
					className='auth-form'>
					<div className='auth-form-row'>
						<input
							className='auth-input'
							dir='rtl'
							placeholder='ایمیل'
							type='email'
							name='email'
						/>
						<input
							dir='rtl'
							className='auth-input'
							type='password'
							name='password'
							placeholder='رمز عبور'
						/>
						<div className='auth-btns-box'>
							<input
								type='submit'
								value='ورود'
								className='auth-form-submit'
							/>

							<a className='auth-form-submit' href="/screens/login"> ورود </a>
							
						</div>
					</div>
				</form>
			</div>
		</div>
	);

}
