import React from "react";

function App() {
  const [headname, setHeadName] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false); //false shouldn't be a string
  const [changes, setChanges] = React.useState("");

  function hoverin() {
    //setHeadName("MouseOver");
    setMouseOver(true);
  }

  function hoverout() {
    //setHeadName("");
    setMouseOver(false); //Here they shouldn't be passed as strings
  }

  function change(event) {
    setChanges(event.target.value);
    // we can execute the below statements happily
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
    //console.log(event.target.onChange); we get output as undefined
  }
  // function clicked() {
  //   // headname = changes; we cannot change the name directly if the changes is hook
  //   // If we want to change
  //   //we have to compulsory call the function remember this is important point
  //   setHeadName(changes);
  // }
  function clicked(event) {
    //event has to be passed for the form tag onSubmit attribute
    setHeadName(changes);

    event.preventDefault(); //This will prevent the refreshing of the form tag which is
    //it's default behavior
  }
  return (
    <div className="container">
      <h1>Hello {headname}</h1>
      <form action="" onSubmit={clicked}>
        <input
          onChange={change}
          type="text"
          placeholder="What's your name?"
          value={changes}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={hoverin}
          onMouseOut={hoverout}
          //onClick={clicked}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
