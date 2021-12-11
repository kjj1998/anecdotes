import React, { useState } from 'react';


const Button = ({handleClick, text}) => {
  return (
      <button onClick={handleClick}>
        {text}
      </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  const [mostVoted, setMostVoted] = useState(0)

  const RandomAnecdotesGenerator = () => {
    const max = anecdotes.length
    const min = 0
    const randomIndex = Math.floor(Math.random() * (max - min) +  min)
    console.log(randomIndex)
    
    setSelected(randomIndex)
  }

  const IncrementVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    const mostVotedAnecdoteIndex = copy.indexOf(copy.reduce((a, b) =>
      Math.max(a, b), 0)
    )
    console.log("anecdote number", mostVotedAnecdoteIndex+1)
    setMostVoted(mostVotedAnecdoteIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      has {points[selected]} votes <br/>
      <Button handleClick={IncrementVote} text={"vote"} />
      <Button handleClick={RandomAnecdotesGenerator} text={"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]} <br/>
      has {points[mostVoted]} votes <br/>
    </div>
  )
}

export default App
