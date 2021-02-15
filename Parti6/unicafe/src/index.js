import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const goo = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const neutra = () =>{
    store.dispatch({
      type:'OK'
    })
  }

  const ba = () =>{
    store.dispatch({
      type:'BAD'
    })
  }

  const ressert = () =>{
    store.dispatch({
      type:'ZERO'
    })
  }


  return (
    <div>
      <button  onClick={goo}>good</button> 
      <button  onClick={neutra}>neutral</button> 
      <button  onClick={ba}>bad {ba}</button>
      <button  onClick={ressert}>reset stats {ressert}</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
