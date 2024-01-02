import React, { useState } from 'react'
import '../App.css';

export default function Change(props) {
  const [department,setdepartment] = useState("Marketing");
  const [func,setfunc] = useState("Add");
  const [allocation,setallocation] = useState();

  const change = (event)=>{
    let value = event.target.value;
    if (!isNaN(value)) {

      
        setallocation(parseInt(value));

     
      
  }
  else{
    alert("Error Not Number");
  }
  }

  const d1 = () => {
    setdepartment("Marketing")
  }
  const d2 = () => {
    setdepartment("Finance")
  }
  const d3 = () => {
    setdepartment("Sales")
  }
  const d4 = () => {
    setdepartment("Hr")
  }
  const d5 = () => {
    setdepartment("IT")
  }
  const f1 = () => {
    setfunc("Add")
  }

  const f2 = () => {
    setfunc("Sub")
  }

  



  const allocate = () => {
   
  
    
    if (func === "Add") {
      if (allocation > props.Remaining) {
        alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
        setallocation("")
        
      } else {
      if (department === "Marketing") {
        props.setMarketing(props.Marketing + allocation)
        props.setRemaining(props.Remaining - allocation);
        props.setSpend(props.Spend + allocation);
        
      } 
      else if(department === "Finance") {
        props.setFinance(props.Finance + allocation)
        props.setRemaining(props.Remaining - allocation);
        props.setSpend(props.Spend + allocation);
      }
      else if(department === "Sales") {
        props.setSales(props.Sales + allocation)
        props.setRemaining(props.Remaining - allocation);
        props.setSpend(props.Spend + allocation);
      }
      else if(department === "Hr") {
        props.setHr(props.Hr + allocation)
        props.setRemaining(props.Remaining - allocation);
        props.setSpend(props.Spend + allocation);
      }
      else if(department === "IT") {
        props.setIT(props.IT + allocation)
        props.setRemaining(props.Remaining - allocation);
        props.setSpend(props.Spend + allocation);
      }
    }
    } 
    else if (func === "Sub") {
      if (props.Marketing-allocation < 0) {
        alert(`Value Can't Be Less Than 0`);
        setallocation("")
        
      } else {
      if (department === "Marketing") {
        props.setMarketing(props.Marketing - allocation)
        props.setRemaining(props.Remaining + allocation);
        props.setSpend(props.Spend - allocation);
      } 
      else if(department === "Finance") {
        props.setFinance(props.Finance - allocation)
        props.setRemaining(props.Remaining + allocation);
        props.setSpend(props.Spend - allocation);
      }
      else if(department === "Sales") {
        props.setSales(props.Sales - allocation)
        props.setRemaining(props.Remaining + allocation);
        props.setSpend(props.Spend - allocation);
      }
      else if(department === "Hr") {
        props.setHr(props.Hr - allocation)
        props.setRemaining(props.Remaining + allocation);
        props.setSpend(props.Spend - allocation);
      }
      else if(department === "IT") {
        props.setIT(props.IT - allocation)
        props.setRemaining(props.Remaining + allocation);
        props.setSpend(props.Spend - allocation);
      }
    }
    }
  
  }


  return (
    <div className="Stats1">
      <label htmlFor="Department" className="label">Department</label>
      <select  id="Department" className='bg1'>
          <option  className="dis" value="" selected>Choose Department</option>
          <option value="marketing" onClick={d1}>Marketing</option>
          <option value="finance" onClick={d2}>Finance</option>
          <option value="sales" onClick={d3}>Sales</option>
          <option value="hr" onClick={d4}>Human Resource</option>
          <option value="it" onClick={d5}>IT</option>
        </select>

        <label htmlFor="allocation" className="label">Allocation</label>
        <select  id="allocation" className='bg1'>
          <option value="add" onClick={f1} selected>Add</option>
          <option value="sub" onClick={f2} >Sub</option>
        </select>

     
        <p className='addsub'>
          {props.currency} <input type="text" onChange={change} value={allocation} />
        </p>
      <div className="btn btn-primary save" onClick={allocate}>Save</div>
        
    </div>
  )
}
