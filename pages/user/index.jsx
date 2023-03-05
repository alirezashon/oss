

// import mongoose from 'mongoose';

// const issueSchema = new mongoose.Schema({
//   key: String,
//   summary: String,
//   assignee: String,
// });

// const Issue = mongoose.model('Issue', issueSchema);

// async function updateIssues({props}) {
//   const issues = props.data.issues
//   await Issue.deleteMany();
//   await Issue.insertMany(issues.map(issue => ({
//     key: issue.key,
//     summary: issue.fields.summary,
//     assignee: issue.fields.assignee.displayName,
//   })));

// }

// mongoose.connect('mongodb://localhost:27017/MobinNet');

// updateIssues();
// setInterval(updateIssues, 10 * 60 * 1000);
 

export const getStaticProps = async () => {
	
    const jql = 'assignee = currentUser() ';
    const fields = 'key,resolution,summary,reporter,assignee,labels,components,priority,assignee,reporter,issuetype,customfield_18210,customfield_17501,customfield_10325,created,updated';

	
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
	);
	const data = await response.json();

    return {
        props:{
         data
       }
    }

} 


export default function index({data}) {
  <>
    {data.issues.key.map(issue => (
      <p>{issue }</p>
 ) )}
  </>
}