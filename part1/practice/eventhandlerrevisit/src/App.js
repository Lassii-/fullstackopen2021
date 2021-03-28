import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState(10)

  const hello = (who) => () => console.log('Hello', who)
  const setToValue = (newValue) => () => setValue(newValue)
  const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

  return (
    <div>
      {value}
      <Button handleClick={hello('World')} text='Hello!' />
      <Button handleClick={hello('React')} text='React!' />
      <Button handleClick={hello('Function')} text='Function!' />
      <Button handleClick={setToValue(value + 1000)} text={"Add 1000 to " + value} />
      <Button handleClick={setToValue(0)} text='Set value to zero' />
      <Button handleClick={setToValue(10)} text='Set value to 10' />
    </div>
  )

}

export default App