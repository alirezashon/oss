// /** @format */
// // import OSS from './dashboards/oss'
// import CanvasNav from './components/CanvasNav';
// import Notification from './components/NotificationBox';
// import Phone from './components/Drawer/Phone';
// import Table from './components/Table';
// import Radar from './components/charts/Radar'
// export default function index() {
// 	return (
// 		<>
// 			<OSS/>
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

// 			{/* content of page  */}
// 			<div className='dashboard-main-page'>
// 				<div className='board-box'>
// 					<div className='table-board-label'>
// 						Filter Results : IT-OSS-Request-Waiting For Support
// 						<Radar />
// 					</div>
// 				</div>
// 				<div className='table-box'>
// 					<Table />
// 				</div>
// 			</div>{' '} 
			
// 		</>
// 	)
// }

import 'bootstrap/dist/css/bootstrap.css';
import PolarChart from './components/charts/Polar';
import SplitLayout from './components/SplitLayout';
import Header from './components/Header';
import Horizontal from './components/charts/Bar/Horizontal';
import Vertical from './components/charts/Bar/Vertical';
import MultiAxis from './components/charts/Bar/MultiAxis';
import Stacked from './components/charts/Bar/Stacked';
import Combo from './components/charts/Combo';
import Doughnut from './components/charts/Doughnut';
import LineBasic from './components/charts/Line/Basic';
import LineStyle from './components/charts/Line/LineStyle';
import LineMultiAxis from './components/charts/Line/MultiAxis';
import Pie from './components/charts/Pie';
import Radar from './components/charts/Radar';
export default function index() {
	return (
		<>
			<Header />
			<div className='first-row'>
				<div className='chart-box'>
					<Horizontal
						props={{
							labels: [
								'Alireza Akbari',
								'Zahra Haghanian',
								'saeid nasiri',
								'bahare dehghan',
								'behnam nikzad',
								'mohsen mohammad amini',
								'masoud godarzi',
							],
							createNew: {
								firstTip: {
									name: 'alireza hacker',
									bg: '#499b01',
									datas: [77, 88, 80, 81, 16, 55, 44],
								},
								secondTip: {
									name: 'akbariovich',
									bg: '#a5cd39',
									datas: [99, 77, 40, 19, 86, 67, 90],
								},
							},
						}}
					/>
				</div>

				<div className='chart-box'>
					<Radar />
				</div>

				<div className='chart-box'>
					<PolarChart />
				</div>
			</div>
			<SplitLayout />

			<div className='first-row'>
				<div className='chart-box'>
					<Vertical />
				</div>

				<div className='chart-box'>
					<Combo />
				</div>

				<div className='chart-box'>
					<Doughnut />
				</div>
			</div>

			<SplitLayout />

			<div className='first-row'>
				<div className='chart-box'>
					<LineBasic />
				</div>

				<div className='chart-box'>
					<LineMultiAxis />
				</div>

				<div className='chart-box'>
					<Pie />
				</div>
			</div>
			<SplitLayout />

			<div className='first-row'>
				<div className='chart-box'>
					<MultiAxis />
				</div>

				<div className='chart-box'>
					<Stacked />
				</div>

				<div className='chart-box'>
					<LineStyle />
				</div>
			</div>
			<SplitLayout />
		</>
	);
}
