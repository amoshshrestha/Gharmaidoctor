import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Viewrecords = () => {
    const [Records, setRecords] = useState([]);
    useEffect(() => {
        const fetchData =async()=>{
            const data = await axios.get('http://localhost:8000/viewrecords')
            setRecords(data.data);
        }
        fetchData();
    },[]
    )
    return(

    <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Hospital Name</th>
                                <th>Report No</th>
                                <th>Disease</th>
                                <th>Medicine Prescribed</th>
                                <th>Follow up Date</th>
                                <th>Follow-up Time</th>
                            </tr>

                        </thead>
                        <tbody>
                           {Records?.map((data, index)=>(<tr key={index}>
                                <th>{data.hospital}</th>
                                <th>{data.reportNo}</th>
                                <th>{data.disease}</th>
                                <th>{data.medicine}</th>
                                <th>{data.date}</th>
                                <th>{data.time}</th>
                            </tr>))}
                        </tbody>
                    </table>
                </div>

                </div>

    )

}
export default Viewrecords;