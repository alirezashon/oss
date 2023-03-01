

export default async function handler(req, res) {
	
    const jql = 'project = "Service Request" AND assignee in membersOf(IT-OSS) AND status = Pending';
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






