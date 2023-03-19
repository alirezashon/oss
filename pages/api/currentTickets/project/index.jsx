

export default async function handler(req, res) {
	const jql = 'assignee = currentUser() '
	const fields =
		'project'

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
	)
	const data = await response.json()
	let projects = []
	for (let i = 0; i < data.total; i++) {
		// console.log(data.issues[i].fields.assignee.avatarUrls['48x48'])
		projects.push(data.issues[i].fields.project.key)
	}
    let uniqueArr = [...new Set(projects)]
	res.status(200).json(uniqueArr)
    }
