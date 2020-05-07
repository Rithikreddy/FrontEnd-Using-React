import React from "react";

function avatar(props){
    return(
        <img src={props.img} alt="Hello" />
        //Here try to access the attribute or property where the avatar was declared
        //and access it as an object
    );
}

export default avatar;