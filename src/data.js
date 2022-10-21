import React from "react";
const City=(props)=>{
    return(
        <div>
     <h2>{props.town}</h2>
    <h3>{props.field}</h3>
    <sports golf="golf is awesome"/>
        </div>
    );    
};
export{City};