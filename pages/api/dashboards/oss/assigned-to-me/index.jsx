export default async function handler(req, res) {
	
    const jql = 'assignee =currentUser()  AND  status =  "Waiting for support" ';
    const fields = 'key,summary,priority,assignee,reporter,issuetype,customfield_17501,customfield_10325,created,updated';

	
    const response = await fetch(
		`https://${process.env.JIRA_URL}/rest/api/2/search?jql=${jql}&fields=${fields}`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
				).toString('base64')}`,
				Accept: 'application/json',
			},
		}
	);
	const data = await response.json();
	res.status(200).json(data.issues);

} 




// GET BR PROJECT ASC CREATED WITH SUCCESSFULL STATUS

// export default async function handler(req, res) {
// 	const jql = 'project = B2B-Request  AND  status =  Successfull ORDER BY created ASC'
//     // const jql = 'assignee =currentUser()  AND  status =  "Waiting for support" ';
//     // const fields = 'key,summary,priority,assignee,reporter,issuetype,customfield_17501,customfield_10325,created,updated';

	
//     const response = await fetch(
// 		`https://${process.env.JIRA_URL}/rest/api/2/search?jql=${jql}`,
// 		{
// 			headers: {
// 				Authorization: `Basic ${Buffer.from(
// 					`${process.env.USER_NAME}:${process.env.API_TOKEN}`
// 				).toString('base64')}`,
// 				Accept: 'application/json',
// 			},
// 		}
// 	);
// 	const data = await response.json();
// 	res.status(200).json(data);

// } 
