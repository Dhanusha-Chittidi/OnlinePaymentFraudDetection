import React from "react";

export const Result=({res})=>{
    return (
        <div class="result">
            <p>Form submitted Successfully!!!</p>
            <h3 style={{color : "slateblue"}}> The Result is: </h3>
            <h1 style={{color : res==='Payment is Fraud' ? "red" : "green"}}> {res} </h1>
       </div>
       
    );
}