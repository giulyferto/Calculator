import "./App.css";
import { Row } from "antd";
import CalcButton from "./components/CalcButton";
import UserInput from "./components/UserInput";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val.trim());
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert('Please input values first');
    }
  };
  
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "10px",
        backgroundColor: "#1b1b32",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "600px",
          paddingTop: "14px",
          backgroundColor: "#99c9ff",
          borderRadius: "20px",
          border: "5px solid white",
        }}
      >
        <UserInput input={input} />
        <Row>
          <CalcButton handleClick={addInput}> 1 </CalcButton>
          <CalcButton handleClick={addInput}> 2 </CalcButton>
          <CalcButton handleClick={addInput}> 3 </CalcButton>
          <CalcButton handleClick={addInput}> + </CalcButton>
        </Row>
        <Row>
          <CalcButton handleClick={addInput}> 4 </CalcButton>
          <CalcButton handleClick={addInput}> 5 </CalcButton>
          <CalcButton handleClick={addInput}> 6 </CalcButton>
          <CalcButton handleClick={addInput}> - </CalcButton>
        </Row>
        <Row>
          <CalcButton handleClick={addInput}> 7 </CalcButton>
          <CalcButton handleClick={addInput}> 8 </CalcButton>
          <CalcButton handleClick={addInput}> 9 </CalcButton>
          <CalcButton handleClick={addInput}> * </CalcButton>
        </Row>
        <Row>
          <CalcButton handleClick={calculateResult}>=</CalcButton>
          <CalcButton handleClick={addInput}>0</CalcButton>
          <CalcButton handleClick={addInput}>.</CalcButton>
          <CalcButton handleClick={addInput}>/</CalcButton>
        </Row>
        <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;
