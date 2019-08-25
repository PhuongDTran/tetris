import React from 'react'
import Cell from './Cell'

function Stage({ stage }) {
  return (
    <div>
       {/* a row is an element in stage. each row is an array containing two-element arrays */}
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </div>
  )
}

export default Stage;