import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function change(event) {
    const { name, value } = event.target;
    //console.log(event.target);
    setContact(prevValue => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }

      //Using the spread operator
      return {
        ...prevValue,
        [name]: value
        //[name] indicates the value of the name is assigned to value
        //otherwise if we write name:value name variable is assigned to value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={change} name="fName" placeholder="First Name" />
        <input onChange={change} name="lName" placeholder="Last Name" />
        <input onChange={change} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
