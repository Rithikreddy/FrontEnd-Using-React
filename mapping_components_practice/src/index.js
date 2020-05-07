import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var arr = [3, 48, 56, 6, 7];
var newarr = [];
// arr.forEach(function(x) {
//   newarr.push(x * 2);
// });
// console.log(newarr);

// newarr = arr.map(function(x) {
//   return (x * 2)
// });
// console.log(newarr);

newarr = arr.filter(function(x) {
  return x > 10;
});
console.log(newarr);

ReactDOM.render(<App />, document.getElementById("root"));
