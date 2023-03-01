import React, { useState, useEffect } from 'react';

const Jira = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://yax.mobinnet.net/rest/api/2/search?jql=project=ALIREZA and status = DONE',
        {
          headers: {
            'Authorization': 'Basic ' + btoa('al.akbari : 1234#D%@li'),
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();
      setData(result.issues);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((issue) => (
        <div key={issue.id}>
          <h3>{issue.fields.summary}</h3>
          <p>{issue.fields.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Jira;










// import axios from 'axios';

// export default function index() {
//   const baseUrl = 'https://yax.mobinnet.net/rest/api/2';
//   async function fetchJiraData(jql) {
//     const auth = {
//       username: 'al.akbari',
//       password: '1234#D%@li'
//     };
//     const response = await axios.get(`${baseUrl}/search`, {
//       params: { jql },
//       auth
//     });
//     return response.data;
//   }
  
//   function JiraResults({ jql }) {
//     const jql = 'project = ALIREZA and status = DONE'
//     const [jiraData, setJiraData] = useState(null);
//     useEffect(() => {
//       fetchJiraData(jql).then(data => setJiraData(data));
//     }, [jql]);

// JiraResults()
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Key</th>
//             <th>Summary</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jiraData.issues.map(issue => (
//             <tr key={issue.key}>
//               <td>{issue.key}aa</td>
//               <td>{issue.fields.summary}</td>
//               <td>{issue.fields.status.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

// }





// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import querystring from 'querystring';
// // import https from 'https';

// // const instance = axios.create({
// //   httpsAgent: new https.Agent({
// //     rejectUnauthorized: false
// //   }),
// //   baseURL: 'https://yax.mobinnet.net/rest/api/2/search' + querystring.stringify({ jql }),
// //   auth: {
// //     username: 'al.akbari',
// //     password: '1234#D%@li'
// //   }
// // });

// // const JiraIssues = () => {
// //   const [issues, setIssues] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await instance.get(`/search?jql=project = ALIREZA  AND  status = DONE `);

// //         setIssues(response.data.issues.map(issue => ({
// //           key: issue.key,
// //           summary: issue.fields.summary,
// //           status: issue.fields.status.name,
// //           assignee: issue.fields.assignee?.name
// //         })));
// //       } catch (error) {
// //         setError(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (error) {
// //     return <p>Failed to fetch Jira issues: {error.message}</p>;
// //   }

// //   return (
// //     <ul>
// //       {issues.map(issue => (
// //         <li key={issue.key}>
// //           <p>Key: {issue.key}</p>
// //           <p>Summary: {issue.summary}</p>
// //           <p>Status: {issue.status}</p>
// //           <p>Assignee: {issue.assignee}</p>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default JiraIssues;









// // import React, { useState, useEffect } from 'react';
// // import Search from './Search';

// // const JiraData = () => {
// //   const [data, setData] = useState([]);
// //   useEffect(() => {
// //     const getData = async () => {
// //       const jql = 'project =ALIREZA AND STATUS = DONE';
// //       const results = await Search(jql);
// //       setData(results);
// //     };
// //     getData();
// //   }, []);

// //   return (
// //     <div>
// //       {data.map((issue) => (
// //         <div key={issue.key}>
// //           <p>{issue.fields.summary}</p>
// //           <p>{issue.fields.status.name}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default JiraData;



