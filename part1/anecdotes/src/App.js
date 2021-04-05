import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  /* UseStates for anecdote selection and votes */
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  /* Highest vote and its index in the vote-array */
  const highestVoteCount = Math.max(...votes)
  const highestVoteIndex = votes.findIndex((vote) => vote === highestVoteCount);
  /* Get a random anecdote */
  const getRandomAnecdote = (anecdotes) => Math.floor(Math.random() * anecdotes.length)


  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

  /* Add one vote to the currently shown anecdote */
  const AddVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }
  /* Draws the website interface 
    Takes anecdote-array, votes-array, the index & count of highest vote as parameters*/
  const AnecdoteInterface = ({ anecdote, votes, highestVoteIndex, highestVoteCount }) => {
    return (
      <div>
        <div>
          <h1>Anecdote of the day</h1>
          <p>{anecdote}</p>
          <p>This anecdote has {votes} votes.</p>
          <Button handleClick={() => AddVote()} text="Vote this anecdote" />
          <Button handleClick={() => setSelected(() => getRandomAnecdote(anecdotes))} text="Get next anecdote" />
        </div>
        <div>
          <h1>The anecdote with most votes</h1>
          <p>The anecdote '{highestVoteIndex}' has {highestVoteCount} votes.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AnecdoteInterface anecdote={anecdotes[selected]} votes={votes[selected]}
        highestVoteIndex={anecdotes[highestVoteIndex]} highestVoteCount={votes[highestVoteIndex]} />
    </div>
  )
}

export default App