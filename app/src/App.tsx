import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setpeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number |undefined>(undefined);
  const good = bill !==undefined && people!==undefined && tip!==undefined;

  const totalCalc = good && (bill * tip / people).toFixed(2);
  const tipCalc = good &&((bill * tip / people)).toFixed(2);
  const showTip = !(tipCalc==='NaN');
  const showTotal = !(totalCalc==='NaN');

  return (
    <div className="App">
      <div className="left">

        <div className="billnum">
          <span>Bill</span>
        <input
        className="billinp"
          type="number"
          placeholder="bill"
          value={bill}
          onChange={(e) => {
            setBill(e.target.valueAsNumber);
          }}
        />

        </div>
      
        <div className="btn">
          <h3>select tip %</h3>
        <button onClick={() => setTip(0.5)}>5%</button>
        <button onClick={() => setTip(0.1)}>10%</button>
        <button onClick={() => setTip(0.15)}>15%</button>
        <button onClick={() => setTip(0.25)}>25%</button>
        <button onClick={() => setTip(0.5)}>50%</button>
        </div>
        <div className="peoplenum">
          <span>Number of People</span>
        <input
        
        className="peopleinp"
          type="number"
          placeholder="number of people"
          value={people}
          onChange={(e) => {
            setpeople(e.target.valueAsNumber);
          }}
        />
        </div>
        
     
      </div>
      <div className="right">
        <div className="tip">Tip amount:<h1 className="calc">{showTip ? tipCalc:"0.00"}</h1></div>
        <div className="total">Total<h1 className="calc">{showTotal ? totalCalc:"0.00"}</h1></div>
      </div>
    </div>
  );
}

export default App;
