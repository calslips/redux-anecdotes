const initialState = '';

export const voteNotice = (anecdote) => {
  return {
    type: 'VOTE_NOTICE',
    notification: `you voted '${anecdote}'`
  }
};

export const creationNotice = (anecdote) => {
  return {
    type: 'CREATION_NOTICE',
    notification: `you created '${anecdote}'`
  }
}

export const removeNotice = () => {
  return {
    type: 'REMOVE_NOTICE',
    notification: initialState
  }
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_NOTICE':
      return action.notification
    case 'CREATION_NOTICE':
      return action.notification
    case 'REMOVE_NOTICE':
      return initialState
    default:
      return state
  }
}

export default notificationReducer