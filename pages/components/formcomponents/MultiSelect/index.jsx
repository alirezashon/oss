
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function index() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'علیرضا اکبری', code: 'AK' },
        { name: 'Other OSS Team', code: 'OSS' },
        { name: 'IOT', code: 'IOT' },
    ];


    return (
        <div className="card flex justify-content-center multiselect-demo">
            <MultiSelect style={{border:'solid 1px #499b01',}} value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="تیم توسعه" maxSelectedLabels={3} />
        </div>
    );  
}
        