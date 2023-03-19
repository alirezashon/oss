import request from 'request';

export default async function createIssues(req, res) {
  // Jira authentication details
  const JIRA_SERVER = `https://${process.env.JIRA_URL}`;
  const JIRA_USER = process.env.USER_NAME
  const JIRA_API_TOKEN = process.env.API_TOKEN

  // Array of issues to create
const bodyData = 
  {
    
      fields: {
        project:{key:"ALIREZA"},
        summary: "Order stuck in pending",
            issuetype:{ name: "Lead" }
      },
   
    
      fields: {
     project:{key:"ALIREZA"},
      summary: " pending",
        issuetype: { name: "Lead" }
      },
    }
  

  // Create issues in bulk
  request.post({
    url: `${JIRA_SERVER}/rest/api/2/issue/bulk`,
    auth: {
      username: JIRA_USER,
      password: JIRA_API_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData), 
  }, function(error, response, body) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(body);
    }
  });
}