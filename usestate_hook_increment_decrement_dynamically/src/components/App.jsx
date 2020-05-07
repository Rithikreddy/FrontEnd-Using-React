import React from "react";
//useState property of react helps in updating the values on page dynamically

//useState is an array with first one as value next one as function

//const [red,green,blue] = [1,2,3];   //assigns the value respectively
//console.log(red) gives the value 1

function App() {
  const [count, setcount] = React.useState(10);
  //Careful with the spelling and calling

  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

//Be careful we shouldn't call function we should call function's name
