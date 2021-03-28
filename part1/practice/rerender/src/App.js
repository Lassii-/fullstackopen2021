import React, { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)


  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='+' />
      <Button handleClick={setToZero} text='Zero' />
      <Button handleClick={decreaseByOne} text='-' />
    </div>
  )
}

export default App