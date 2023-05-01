import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navmain from '../components/navbar';

const Viewrecords = () => {
    const [Records, setRecords] = useState([]);
    
    useEffect(() => {
        const fetchData =async()=>{
            const id=localStorage.getItem("id");
            const data = await axios.get(  `http://localhost:8080/${id}/viewrecords`)
            setRecords(data.data);
        }
        fetchData();
    },[]
    )
    return(
<div>
    <Navmain />
    <div className='row' style={{paddingTop:"90px"}}>
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
                                <th>view reports</th>
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
                                <th> <a href={`http://localhost:8080/${data.report}`}><button className="btn btn-primary" >report</button></a></th>
                            </tr>))}
                        </tbody>
                    </table>
                </div>

                </div>
                </div>

    )

}
export default Viewrecords;