import React, { useState } from 'react'
import '../App.css';
export default function Budget(props) {

  const [currencylabel,setcurrencylabel] = useState("Currency (£ Pound)");
  const change = (event)=>{
    if (!isNaN(event.target.value)) {
      props.setBudget(event.target.value);
      props.setRemaining(event.target.value);
      props.setMarketing(0);
      props.setFinance(0);
      props.setSales(0);
      props.setHr(0);
      props.setIT(0);
      props.setSpend(0);
  }
  else{
    alert("Error Not Number")
  }
  }

  const dollar = ()=>{
    props.setCurrency('$')
    setcurrencylabel("Currency ($ Dollar)");
  }
  const euro = ()=>{
    props.setCurrency('€')
    setcurrencylabel("Currency (€ Euro)");

  }
  const pound = ()=>{
    props.setCurrency('£')
    setcurrencylabel("Currency (£ Pound)");

  }
  const rupee = ()=>{
    props.setCurrency('₹')
    setcurrencylabel("Currency (₹ Rupee)");

  }
 
 

  return (
    <div className="Stats">
      <div className="Budget">
        <p>
          Budget: {props.currency} <input type="number" onChange={change} value={props.budget}/>
        </p>
      </div>
      <div className="Remaining">
        <p>Remaining: {props.currency}{props.Remaining}  </p>
      </div>
      <div className="Spend">
        <p>Spend so far: {props.currency}{props.Spend}  </p>
      </div>
        <select  id="Currency" className='bg'>
          <option  disabled selected className='dis'>{currencylabel}</option>
          <option value="dollar" onClick={dollar}>$ Dollar</option>
          <option value="pound" onClick={pound}>£ Pound</option>
          <option value="euro" onClick={euro}>€ Euro</option>
          <option value="ruppee" onClick={rupee}>₹ Rupee</option>
        </select>
    </div>
  );
}
