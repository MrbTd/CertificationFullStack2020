import React, {useState} from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  const [selected, setSelected] = useState(0)
  const [tab, setTab] = useState (new Array(anecdotes.length).fill(0))
  
  const handleChange = (selected) => {
    const add = [...tab]
    add[selected] = add[selected] + 1
    setTab(add)
  }

  const Click = () => {
    setSelected(selected + 1)
  }
  
  const most = (tab.indexOf(Math.max(...tab)));
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <br />
      <p>{anecdotes[selected]}</p>
      <p>has {tab[selected]} votes </p>
      <br />
      <button onClick={()=>handleChange(selected)}>vote</button>
      <button onClick={Click}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <br />
      <p>{anecdotes[most]}</p>
      <p>has {tab[most]} votes </p>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
