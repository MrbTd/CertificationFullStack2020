import React,{useEffect} from 'react'
import {  useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import {handleInit} from './reducers/anecdoteReducer'
const App = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(handleInit())
  },[])


  return (
    <div>
    <AnecdoteList/>
    <AnecdoteForm/>
   
    </div>
  )
}

export default App