import React from "react";

function App() {
  const [name, setName] = React.useState({
    fname: "",
    lname: ""
  });
  function change(event) {
    const { name, value } = event.target;
    //Remember as the react passes synthectic event the event.target.value shouldn't
    //be used inside the setName(here) function
    setName(prevValue => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {name.fname} {name.lname}
      </h1>
      <form>
        <input onChange={change} name="fName" placeholder="First Name" />
        <input onChange={change} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
