/** @format */

// export default async function addIssue(req, res) {

//    const { summary, informer } = req.body

//   const options = {
//     method: 'POST',
//     headers: {
//       'Authorization': `Basic ${Buffer.from(`${process.env.USER_NAME}:${process.env.API_TOKEN}`).toString('base64')}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       fields: {
//         project: {
//           key: 'ALIREZA'
//         },
//         summary:'السلام و علیکم یا ابن الله',
//         description : 'هل تعلم العربی',
//         issuetype: {
//           name: 'Lead'
//         }
//       }
//     })
//   };

//   const response = await fetch(`https://${process.env.JIRA_URL}/rest/api/3/issue`, options);
//   const data = await response.json();

//   console.log(data);
// }

// export default async function handler(req, res) {
// 	const response = await fetch(
// 		`https://${process.env.JIRA_URL}/rest/api/2/issue`,
// 		{
// 			method: 'POST',
// 			headers: {
// 				Authorization: `Basic ${Buffer.from(
// 					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
// 				).toString('base64')}`,
// 				Accept: 'application/json',
// 			},
// 			body: JSON.stringify({
// 				fields: {
// 					project: {
// 						key: 'BR',
// 					},
// 					summary: 'test',
// 					description: 'hi',
// 					summary: 'Test',
// 					issuetype: { name: 'Digital Signage-MCI' },
// 					description: 'some description',
// 					customfield_13211: 'branch code 7',
// 					customfield_14037: 'customer 7',
// 					customfield_12526: 'branch name 7',
// 					customfield_12565: 'agent name 7',
// 					customfield_12557: 'province 7',
// 					customfield_12558: 'city 7',
// 					customfield_11717: 'address',
// 					customfield_12752: 'IN Cordinate NAme 7',
// 					customfield_12753: 'IN Cordinate Phone 7777',
// 					issuetype: {
// 						name: 'Digital Signage-MCI',
// 					},
// 				},
// 			}),
// 		}
// 	)

// 	res.status(200)
// }

// var JiraApi = require('jira-client')

// export default function handler(req, res) {
// 	const body = req.body

// 	var jira = new JiraApi({
// 		protocol: 'https',
// 		host: 'yax.mobinnet.net',
// 		username: 'al.akbari',
// 		password: '1234#D%@li',
// 		apiVersion: '2',
// 		strictSSL: true,
// 	})

// 	async function createIssue({ data }) {
// 		try {
// 			const issue = await jira.addNewIssue({
// 				fields: {
// 					project: {
// 						key: 'BR',
// 					},
// 					summary: data.summary,
// 					description: data.description,
// 					customfield_13211: data.branchCode,
// 					customfield_14037: data.customer,
// 					customfield_12526: data.branchName,
// 					customfield_12565: data.agentName,
// 					customfield_12557: data.province,
// 					customfield_12558: data.city,
// 					customfield_11717: data.address,
// 					customfield_12752: data.INCordinateName,
// 					customfield_12753: data.INCordinatePhone,
// 					issuetype: {
// 						name: 'Digital Signage-MCI',
// 					},
// 				},
// 			})

// 			// createIssue();
// 		} catch (e) {
// 			console.error(e)
// 		}
// 	}
// 	const issues = [
// 		{
// 			summary: 'ali',
// 			description: 'ali',
// 			branchCode: 'ali',
// 			customer: 'ali',
// 			branchName: 'ali',
// 			agentName: 'ali',
// 			province: 'ali',
// 			city: 'ali',
// 			address: 'ali',
// 			INCordinateName: 'ali',
// 			INCordinatePhone: 'ali',
// 		},
// 		{
// 			summary: 'ALIREZA AKBARI',
// 			description: 'ALIREZA AKBARI',
// 			branchCode: 'ALIREZA AKBARI',
// 			customer: 'ALIREZA AKBARI',
// 			branchName: 'ALIREZA AKBARI',
// 			agentName: 'ALIREZA AKBARI',
// 			province: 'ALIREZA AKBARI',
// 			city: 'ALIREZA AKBARI',
// 			address: 'ALIREZA AKBARI',
// 			INCordinateName: 'ALIREZA AKBARI',
// 			INCordinatePhone: 'ALIREZA AKBARI',
// 		},
// 	]
// 	createIssue(issues)

// 	res.send('ali')
// }




const handler = async (req, res) => {
	const summary = req.body.summary
	const description = req.body.description

	const auth =
		'Basic ' +
		Buffer.from(`${process.env.USER_NAME}:${process.env.API_TOKEN}`).toString(
			'base64'
		)
			
	const data = JSON.stringify({
			fields: {
				project: {
					key: 'ALIREZA',
				},
				summary: summary,
				description: description,
				issuetype: {
					name: 'Lead',
				},
			},
	})

	const options = {
		method: 'POST',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json',
		},
		body: data,
	}

	const url = `https://${process.env.JIRA_URL}/rest/api/2/issue/`
	const response = await fetch(url, options)

	res.status(response)
}

export default handler 
