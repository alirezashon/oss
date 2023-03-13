/** @format */

import moment from 'jalali-moment'
import BR from '../../BR'

export default function Issue({ issue }) {
 
 
 
 
  
 

	return (
		<BR
			props={{
				summary: issue.summary,
				id: issue.id,
				serviceType: issue.serviceType,
				subscriberID: issue.subscriberID,
				oldSubscriberID: issue.oldSubscriberID,
				oldBranchCode: issue.oldBranchCode,
				province: issue.province,
				city: issue.city,
				assetCheck: issue.assetCheck,
				customer: issue.customer,
				customerShow: issue.customerShow,
				branchCode: issue.branchCode,
				accountManager: issue.accountManager,
				description: issue.description,
				support: issue.support,
				ECSCategory: issue.ECSCategory,
				type: issue.type,
				priority: issue.priority,
				priorityIcon: issue.priorityIcon,
				components: issue.components,
				reporter: issue.reporter,
				reporterIcon: issue.reporterIcon,
				status: issue.status,
				hejriCreatedTime: issue.hejriCreatedTime,
				hejriUpdatedTime: issue.hejriUpdatedTime,
			}}
		/>
	)
}

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`https://${process.env.JIRA_URL}/rest/api/2/issue/${params.id}`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
				).toString('base64')}`,
				Accept: 'application/json',
			},
		}
	)
	const data = await res.json()
	const issue = {
		id: data.key,
		summary: data.fields.summary,
		description: data.fields.description,
		type: data.fields.issuetype.name,
		priority: data.fields.priority.name,
		priorityIcon: data.fields.priority.iconUrl,
		components: data.fields.components,
		reporter: data.fields.reporter.name,
		reporterIcon: data.fields.reporter.avatarUrls['48x48'],
		serviceType: data.fields.customfield_13115.value,
		subscriberID: data.fields.customfield_12775,
		oldBranchCode: data.fields.customfield_14003,
		branchCode: data.fields.customfield_13211,
		province: data.fields.customfield_12557,
		city: data.fields.customfield_12558,
		customer: data.fields.customfield_14037,
		oldSubscriberID: data.fields.customfield_13906,
		ECSCategory: data.fields.customfield_13805.value,
		accountManager: data.fields.customfield_12901.value,
		customerShow: data.fields.customfield_14300.value,
		support: data.fields.customfield_12734.value,
		assetCheck:data.fields.customfield_22601.value,
		status: data.fields.status.name,

		hejriCreatedTime: moment(data.fields.created)
			.locale('fa')
			.format('YYYY/MM/DD HH:mm:ss'),
		hejriUpdatedTime: moment(data.fields.updated)
			.locale('fa')
			.format('YYYY/MM/DD HH:mm:ss'),
	}
	return { props: { issue } }
}
