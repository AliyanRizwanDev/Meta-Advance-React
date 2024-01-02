import React from 'react'
import '../App.css';

export default function Allocation(props) {
  const incMarketing = () =>{
    if (props.Remaining-10 >= 0) {
      props.setRemaining(props.Remaining - 10);
      props.setMarketing(props.Marketing + 10);
      props.setSpend(props.Spend + 10);
    }
    else{
      alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
    }
  }
  const decMarketing = () =>{
    if (props.Marketing-10 >= 0) {
      props.setRemaining(props.Remaining + 10);
      props.setMarketing(props.Marketing - 10);
      props.setSpend(props.Spend - 10);
    }
    else{
      alert(`Value Can't Be Less Than 0`);
    }
  }

  const clearMarketing = () =>{
    
      props.setRemaining(props.Remaining + props.Marketing);
      props.setSpend(props.Spend - props.Marketing);
      props.setMarketing(0);
      alert("Cleared Marketing Allocation");
  }


  const incFinance = () =>{
    if (props.Remaining-10 >= 0) {
      props.setRemaining(props.Remaining - 10);
      props.setFinance(props.Finance + 10);
      props.setSpend(props.Spend + 10);
    }
    else{
      alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
    }
  }
  const decFinance = () =>{
    if (props.Finance-10 >= 0) {
      props.setRemaining(props.Remaining + 10);
      props.setFinance(props.Finance - 10);
      props.setSpend(props.Spend - 10);
    }
    else{
      alert(`Value Can't Be Less Than 0`);
    }
  }

  const clearFinance = () =>{
    
      props.setRemaining(props.Remaining + props.Finance);
      props.setSpend(props.Spend - props.Finance);
      props.setFinance(0);
      alert("Cleared Finance Allocation");
  }


  const incSales = () =>{
    if (props.Remaining-10 >= 0) {
      props.setRemaining(props.Remaining - 10);
      props.setSales(props.Sales + 10);
      props.setSpend(props.Spend + 10);
    }
    else{
      alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
    }
  }
  const decSales = () =>{
    if (props.Sales-10 >= 0) {
      props.setRemaining(props.Remaining + 10);
      props.setSales(props.Sales - 10);
      props.setSpend(props.Spend - 10);
    }
    else{
      alert(`Value Can't Be Less Than 0`);
    }
  }

  const clearSales = () =>{
    
      props.setRemaining(props.Remaining + props.Sales);
      props.setSpend(props.Spend - props.Sales);
      props.setSales(0);
      alert("Cleared Sales Allocation");
  }
  
  const incHr = () =>{
    if (props.Remaining-10 >= 0) {
      props.setRemaining(props.Remaining - 10);
      props.setHr(props.Hr + 10);
      props.setSpend(props.Spend + 10);
    }
    else{
      alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
    }
  }
  const decHr = () =>{
    if (props.Hr-10 >= 0) {
      props.setRemaining(props.Remaining + 10);
      props.setHr(props.Hr - 10);
      props.setSpend(props.Spend - 10);
    }
    else{
      alert(`Value Can't Be Less Than 0`);
    }
  }

  const clearHr = () =>{
    
      props.setRemaining(props.Remaining + props.Hr);
      props.setSpend(props.Spend - props.Hr);
      props.setHr(0);
      alert("Cleared Human Resource Allocation");
  }

  const incIT = () =>{
    if (props.Remaining-10 >= 0) {
      props.setRemaining(props.Remaining - 10);
      props.setIT(props.IT + 10);
      props.setSpend(props.Spend + 10);
    }
    else{
      alert(`Value Can't Exceed Remaining Funds ${props.Remaining}`);
    }
  }
  const decIT = () =>{
    if (props.IT-10 >= 0) {
      props.setRemaining(props.Remaining + 10);
      props.setIT(props.IT - 10);
      props.setSpend(props.Spend - 10);
    }
    else{
      alert(`Value Can't Be Less Than 0`);
    }
  }

  const clearIT = () =>{
    
      props.setRemaining(props.Remaining + props.IT);
      props.setSpend(props.Spend - props.IT);
      props.setIT(0);
      alert("Cleared IT Allocation");
  }

  return (
    <div>
      <table>
        <thead >
            <th id="set">Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
            <th></th>
        </thead>
        <tbody >
        <tr>
            <td>Marketing</td>
            <td>{props.currency}{props.Marketing}</td>
            <td id="plus" onClick={incMarketing} ><button><center><div><p>+</p></div></center></button></td>
            <td id="minus" onClick={decMarketing} ><button><center><div><p>-</p></div></center></button></td>
            <td id="cross" onClick={clearMarketing} ><button><center><div><p>x</p></div></center></button></td>
        </tr>
        <tr>
            <td>Finance</td>
            <td>{props.currency}{props.Finance}</td>
            <td id="plus" onClick={incFinance} ><button><center><div><p>+</p></div></center></button></td>
            <td id="minus" onClick={decFinance} ><button><center><div><p>-</p></div></center></button></td>
            <td id="cross" onClick={clearFinance} ><button><center><div><p>x</p></div></center></button></td>
        </tr>
        <tr>
            <td>Sales</td>
            <td>{props.currency}{props.Sales}</td>
            <td id="plus" onClick={incSales} ><button><center><div><p>+</p></div></center></button></td>
            <td id="minus" onClick={decSales} ><button><center><div><p>-</p></div></center></button></td>
            <td id="cross" onClick={clearSales} ><button><center><div><p>x</p></div></center></button></td>
        </tr>
        <tr>
            <td>Human Resource</td>
            <td>{props.currency}{props.Hr}</td>
            <td id="plus" onClick={incHr} ><button><center><div><p>+</p></div></center></button></td>
            <td id="minus" onClick={decHr} ><button><center><div><p>-</p></div></center></button></td>
            <td id="cross" onClick={clearHr} ><button><center><div><p>x</p></div></center></button></td>
        </tr>
        <tr>
            <td>IT</td>
            <td>{props.currency}{props.IT}</td>
            <td id="plus" onClick={incIT} ><button><center><div><p>+</p></div></center></button></td>
            <td id="minus" onClick={decIT} ><button><center><div><p>-</p></div></center></button></td>
            <td id="cross" onClick={clearIT} ><button><center><div><p>x</p></div></center></button></td>
        </tr>
    </tbody>
      </table>
    </div>
  )
}
