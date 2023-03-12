/** @format */
import Layout from '../../screen'
import moment from 'jalali-moment'
import Image from 'next/image'

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
									{reporterIcon && (
										<Image
											src={reporterIcon}
											width={48}
											height={48}
											className='approv-img'
										/>
									)}
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
							<label className='details-value'>
								{props.priority}
								<label className='details-value'>
									<img src={props.priorityIcon} />
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
				 
			
			
