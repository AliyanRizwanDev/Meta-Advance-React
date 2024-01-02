import './App.css';
import { useState } from "react";
import Budget from './components/Budget';
import Allocation from './components/Allocation';
import Change from './components/Change';

function App() {
  const [budget,setBudget] = useState("");
  const [Remaining,setRemaining] = useState(0);
  const [Spend,setSpend] = useState(0);
  const [currency,setCurrency] = useState('£');
  const [Marketing,setMarketing] = useState(0);
  const [Finance,setFinance] = useState(0);
  const [Sales,setSales] = useState(0);
  const [Hr,setHr] = useState(0);
  const [IT,setIT] = useState(0);
  const [department,setdepartment] = useState("");
  const [func,setfunc] = useState("");
  return (
    <div id='body'>
      <h1>Company's Budget Allocation</h1>
      <Budget budget={budget} currency={currency} Remaining={Remaining} Spend={Spend} 
      setBudget={setBudget} setCurrency={setCurrency} setRemaining={setRemaining} setSpend={setSpend} 
      setMarketing={setMarketing} setFinance={setFinance} setSales={setSales} setHr={setHr} setIT={setIT}
      />
      <h2 className='my-4'>Allocation</h2> 
      <Allocation currency={currency} Marketing={Marketing} Finance={Finance} Sales={Sales} 
      Hr={Hr} IT={IT} setMarketing={setMarketing} setFinance={setFinance} setSales={setSales} setHr={setHr} Remaining={Remaining}
      setIT={setIT} Spend={Spend} setRemaining={setRemaining} setSpend={setSpend} />
      <h2 className='my-4'>Change Allocation</h2>
      <Change currency={currency}
      func={func} setfunc={setfunc} department={department} setdepartment={setdepartment}
      setMarketing={setMarketing} setFinance={setFinance} setSales={setSales} setHr={setHr} Remaining={Remaining}
      setIT={setIT} Marketing={Marketing} Finance={Finance} Sales={Sales} Spend={Spend} setRemaining={setRemaining} setSpend={setSpend}
      Hr={Hr} IT={IT}/>
    </div>
  );
}

export default App;
