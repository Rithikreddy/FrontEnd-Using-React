//var React = require("react");
//var ReactDom = require("react-dom");

import React from "react";
import ReactDom from "react-dom";

//We can write one of the methods either using require or using the import

//ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));
//no need of comments except for the spcifiying id
//The baber feauture and the react will take care about the more processing of the above html
//Remember we can only send one html element using this 1st parameter of render function
//so we place all the elements inside a div tag and send this element
// var h1 = document.createElement("h1");
// h1.innerHTML = "<p>Hello World </p><p>Hii</p>";
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);

//Above method is another way of creating an html element but requires 3 lines whereas above 1line

// ReactDom.render(
//   <div>
//     <h1>Hello World</h1>
//     <p> This is a paragraph combined with the above h1 tag and sent </p>
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDom from "react-dom";

// ReactDom.render(
//   <div>
//     <h1>Fav Foodies</h1>
//     <ul>
//       <li>Chicken Biryani</li>
//       <li>Noodles</li>
//       <li>Nutella with Bread</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// const name = "Rithikreddy";

// ReactDom.render(
//   <div>
//     <h1>Hello {name}! </h1>
//     <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

//We can use math functions or js code(expression but not a statement) within the curly braces

// ReactDom.render(
//   <div>
//     <p className="para" spellCheck="false">
//       Created by {name}
//     </p>
//     <p>
//       copyright @{name} {new Date().getFullYear()}
//     </p>
//     <div>
//       <img className="food" src="https://picsum.photos/100/100" alt="Hello" />
//       <img className="food" src="https://picsum.photos/100/100" alt="Hello" />
//       <img className="food" src="https://picsum.photos/100/100" alt="Hello" />
//     </div>
//   </div>,
//   document.getElementById("root")
// );

//regarding the content editable in the react check the html global attributes
//In html we write directly in tag itself as class="" but remember it is the javascript file
//so the content has to be managed according to it

// var colour = "red",
//   key = "Good Morning";

// var x = new Date().getHours();

// // console.log(x);
// if (x >= 12 && x < 18) {
//   key = "Good Afternoon";
//   colour = "green";
// } else if (x >= 18) {
//   key = "Good Evening";
//   colour = "blue";
// }
// var object = {
//   color: colour
// };

// ReactDom.render(<h1 style={object}>{key}</h1>, document.getElementById("root"));

//as this is the javascript file we have to do inline styling by passing the js objects to the style

// import Heading from "./Heading.jsx";
// import App from "./App";

// ReactDom.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById("root")
// );

// import pi, { mulby2, mulby3 } from "./imp_exp";

// ReactDom.render(
//   <div>
//     <ul>
//       <li>{pi}</li>
//       <li>{mulby2()}</li>
//       <li>{mulby3()}</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

import Avatar from "./avatar";
import Default from "./default";

  function Card(props){
    return( 
    <div>
        <h1>{props.name}</h1>
        <Avatar img = {props.url}/>
        <Default x = {props.email}/>
        <Default x = {props.phoneno}/>
    </div>
    // <p>{props.email}</p>
    // <p>{props.phoneno}</p>
    //instead of the both paragraphs accessing different properties we can use another method like
    //and compute the value by creating a new component
    );
  }

  ReactDom.render(
    <Card
      url = "https://picsum.photos/200/300"
      name = "Random picture Generated"
      email = "abc@gmail.com"
      phoneno = "85230....." 
    />
    ,document.getElementById("root")
  );

//Always remember keep capitals for the user defined tags
