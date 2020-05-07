// import React from "react";

const pi = 3.1459;

function mulby2() {
  return 2 * pi;
}
function mulby3() {
  return 3 * pi;
}

export default pi;
//remember there will be only one default export per 1 jsx file

export { mulby2, mulby3 };
