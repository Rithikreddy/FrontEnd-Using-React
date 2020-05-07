import React from "react";

function App() {
  const [list, setlist] = React.useState("");
  const [changeList, setChangeList] = React.useState([]);
  function clicked() {
    setChangeList(prevValue => {
      return [...prevValue, [list]];
    });
  }
  //Carefully check the usage of the prevValue
  function changed(event) {
    const p = event.target.value;
    setlist(p);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changed} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {changeList.map(y => (
            <li>{y}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
