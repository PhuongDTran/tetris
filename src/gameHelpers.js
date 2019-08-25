export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // a row is an element in stage. each row is an array containing two-element arrays
  return Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
}
