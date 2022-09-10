import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hrs = date.getHours();
      let mins = date.getMinutes();
      let sec = date.getSeconds();
      let period = "AM";

      if (hrs === 0) {
        hrs = 12;
      } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
      }
      hrs = hrs < 10 ? "0" + hrs : hrs;
      mins = mins < 10 ? "0" + mins : mins;
      sec = sec < 10 ? "0" + sec : sec;

      setNewTime(`${hrs}:${mins}:${sec}:${period}`);
    }, 1000);
  });

  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <div className="card text-center border-0 shadow-lg">
            <div className="card-header border-0">
              <h1>DIGITAL CLOCK</h1>
            </div>
            <div className="card-body">
              <h2 className="fw-bolder">{newTime}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
