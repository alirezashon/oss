/** @format */

export default function index(props) {
	return (
		<>
			<div className='screen-box'>
				<div className='screen-header'>
					<div className='screen-issue-logo-box'>
						<img
							className='issue-screen-logo'
							src='/images/logo.jpg'
						/>
                    </div>
                    <div>
                        {props.children}
                  </div>
				</div>
			</div>
		</>
	)
}
