

export default async function handler(req, res) {
	
    const jql = 'assignee = currentUser()  ';
    // const fields = 'key,resolution,summary,reporter,assignee,labels,components,priority,assignee,reporter,issuetype,customfield_18210,customfield_17501,customfield_10325,created,updated';

	
    const response = await fetch(
		`https://${process.env.JIRA_URL}/rest/api/2/search?jql=${jql}`,
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
      const projectNames = Array.from(new Set(data.issues.map(issue => issue.fields.project.name)));

	
	// let ali = []
	// for (let i = 0; i < data.total ; i++) {
	// 	// console.log(data.issues[i].fields.assignee.avatarUrls['48x48'])
	// 	// ali.push(data.issues[i].fields.assignee.avatarUrls['48x48'])
	// 	ali.push(data.issues[i].fields.project.key)
		
        
	// }
	// let uniqueArr = [...new Set(ali)];
	res.status(200).json(projectNames);
	// console.log(uniqueArr)
} 




// export default async function handler(req, res) {
//     const jql =
//     'project = "Service Request" AND "Customer Request Type" in ("Modem (SR)", "Ticketing (SR)", "Device Monitoring (SR)", "Dashboard (SR)", "AAA (SR)", "Add New Account (SR)", "Modify Account /Profile (SR)", "Delete Account/Profile (SR)") AND (SR-Category-Modem = ACS OR SR-Category-Ticketing in (Kiosk, SDM, Yax) OR "SR-Category-Device Monitoring" in ("Auto Ticket", "B2B Nagios", Cacti, Cacti-Nagios, "Nagios VPN", Zabbix) OR SR-Category-Dashboard in (Kiosk, SDM, YAX) OR SR-Category-AAA = "VPN AAA" OR "SR-Category-Add New Account" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Ticketing, Kiosk, Zabbix, "SolarWinds ") OR "SR-Category-Modify Account /Profile" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Kiosk, Ticketing, Zabbix, SolarWinds) OR "SR-Category-Delete Account/Profile" in (ACS, CACTI, CACTI-Nagios, Kiosk, SolarWinds, Ticketing, Kiosk, Ticketing, Zabbix)) AND status = "Waiting for support"'
//     const fields = 'key,summary,priority,assignee,reporter,issuetype,customfield_17501,customfield_10325,created,updated';
//   const response = await fetch(
//     `https://${process.env.JIRA_URL}/rest/api/2/search?jql=${jql}&fields=${fields}`,
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//         `${process.env.USER_NAME}:${process.env.API_TOKEN}`
//         ).toString('base64')}`,
//         Accept: 'application/json',
//       },
//     }
//   );
//     const data = await response.json();
//     res.status(200).json(data)
// let ali = []
//    for (let i = 0; i < data.total ; i++) {
//         // console.log(data.issues[i].fields.assignee.avatarUrls['48x48'])
//         ali.push(data.issues[i].fields.assignee.avatarUrls['48x48'])
//     }
//     let uniqueArr = [...new Set(ali)];
//     console.log(uniqueArr)
// }
