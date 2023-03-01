import { useState, useEffect } from "react"
import Table from "../../tools/table"
export default function index() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/dashboards/oss/waiting-approval")
      const d = await response.json()
      setData(d)
    }
    fetchData()
  }, [])

  const tableHead = [
    {
      created: { name: "Created", col: 3 },
      type: { name: "T", col: 3 },
      key: { name: "Key", col: 2 },
      customerRequestType: { name: "CustomerRequestType", col: 3 },
      summary: { name: "Summary", col: 3 },
      P: { name: "P", col: 3 },
      assignee: { name: "Assignee", col: 3 },
      // timeTofirstResponse: { name: 'timeTofirstResponse', col: 3 },
      // timeToResolution: { name: 'timeToResolution', col: 3 },
      reporter: { name: "Reporter", col: 3 },
      lastComment: { name: "LastComment", col: 3 },
      update: { name: "Updated", col: 3 },
    },
  ]

  return <Table props={{ tableHead, data }} />
}
