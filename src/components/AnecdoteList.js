import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotice, removeNotice } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, handleClick }) => {
  return (
    <div>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter(
      (anecdote) => anecdote.content.toLowerCase().includes(state.filter)
    )
  })
  const dispatch = useDispatch()

  return (
    <>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          handleClick={() => {
            dispatch(vote(anecdote.id))
            dispatch(voteNotice(anecdote.content))
            setTimeout(() => {dispatch(removeNotice())}, 5000)
          }}
        />
      )}
    </>
  )
}

export default AnecdoteList
