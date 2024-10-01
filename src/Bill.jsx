import React from 'react'

export default function Bill({bill, onSetBill}) {
  return (
    <div  className=".bg-dark-subtle">
        <label htmlFor=""> How much was the bill</label>
        <input type="text" 
        placeholder='enter your todo here'
        value={bill}
        onChange={(event)=>
            onSetBill(Number(event.target.value))
        }
        
        
        
        />
    </div>
  )
}
