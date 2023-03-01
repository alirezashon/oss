/** @format */

import AllIncidentAssignee from './components/all-incident-assignee'
import SelectStar from '../../components/D3'
export default function index() {
	return (
		<>
			<div className='oss-dashboard-box'>
				<div className='oss-dashboard-header'>
					<h1 className='oss-dashboard-header-label'>INCIDENT MANAGEMENT</h1>
				</div>
			<div className='oss-dashboard-content'>
				<div className='oss-dashboard-star-box'>
					<SelectStar props={{text:'open incident'}} />
					<SelectStar props={{text:'zabbix'}} />
				</div>
				<div className='oss-dashboard-center-chart-box'>
					<AllIncidentAssignee />
				</div>
				<div className='oss-dashboard-star-box'>
					<SelectStar props={{text:'waiting'}} />
					<SelectStar props={{text:'in progress'}} />
				</div>
			</div>
			</div>
		</>
	)
}

// /** @format */
// import CanvasNav from "../../components/CanvasNav"
// import Notification from "../../components/NotificationBox"
// import Phone from "../../components/Drawer/Phone"
// import AllIncidentAssignee from "./components/all-incident-assignee"
// import AllRequests from "./components/all-requests"
// import AssignedToMe from "./components/assigned-to-me"
// import IncidentOpenZabbix from "./components/incident-open-zabbix"
// import IncidentPending from "./components/incident-pending"
// import RequestsPending from "./components/requests-pending"
// import RequestWaitingSupport from "./components/requests-waiting-support"
// import RFC from "./components/rfc-oss"
// import WaitingApproval from "./components/waiting-approval"
// import Ticketing from '../../components/Drawer/Ticketing'

// export default function index() {
//   return (
// 		<>
// 			<img
// 				className='header-logo'
// 				src={'/images/logo.jpg'}
// 			/>
// 			<div className='header-box-test'>
// 				<div className='header-details-box'>
// 					<div className='head-profile-box-inner'></div>
// 					<a className='header-details-btns'> جوجه کباب فسنجانی</a>
// 					<a className='header-details-btns'> ساعت ورود </a>
// 					<a className='header-details-btns'> اضافه کار :۱۱ ساعت</a>

// 				</div>
// 				<CanvasNav />
// 				<div className='head-profile-box'>
// 					<div className='head-profile-box-inner'></div>
// 					<img
// 						className='profile-image'
// 						src={'/images/me.jpg'}
// 					/>
// 					<div className='header-profile-box-first-row-btns'>
// 						<Notification />
// 						<Phone />
// 					</div>
// 				</div>
// 			</div>

// 			{/* content of page */}

// 			<div className='oss-dashboard-content'>
// 				<div className='oss-dashbnoard-right-coloumn'>
// 					<AssignedToMe />
// 					<AllRequests />
// 					<RequestsPending />
// 					<IncidentOpenZabbix />
// 					<AllIncidentAssignee />
// 					<WaitingApproval />
// 					<RFC />
// 				</div>
// 				<div className='oss-dashboard-left-coloumn'>
// 					<RequestWaitingSupport />
// 					<IncidentPending />
// 				</div>
// 			</div>
// 		</>
// 	)
// }
