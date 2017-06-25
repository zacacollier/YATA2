type Timer = {
  +type: string,
}
export const startTimer = (): Timer => ({ type: 'timer/START' })
export const stopTimer = (): Timer => ({ type: 'timer/STOP' })
