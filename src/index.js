import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
// import App from "./App";

function ncard (val, ind, arr){

  return(
     <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  )

}

ReactDOM.render(
  <>
  <h1 className="heading_style">List of top Netflix Series</h1>
  {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
