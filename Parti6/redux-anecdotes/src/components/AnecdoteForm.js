import React from 'react'
import {useDispatch } from 'react-redux'
import {creatNote} from '../reducers/anecdoteReducer'

const AnecdoteForm= () => {
 
    const dispatch = useDispatch()

  const addNote =async (event) =>{
    event.preventDefault()
    const content=event.target.note.value
    
    dispatch(creatNote(content))

  }


  return (
    <div>
     
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input name ="note"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm