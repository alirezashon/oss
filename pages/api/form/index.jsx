
var JiraApi = require('jira-client');
export default function handler(req, res) {
 const body = req.body
		var jira = new JiraApi({
			protocol: 'https',
			host: 'yax.mobinnet.net',
			username: 'al.akbari',
			password: '123qweR@123',
			apiVersion: '2',
			strictSSL: true,
		});

		async function createIssue() {
			try {
				
				const issue = await jira.addNewIssue({
					fields: {
						project: {
							key: 'ALIREZA',
						},
					summary: body.summary,
					developers: body.developer,
					developTeam: body.developTeam,
					payment: body.payment,
					strategy: body.strategy,
					scrummaster: body.developer,
					description: body.peymankar,
						issuetype: {
							name: 'Lead',
						},
					},
				});
			} catch (e) {
				console.error(e);
			}
		}
    void createIssue();
    res.redirect('/')
	} 









