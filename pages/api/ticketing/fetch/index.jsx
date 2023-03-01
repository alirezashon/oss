/** @format */

import fetch from 'node-fetch'

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

export default async function handler(req, res) {
	const response = await fetch(
		`https://${process.env.JIRA_URL}/rest/api/3/issue`,
		{
			method: 'POST',
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
				).toString('base64')}`,
				Accept: 'application/json',
			},
			body: JSON.stringify({
				fields: {
					project: {
						key: 'ALIREZA',
					},
					summary: 'السلام و علیکم یا ابن الله',
					description: 'هل تعلم العربی',
					issuetype: {
						name: 'Lead',
					},
				},
			}),
		}
	)
	response.json()
    res.status(200)
    res.send('alireza')
}
