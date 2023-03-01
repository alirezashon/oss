/** @format */
import Layout from '../../screen'
import moment from 'jalali-moment'

export default function index({ props }) {
	const hejriCreatedTime = moment().locale('fa').format('YYYY/MM/DD')

	return (
		<>
			<Layout>
				<div className='screen-header-box w-100'>
					<div className='screen-header-right-side w-50'>
						<div className='screen-header-id-box'>
							<a className='screen-header-issue-id '>{props.id}</a>
						</div>
						<div className='screen-header-transitions-box'>
							<button className='screen-header-transition'>Cancel</button>
							<button className='screen-header-transition'>Assignee</button>
							<div className='transitions-second-row'>
								<button className='screen-header-transition'>Pending</button>
								<button className='screen-header-transition'>
									Add comment
								</button>
							</div>
						</div>
					</div>
					<div className='screen-header-status-box'>
						<p className='screen-header-status'>{props.status}</p>
					</div>
					<div className='screen-header-left-side'>
						<div className='screen-header-details'>
							<a className='screen-header-summary'>{props.summary}</a>
							<div className='screen-description-box'>
								<p className='screen-description'>{props.description}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='screen-approv-people-box'>
					<div className='screen-approv-box'>
						<div className='screen-approv-first-row'>
							<label className='approv-name-label'>approval 1</label>
							<div className='approv-img-name-box'>
								<img
									src='/images/me.jpg'
									className='approv-img'
								/>
								<p className='approve-name'>al.akbari</p>
							</div>
						</div>
						<div className=''>
							<div className='screen-approv-first-row'>
								<label className='approv-name-label'>approval 2</label>
								<div className='approv-img-name-box'>
									<img
										src='/images/me.jpg'
										className='approv-img'
									/>
									<p className='approve-name'>al.akbari</p>
								</div>
							</div>
						</div>
					</div>
					<div className='screen-people-box'>
						<div className='screen-approv-first-row'>
							<label className='approv-name-label'>assignee</label>
							<div className='approv-img-name-box'>
								<img
									src={props.assigneeIcon}
									className='approv-img'
								/>
								<p className='approve-name'>{props.assignee}</p>
							</div>
						</div>
						<div className=''>
							<div className='screen-approv-first-row'>
								<label className='approv-name-label'>reporter</label>
								<div className='approv-img-name-box'>
									<img
										src={props.reporterIcon}
										className='approv-img'
									/>
									<p className='approve-name'>{props.reporter}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* details */}

				<div className='screen-details-box'>
					<div className='screen-details-row'>
						<div className='screen-detail-field-show'>
							<label className='details-key'>Type:</label>
              <label className='details-value'>{props.type}</label>
						</div>

						<div className='screen-detail-field-show'>
							<label className='details-key'>Priority:</label>
              <label className='details-value'>{props.priority}
                <label className='details-value'>
                <img src={props.priorityIcon}/>
                </label>
              </label>
						</div>

						<div className='screen-detail-field-show'>
							<label className='details-key'>Component/s:</label>
							<label className='details-value'>{props.components}</label>
						</div>
					</div>

					<div className='screen-details-row'>
						<div className='screen-detail-field-show'>
							<label className='details-key'>Labels:</label>
              <label className='details-value'>{props.labels}</label>
						</div>

						<div className='screen-detail-field-show'>
							<label className='details-key'>
								SR-Category-Device Monitoring:
							</label>
							<label className='details-value'>{props.monitoring}</label>
						</div>

						<div className='screen-detail-field-show'>
							<label className='details-key'>Resolution:</label>
							<label className='details-value'>{props.resolution}</label>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
				 
			
			
	
			
// ;<div className='screen-time-box'>
// 	<div className='screen-time-box-row'>
// 		<label className='screen-time-label'>created</label>
// 		<label className='screen-time'>a</label>
// 	</div>
// 	<div className='screen-time-box-row'>
// 		<label className='screen-time-label'>created</label>
// 		<label className='screen-time'>a</label>
// 	</div>
// </div>

// <div className='screen-people'>
// <img
// 	src='/images/me.jpg'
// 	className='screen-header-assignee-img'
// />
// <p className='screen-header-assignee-name'>reporter : al.akbari</p>
// </div>
// </div>

// import Link from "next/link"

// export default function index(){

//     return(
//         <>
//         <Link href='/[id]' as ={`/article/${article.id}`}>

//             </Link>
//         </>
//     )
// }

// CURVOUSE SVG

// ;<svg
// 	width='54'
// 	height='72'
// 	viewBox='0 0 54 72'
// 	fill='none'
// 	xmlns='http://www.w3.org/2000/svg'>
// 	<path
// 		d='M41.0717 70.5127C44.4471 69.3914 48.9588 67.7831 52.0578 66.1232M52.0578 66.1232C52.4149 65.9321 50.2522 63.7955 50.1442 63.7054C47.7766 61.7273 45.2228 60.1197 42.5849 58.5372M52.0578 66.1232C32.8255 68.0421 16.353 57.5291 13.1128 44.1361C12.7917 42.8087 12.4435 41.3636 12.2255 39.8938M12.2255 39.8938C11.8783 37.553 11.861 35.1495 12.8084 33.0587C13.6827 31.1292 15.6346 28.9839 17.8423 28.7881C21.9665 28.4226 24.2648 33.4098 22.147 36.7919C20.286 39.764 15.3678 41.3639 12.2255 39.8938ZM12.2255 39.8938C12.1592 39.8628 12.0937 39.8304 12.0291 39.7966C-3.57665 31.6486 -0.0727462 11.2484 10.8597 1.86663'
// 		stroke='#8F8F8F'
// 		stroke-width='2.45172'
// 		stroke-miterlimit='1.5'
// 		stroke-linecap='round'
// 		stroke-linejoin='round'></path>
// </svg>
