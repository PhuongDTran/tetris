import React from 'react'
import Cell from './Cell'

import {StyledStage} from './styles/StyledStage'

function Stage({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
       {/* a row is an element in stage. each row is an array containing two-element arrays */}
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  )
}

export default Stage;