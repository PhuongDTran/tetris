import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export function useStage(player, resetPlayer) {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0)


  useEffect(() => {
    setRowsCleared(0)

    const sweepRows = newStage => 
      newStage.reduce((acc, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1)
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']))
          return acc
        } else {
          acc.push(row)
          return acc
        }

      }, [])


    const updateStage = prevStage => {
      // first flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      )

      // then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      })
      // then check if collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage)
      }
      return newStage;
    }
    setStage(prev => updateStage(prev))
  }, [player])

  return [stage, setStage, rowsCleared];
}
