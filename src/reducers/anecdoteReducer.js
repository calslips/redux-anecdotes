export const initializeAnecdotes = (anecdotesAtStart) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotesAtStart
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find((a) => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map((a) => a.id === id ? votedAnecdote : a)
    case 'NEW_ANECDOTE':
      const newAnecdote = action.data
      return [ ...state, newAnecdote ]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer