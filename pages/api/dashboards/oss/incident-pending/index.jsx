
export default async function handler(req, res) {
    const jql =
        'project = "Incident Management" AND ("Customer Request Type" in ("Modem (IR)", "Ticketing  (IR)", "Device Monitoring  (IR)", "AAA (IR)", "Login and Account Problem (IR)") AND (IR-Category-Modem = ACS OR IR-Category-Ticketing in (Kiosk, Ticketing) OR "IR-Category-Device Monitoring" in ("Auto Ticketing", "B2B Nagios", "Nagios VPN", "SolarWinds BW", "SolarWinds Regulatory", "SolarWinds VPN", "SolarWinds Wimo") OR IR-Category-AAA in ("Radius cluster issue", "VPN AAA") OR "IR-Category-Login and Account Problem" in (ACS, Kiosk, "Nagios VPN", Ticketing)) OR "Assignee Group" in (IT-OSS) OR assignee in membersOf(IT-OSS)) AND status = Pending'
    
    const fields = 'key,summary,priority,assignee,reporter,issuetype,customfield_17501,customfield_10325,created,updated';
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
        res.status(200).json(data.issues)
  
}