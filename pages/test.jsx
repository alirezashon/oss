import { useState } from 'react';

function FileInput() {
  const [rows, setRows] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;
      const rows = csvText.split('\n').map((row) => row.split(','));
		setRows(rows);
		console.log(rows)
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <ul>
        {rows.map((row, rowIndex) => (
          <li key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>{cell}</span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
