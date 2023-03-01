/** @format */
import Router from 'next/router'
export default function Login() {
	const logo = '/images/logo.jpg';
	return (
		<div className='auth-box'>
			<div className='auth-inner-box'>
				<img
					className='auth-logo'
					src={logo}
				/>
				<form
					action='/api/login'
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
					
							<a className='auth-form-submit' href="/screens/register"> ثبت نام </a>
					
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}














Login.getInitialProps = async (ctx) => {
	// perform authentication check here
	// for example, check if the user has a valid token

	const isAuthenticated = false;

	if (isAuthenticated) {
		if (ctx.res) {
			ctx.res.writeHead(302, { Location: '/' });
			ctx.res.end();
		} else {
			Router.push('/');
		}
	}

	return {};
};