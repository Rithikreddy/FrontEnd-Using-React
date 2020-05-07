import React from "react";

function App() {
  var [time, setfunc] = React.useState("Time");
  function settime() {
    time = new Date().toLocaleTimeString();
    setfunc(time);
    setInterval(settime, 1000);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={settime}>Get Time</button>
    </div>
  );
}

export default App;
