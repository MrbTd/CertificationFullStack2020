import React, { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {votage} from '../reducers/anecdoteReducer'
import Notification from './Notification'
const AnecdoteList= () => {
    
    const dispatch=useDispatch()

    const vote = (id) => {

        dispatch(votage(id))
        
      }
 
    const anecdotes = useSelector(state => state)

    

  return (
    <div>
        
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
     
    </div>
  )
}

export default AnecdoteList