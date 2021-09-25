import React from 'react'
import { useDispatch } from 'react-redux'
import { filterWith } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const inputValue = event.target.value
    dispatch(filterWith(inputValue))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
