import React from 'react'
import { useState } from 'react';
import './BMI.css';

function BMI() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const  [category,setCategory]=useState("");

  const bmicalculator = () => {

    const h=parseFloat(height);
    const w=parseFloat(weight);

    if (isNaN(h) || isNaN(w)) {
      alert("Please enter valid height and weight");
      return
    }

    if (h===0 || w===0) {
      alert("Height and Weight cannot be zero. Do enter a valid input");
      return
    }

    const hinm =h / 100;
    const hinmsquare = Math.pow(hinm,2)
    const calculatedBmi = w / hinmsquare;
    setBmi(calculatedBmi);
    setCategory(bmicategory(calculatedBmi));
  }

  const bmicategory=(bmi)=>{
    if ( bmi<18.5 ) return "Underweight";
    if ( bmi>=18.5 && bmi<=24.9 ) return "Normal weight";
    if ( bmi>=25 && bmi<30 ) return "Overweight";
    return "Obese" ;
  }

  const reset=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  }

  return (
    <div className='bmi-container'>
      <h1>BMI Calculator</h1>

      <label>Height (cm): </label>
      <input type="number" placeholder='Enter height' min="0" value={height} onChange={(e) => setHeight(e.target.value)}></input>
      
      <label>Weight (kg): </label>
      <input type="number" placeholder='Enter weight' min="0" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
      
      <div className='button-container'>
        <button className="submit-btn" onClick={bmicalculator}>Submit</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
  
      {bmi !== null && (
        <div className='result'>
          <h3>BMI: {bmi.toFixed(2)}</h3>
          <h3>Category: {category}</h3>
        </div>
      )}

    </div>
  )
}

export default BMI
