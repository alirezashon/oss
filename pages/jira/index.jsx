import request from 'request';

export default async function createIssues(req, res) {
  // Jira authentication details
  const JIRA_SERVER = `https://${process.env.JIRA_URL}`;
  const JIRA_USER = process.env.USER_NAME
  const JIRA_API_TOKEN = process.env.API_TOKEN

  // Array of issues to create
  const issuesToCreate = [
    {
      fields: {
        project: { key: 'ALIREZA' },
        summary: 'Issue 1 Summary',
        description: 'Issue 1 Description',
        issuetype: { name: 'Bug' }
      }
    },
    {
      fields: {
        project: { key: 'ALIREZA' },
        summary: 'Issue 2 Summary',
        description: 'Issue 2 Description',
        issuetype: { name: 'Task' }
      }
    }
  ];

  // Create issues in bulk
  request.post({
    url: `${JIRA_SERVER}/rest/api/3/issue/bulk`,
    auth: {
      username: JIRA_USER,
      password: JIRA_API_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ issues: issuesToCreate })
  }, function(error, response, body) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(body);
    }
  });
}