import React from "react";

function Divide(props) {
  //properties
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.imgs}
        </span>
        <span>{props.names}</span>
      </dt>
      <dd>{props.meanings}</dd>
    </div>
  );
}
export default Divide;
