
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function FloatLabelDoc() {
    const [value, setValue] = useState(null);
    const cities = [
        { name: 'علیرضا اکبری', code: 'AK' },
        { name: 'Other OSS Team', code: 'OSS' },
        { name: 'IOT', code: 'IOT' },
    ];

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <span className="p-float-label">
                <Dropdown style={{border:'solid 1px #a5cd39' , padding:'0px 22px' ,}} inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" />
                <label htmlFor="dropdown">اسکرام مستر</label>
            </span>
        </div>
    )
}
        