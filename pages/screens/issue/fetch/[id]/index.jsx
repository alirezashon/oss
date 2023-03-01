/** @format */

import moment from 'jalali-moment'
import SR from '../../screen/SR'

export default function Issue({ issue }) {
	return (
		<SR
			props={{
				summary: issue.summary,
				id: issue.id,
				description: issue.description,
				type: issue.type,
				priority: issue.priority,
				priorityIcon: issue.priorityIcon,
				components: issue.components,
				labels: issue.labels,
				monitoring: issue.monitoring,
				resolution: issue.resolution,
				reporter: issue.reporter,
				reporterIcon: issue.reporterIcon,
				assignee: issue.assignee,
				assigneeIcon: issue.assigneeIcon,
				status: issue.status,
				hejriCreatedTime: issue.hejriCreatedTime,
				hejriUpdatedTime: issue.hejriUpdatedTime
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
		labels: data.fields.labels,
		monitoring: data.fields.customfield_18210,
		resolution: data.fields.resolution.name,
		reporter: data.fields.reporter.name,
		reporterIcon: data.fields.reporter.avatarUrls['48x48'],
		assignee: data.fields.assignee.name,
		assigneeIcon: data.fields.assignee.avatarUrls['48x48'],
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

// export async function getStaticPaths() {
// 	const res = await fetch(`https://${process.env.JIRA_URL}/rest/api/2/issue`, {
// 		headers: {
// 			Authorization: `Basic ${Buffer.from(
// 				`${process.env.USER_NAME}:${process.env.API_TOKEN}`
// 			).toString('base64')}`,
// 			Accept: 'application/json',
// 		},
// 	})
// 	const posts = await res.json()
// 	const paths = posts.map((post) => ({
// 		params: { id: post.id.toString() },
// 	}))
// 	return {
// 		paths,
// 		fallback: true,
// 	}
// }

// export async function getStaticProps({ params }) {
// 	const res = await fetch(
// 		`https://${process.env.JIRA_URL}/rest/api/2/issue/${id}`,
// 		{
// 			headers: {
// 				Authorization: `Basic ${Buffer.from(
// 					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
// 				).toString('base64')}`,
// 				Accept: 'application/json',
// 			},
// 		}
// 	)
// 	const post = await res.json()
// 	return {
// 		props: {
// 			post,
// 		},
// 	}
// }

// export default async function handler(req, res) {
//   const response = await fetch(
//     `https://${process.env.JIRA_URL}/rest/api/2/issue/1788047${params.id}`,
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//           `${process.env.USER_NAME}:${process.env.API_TOKEN}`
//         ).toString('base64')}`,
//         Accept: 'application/json',
//       },
//     }
//   );
//   const data = await response.json();
//   res.status(200).json(data)
// }
