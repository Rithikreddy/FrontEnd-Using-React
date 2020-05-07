import React from "react";

function Heading() {
  var colour = "red",
    key = "Good Morning";

  var x = new Date().getHours();

  // console.log(x);
  if (x >= 12 && x < 18) {
    key = "Good Afternoon";
    colour = "green";
  } else if (x >= 18) {
    key = "Good Evening";
    colour = "blue";
  }
  var object = {
    color: colour
  };
  return <h1 style={object}>{key}</h1>;
}

export default Heading;
//Here if the Heading is not written in Heading() format that means we can use this
//in the otherfile at specified location otherwise it will return at start of the file which may not
//be the requirement
