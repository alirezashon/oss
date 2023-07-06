/** @format */

var JiraApi = require('jira-client');
var jira = new JiraApi({
	protocol: 'https',
	host: 'yax.mobinnet.net',
	username: 'al.akbari',
	password: ' ',
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
				summary: `تست `,
				description: 'علیرضا',
				issuetype: {
					name: 'Lead',
				},
			},
		});
	} catch (e) {
		console.error(e);
	}
}

// void createIssue();
