
import { useState } from 'react'
import './App.css'
import ResetButton from './assets/ResetButton'
import Service from './assets/Service'
import Bill from './Bill'
import Output from './Output'


function App() {

  const[bill,Setbill]=useState("");
  const[Percentage1, setPercentage1]=useState(0);
  const[Percentage2, setPercentage2]=useState(0);

  const tip=bill *((Percentage1 + Percentage2) /2/100);
  console.log("the value of tip", tip);
  const handleClick=()=>{
    Setbill("");
    setPercentage1(0);
    setPercentage2(0)
  }
  

  return (
    <>
    <div className='<div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>'>

    <Bill bill={bill} onSetBill={Setbill}/>
    <Service percentage={Percentage1} onselect={setPercentage1}> How did you like the service?</Service>
    <Service percentage={Percentage2} onselect={setPercentage2}> How did your friend like the service</Service>
    
    {
      bill >0 &&
    <>
    
    <Output bill={bill} tip={tip}/>
    <ResetButton onsetbill={handleClick}/>
  
    </>
    }

    </div>
    </>
  )
}

export default App
