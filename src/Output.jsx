import React from 'react'

export default function Output({bill,tip}) {
  return (
    <div>
        <h3>You pay {bill + tip} (${bill}+ $B tip {tip})</h3>
    </div>
  )
}
