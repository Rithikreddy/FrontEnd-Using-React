// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Cars from "./practice";

const [tesla, honda] = [Cars[0], Cars[1]];

var teslaTopSpeed = tesla.speedStats.topSpeed;
var hondaTopSpeed = honda.speedStats.topSpeed;

var hondaTopColour = honda.coloursByPopularity[0];
var teslaTopColour = tesla.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
