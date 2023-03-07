import React, { useState } from "react";
import './style.css';
import Navmain from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";


function AddNewRecords() {
  const id=localStorage.getItem("id");
  const navigate = useNavigate();
  
  const [hospital, setHospital] = useState("");
  const [reportNo, setReportNo] = useState("");
  const [disease, setDisease] = useState("d1");
  const [medicine, setMedicine] = useState("");
  const [report, setReport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [otherDisease, setOtherDisease] = useState("");
  const [otherHospital, setOtherHospital] = useState("");
  
  const collectRecords = async () => {
    
    console.log(hospital, reportNo, disease, medicine, date, time);
    let result = await fetch(`http://localhost:8080/${id}/reports`, {
      method: 'post',
      body: JSON.stringify({ hospital, reportNo, disease, medicine, date, time }),
      headers: {
        'Content-Type': 'application/json'
      }

      ,
    });
    result = await result.json();
    console.log(result);
    navigate("/")

  };




  return (
    <div>
      <Navmain />

      <div className="col p-2 border border-transparent" style={{ width: "90%", marginTop: "90px", backgroundColor: "aliceblue" }}>
        <div style={{ fontSize: "30px", fontWeight: "bold", color: "rgb(51, 82, 120)" }}>Medical Form</div>
        <form onSubmit={collectRecords}>
          <label htmlFor="Hospital" className="form-label">
            Hospital Name:
          </label>
          <select
            className="form-select"
            id="Hospital"
            placeholder="select hospital"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value="Norvic Hospital">Norvic Hospital</option>
            <option value="Civil Hospital">Civil Hospital</option>
            <option value="Star Hospital">Star Hospital</option>
            <option value="Hams Hospital">Hams Hospital</option>
            <option value="Kritipur Hospital">Kritipur Hospital</option>
            <option value="h5">Others</option>
          </select>
          {hospital === "h5" && (
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Hospital name"
              value={otherHospital} 
              onChange={(e) => setOtherHospital(e.target.value)}
            />
          )}

          <label htmlFor="ReportNo" className="form-label">
            ReportNo:
          </label>
          <input
            type="text"
            className="form-control"
            id="ReportNo"
            placeholder="eg. 12345"
            value={reportNo}
            onChange={(e) => setReportNo(e.target.value)}
          />

          <label htmlFor="Disease" className="form-label">
            Disease:
          </label>
          <select
            className="form-select"
            id="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          >
            <option value="Pneumonia">Pneumonia</option>
            <option value="Covid 19">Novel CoronaVirus(COVID-19)</option>
            <option value="Common cold">Common Cold</option>
            <option value="Measles">Measles</option>
            <option value="d5">Others</option>
          </select>
          {disease === "d5" && (
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter disease name"
              value={otherDisease}
              onChange={(e) => setOtherDisease(e.target.value)}
            />
          )}

          <label htmlFor="Medicine" className="form-label">
            Medicine Prescribed
          </label>
          <input
            type="text"
            className="form-control"
            id="Medicine"
            placeholder="eg. ABCD"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />

          <div className="form-group">
            <label htmlFor="Report" className="form-label">
              Scan Copy of Report:
            </label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="Report"
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
          </div>

          <label htmlFor="date" className="form-label">
            Followup date:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label htmlFor="time" className="form-label">
            Followup time:
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <div className="mt-3">
            <button type="Button" className="btn btn-secondary" onClick={collectRecords}>
              Add Record
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>

  );
}

export default AddNewRecords;