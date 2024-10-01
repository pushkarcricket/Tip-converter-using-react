import React from 'react'

export default function Service({children, percentage,onselect}) {
  return (
    <div>
        <label htmlFor="">{children}</label>
        <select  value={percentage} onChange={(event)=>onselect(Number(event.target.value))}>
            <option value="0">Dissatisfied(0%)</option>
            <option value="5">it was okay (5%)</option>
            <option value="10">it was good(10%)</option>
            <option value="20">Asolutely amazing(20%)</option>
        </select>
    </div>
  )
}
