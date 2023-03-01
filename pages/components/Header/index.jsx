/** @format */
import CustomCalender from '../CustomCalender'
import Drawer from '../Drawer'
import Phone from '../Drawer/Phone';
import Personal from '../Drawer/Personal';
import Notification from '../NotificationBox'
import TicketingTable from '../TicketingTable'
export default function index() {
	return (
		<>
			<div className='header-box'>
				<div className='profile-box'>
					<div className='profile-box-header'></div>
					<img
						className='profile-image'
						src={'/images/me.jpg'}
					/>
					<div className='profile-btns-box'>
						<div className='profile-btns-rows'>
							<Drawer />
							<Notification />
						</div>
						<div className='profile-btns-rows'>
							<Phone />
							<Personal />
						</div>
					</div>
				</div>
					<div className='header-ticketing-box'>
						<TicketingTable />
					</div>
				<CustomCalender />
			</div>
		</>
	);
}
