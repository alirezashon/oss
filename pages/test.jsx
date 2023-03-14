import { useState } from 'react';
import Dropzone from 'react-dropzone';

export default function Upload() {
  const [data, setData] = useState([]);

  const handleFileUpload = async (file) => {
    const content = await readCsvFile(file);
    setData(content);
  };

  const readCsvFile = async (file) => {
    const text = await file.text();
    const rows = text.split('\n');
    const data = rows.map((row) => row.split(','));
    return data;
  };

  return (
    <div className='text-white'>
      <h1>Upload CSV File</h1>
      <Dropzone onDrop={(acceptedFiles) => handleFileUpload(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop a CSV file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      <ul>
        {data.map((row, index) => ( 
          <p key={index}>{row.join(', ') }</p>
          
        ))}
      </ul>
    </div>
  );
}
