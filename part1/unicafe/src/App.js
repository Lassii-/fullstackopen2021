import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const Statistic = ({ text, counter }) => <tr><td>{text}</td><td>{counter}</td></tr>
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="Good" counter={good} />
          <Statistic text="Neutral" counter={neutral} />
          <Statistic text="Bad" counter={bad} />
          <Statistic text="All" counter={good + neutral + bad} />
          <Statistic text="Average" counter={(((good * 1) + (bad * -1)) / (good + neutral + bad)).toFixed(1)} />
          <Statistic text="Positive" counter={(good / (good + neutral + bad) * 100 || 0).toFixed(1) + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics {...{ good, neutral, bad }} />
    </div>
  )
}

export default App