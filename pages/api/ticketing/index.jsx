/** @format */

var JiraApi = require('jira-client');

export default function handler(req, res) {
	const body = req.body;

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
					summary: 'ایجاد تغییرات نرم افزاری',
					customfield_22606: 'Alireza AKbari , Other',
					customfield_22607: 'Alireza AKbari  , IOT',
					customfield_22608: 'Alireza AKbari ',
					customfield_16881: '6037-6976-0466-5632',
					description: 'ایجاد تحولی جدید در ساختار نرم افزاری سازمان',

					issuetype: {
						name: 'Lead',
					},
				},
			});
	

			// createIssue();
		} catch (e) {
			console.error(e);
		}
	}
	void createIssue();
	res.redirect('/');
}

// summary: body.summary,
// 					developers: body.developer,
// 					developTeam: 'Alireza AKbari , Other OSS Team , IOT',
// 					payment: body.payment,
// 					strategy: body.strategy,
// 					scrummaster: body.developer,
// 					description: body.peymankar,