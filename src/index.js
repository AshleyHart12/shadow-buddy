import React from 'react';
import ReactDOM from "react-dom";
import './css/output.css';

const Index = () => {
    return(
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Simple Tailwindo CSS application
      </h1>
      <button className="btn btn-blue">
        Submit
      </button>
    </div>)
}

ReactDOM.render(<Index />, document.getElementById("index"));