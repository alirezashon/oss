/** @format */

export default async function handler(req, res) {
	
    const jql = 'project = "Service Request" and assignee in membersOf("IT-OSS")';
	const fields =
		'assignee';
	
    const response = await fetch(
			`https://${process.env.JIRA_URL}/rest/api/2/search?jql=${jql}&fields=${fields}&maxResults=1111`,
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
