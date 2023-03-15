import { useState } from 'react';


export default function Home() {
  const [field, setField] = useState('');
  const [value, setValue] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
 
	 
	 
					
    const response = await fetch(
      	`https://${process.env.JIRA_URL}/rest/api/2/search?jql=${encodeURIComponent(
        `${field}=${value}`
      )}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.USER_NAME}:${process.env.API_TOKEN}`
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setTickets(data.issues.map((issue) => issue.key));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Field:
          <input
            type="text"
            placeholder='field'
            value={field}
            onChange={(event) => setField(event.target.value)}
          />
        </label>
        <br />
        <label>
          Value:
          <input
            type="text"
            placeholder='value'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <div className='text-white'>
        {tickets.map((ticket) => (
          <p key={ticket}>{ticket}</p>
        ))}
      </div>
    </div>
  );
}
