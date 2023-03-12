/** @format */

import '@/styles/upload.scss'
import '@/styles/globals.css'
import '@/styles/charts.css'
import '@/styles/header.css'
import '@/styles/nav.css'
import '@/styles/componentsStyle.css'
import '@/styles/authPage.css'
import '@/styles/calender.css'
import '@/styles/ticketingTable.css'
import '@/styles/call-list.css'
import '@/styles/personal.css'
import '@/styles/ticketing.css'
import '@/styles/oss.css'
import '@/styles/dynamic-form.css'
import '@/styles/food.css'
import '@/styles/issue.css'
import '@/styles/ossScreens.css'
import '@/styles/searchEngine.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Router from 'next/router';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	// useEffect(() => {
	// 	const checkAuth = async () => {
	// 		let isAuthenticated = false

	// 		if (!isAuthenticated) {
	// 			Router.push('/screens/login');
	// 			isAuthenticated = true
	// 		} 
			
	// 	};
	// 	checkAuth()
	// },[])
	
	
	// import nav
	// const Nav = dynamic(() => import('./components/Nav'), {
	// 	suspense: true,
	// });
	return (
		<div className='root'>
			{/* <Suspense fallback={`Loading...`}>
				<Nav />
			</Suspense> */}
			<Component {...pageProps} />
		</div>
	);
}
