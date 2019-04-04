import React from "react";
import ReactDOM from "react-dom";
import { ArrayManipulation } from "./ArrayManipulation";
import "./styles.css";

function App() {
  const newArray = ["a", "b", "c"];
  const result = ArrayManipulation(newArray);
  console.log(result);
  return (
    <div className="App">
      <h1>CodeMasterThiru</h1>
      <h2>Array Manipulations</h2>
      <div>{result.arrayClone}</div>
      <div>{result.arrayValue}</div>
      <div>{result.findArrayFirstElement}</div>
      <div>{result.findArrayLastElement}</div>
      <div>{result.findArrayLength}</div>
      <div>{result.findArrayMidElement}</div>
      <div>{result.findArrayReverse}</div>
      <div>{result.findArraySorting}</div>
      <div>{result.isArray}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
