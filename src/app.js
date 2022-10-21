import React from "react";
import ReactDOM from "react-dom";
import{ City } from "./data";

const Template = (props) => {
    const newinfo={
        town:"kisumu is a nice town",
        field:"nice landscape",
    };
    return (
     <div>
        <h1>{props.data}</h1>
        <City item={newinfo}/>
     </div>   
    );
};

ReactDOM.render(<Template/>,document.getElementById("root"));