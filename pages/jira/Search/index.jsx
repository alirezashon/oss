/** @format */

const https = require('https');
const querystring = require('querystring');


  const jiraHost = 'yax.mobinnet.net';
  const jiraUsername = 'al.akbari';
  const jiraPassword = '1234#D%@li';

  const jql =
    'project = "Service Request" AND "Customer Request Type" in ("Modem (SR)", "Ticketing (SR)", "Device Monitoring (SR)", "Dashboard (SR)", "AAA (SR)", "Add New Account (SR)", "Modify Account /Profile (SR)", "Delete Account/Profile (SR)") AND (SR-Category-Modem = ACS OR SR-Category-Ticketing in (Kiosk, SDM, Yax) OR "SR-Category-Device Monitoring" in ("Auto Ticket", "B2B Nagios", Cacti, Cacti-Nagios, "Nagios VPN", Zabbix) OR SR-Category-Dashboard in (Kiosk, SDM, YAX) OR SR-Category-AAA = "VPN AAA" OR "SR-Category-Add New Account" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Ticketing, Kiosk, Zabbix, "SolarWinds ") OR "SR-Category-Modify Account /Profile" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Kiosk, Ticketing, Zabbix, SolarWinds) OR "SR-Category-Delete Account/Profile" in (ACS, CACTI, CACTI-Nagios, Kiosk, SolarWinds, Ticketing, Kiosk, Ticketing, Zabbix)) AND status = "Waiting for support"';

  const fields = 'summary,status,assignee';

  const options = {
    host: jiraHost,
    path: '/rest/api/2/search?' + querystring.stringify({ jql, fields }),
    auth: `${jiraUsername}:${jiraPassword}`,
    rejectUnauthorized: false, // This line is important if you want to accept a self-signed SSL certificate
  };

  https.get(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      var issues = JSON.parse(data).issues;
      console.log('Issues:');
      issues.forEach((issue) => {
        console.log(' - ' + issue.key + ': ' + issue.fields.summary);
        console.log('   Fields: ');
        console.log('    - Summary: ' + issue.fields.summary);
        //   console.log("    - Description: " + issue.fields.description);
        console.log('    - Status: ' + issue.fields.status.name);
        console.log(
          '    - Assignee: ' +
          (issue.fields.assignee
            ? issue.fields.assignee.displayName
            : 'Unassigned')
        );
      });

    });
  });

export default function index({issues}) {
  
  let tableHead = [
    'created',
    'key',
    'customerRequestType',
    'summary',
    'P',
    'Assignee',
    'timeTofirstResponse',
    'timeToResolution',
    'reporter',
    'lastComment',
    'update',
  ];

	let data = [
		{
			id: 1,
			created: 'alireza',
			T: 'force',
			key: 'ALI',
			customerRequestType: 'ALIREZA',
			summary: 'GOD IS GREATE',
			P: 'Low Heigh',
			Assignee: 'SOG',
			timeTofirstResponse: '22Years',
			timeToResolution: '2023',
			reporter: 'GOD',
			lastComment: 'You Can Do It',
			update: '2022',
		},
	];

  return (
    <div className='bg'>
      {issues.map((issu) => (
        <p>{issu}</p>
      ))}

			<div className='board-box'>
				<div className='table-board-label'>
					Filter Results : IT-OSS-Request-Waiting For Support &nbsp;
				</div>
				<div className='table-box'>
					<table className='table'>
						<thead>
							<tr>
								{tableHead.map((title) => (
									<th
										className='td'
										scope='col'>
										{title}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((row) => (
								<tr key={row.id}>
									<td className='td'>{row.created}</td>
									<td className='td'>{row.T}</td>
									<td className='td'>{row.key}</td>
									<td className='td'>{row.customerRequestType}</td>
									<td className='td'>{row.summary}</td>
									<td className='td'>{row.P}</td>
									<td className='td'>{row.timeTofirstResponse}</td>
									<td className='td'>{row.timeToResolution}</td>
									<td className='td'>{row.reporter}</td>
									<td className='td'>{row.lastComment}</td>
									<td className='td'>{row.update}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

// var JiraApi = require('jira-client');

// export default function index () {
// 	var jira = new JiraApi({
// 		protocol: 'https',
// 		host: 'yax.mobinnet.net',
// 		username: 'al.akbari',
// 		password: '123qweR@123',
// 		apiVersion: '2',
// 		strictSSL: true,
// 	});

// 	async function createIssue() {
// 		try {
// 			const issue = await jira.searchJQL('project = ALIREZA and status = DONE', { fields: ['summary', 'status', 'assignee'] }).then(issues => {
//   console.log(issue);
// });

// 			// createIssue();
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	}
// createIssue();
// }

// import axios from 'axios';

// const fetchJiraData = async (jql) => {
//   try {
//     const response = await axios.get(
//       `https://yax.mobinnet.net/rest/api/3/search?jql=${jql}`,
//       {
//         auth: {
//           username: 'al.akbari',
//           password: '1234#D%@li',
//         },
//         httpsAgent: new https.Agent({
//           rejectUnauthorized: false,
//         }),
//       }
//     );

//     const data = response.data;

//     console.log('JQL searched: ', jql);
//     console.log('Fields: ', data.fields);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const jql = 'project = ALIREZA and status = DONE'
// fetchJiraData(jql)

// import React, { useState, useEffect } from 'react';

// const JiraIssue = () => {
//   const [issue, setIssue] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {

//       const response =  fetch(
//         `https://yax.mobinnet.net/rest/api/2/search?jql=project = ALIREZA  AND  status = DONE `,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization':  "Basic " + ("al.akbari:1234#D%@li"),
//             'Accept': 'application/json'
//           },
//           mode: 'cors',
//           cache: 'no-cache',
//           credentials: 'include',
//         }
//       );

//       const data = response.json();
//       console.log(data)
//       setIssue(data.issues[0]);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* <p>Key: {issue.key}</p>
//       <p>Summary: {issue.fields.summary}</p>
//       <p>Description: {issue.fields.description}</p> */}
//     </div>
//   );
// };

// export default JiraIssue;

// import axios from 'axios';
// import https from 'https';
// import querystring from 'querystring';

// const instance = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   }),
//   baseURL: 'https://yax.mobinnet.net/rest/api/3',
//   auth: {
//     username: 'al.akbari',
//     password: '1234#D%@li'
//   }
// });

// export default async (req, res) => {
//   // const jql = req.query.jql;

//   try {
//     const jql ='project = "Service Request" AND "Customer Request Type" in ("Modem (SR)", "Ticketing (SR)", "Device Monitoring (SR)", "Dashboard (SR)", "AAA (SR)", "Add New Account (SR)", "Modify Account /Profile (SR)", "Delete Account/Profile (SR)") AND (SR-Category-Modem = ACS OR SR-Category-Ticketing in (Kiosk, SDM, Yax) OR "SR-Category-Device Monitoring" in ("Auto Ticket", "B2B Nagios", Cacti, Cacti-Nagios, "Nagios VPN", Zabbix) OR SR-Category-Dashboard in (Kiosk, SDM, YAX) OR SR-Category-AAA = "VPN AAA" OR "SR-Category-Add New Account" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Ticketing, Kiosk, Zabbix, "SolarWinds ") OR "SR-Category-Modify Account /Profile" in (ACS, "B2B Nagios", CACTI, CACTI-Nagios, Kiosk, Ticketing, Zabbix, SolarWinds) OR "SR-Category-Delete Account/Profile" in (ACS, CACTI, CACTI-Nagios, Kiosk, SolarWinds, Ticketing, Kiosk, Ticketing, Zabbix)) AND status = "Waiting for support"'

//     const response = await instance.get(`/search?jql=${querystring.escape(jql)}`);

//     // Extract the desired fields from each issue
//     const issues = response.data.issues.map(issue => ({
//       key: issue.key,
//       summary: issue.fields.summary,
//       status: issue.fields.status.name,
//       assignee: issue.fields.assignee?.name
//     }));

//     res.status(200).json({ issues });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch Jira issues' });
//   }
// };
