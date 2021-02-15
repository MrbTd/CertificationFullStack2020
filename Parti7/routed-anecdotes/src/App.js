import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link,useParams,useRouteMatch
} from "react-router-dom"





const AnecdoteList = ({ anecdotes ,mess}) => (
  <div>
    <h2>Anecdotes</h2>
    {mess}
    {
      anecdotes.map(val=>
        <Link to={"/anecdotes/"+val.id}><p key={val.id}>{val.content}</p></Link>
      )
    }
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009' target="_blank">Full Stack -websovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js' target="_blank">https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const BTN =({resert})=>{
  return(
    <div>
      <button onClick={resert}>Resert</button>
    </div>
  )
}

const CreateNew = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
  }
  const clea = () =>{
    setContent('')
    setAuthor('')
    setInfo('')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      {props.mess}
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div>
        <button>create</button>
        <BTN resert={clea}/>
      </form>
    </div>
  )

}
const Anecdot =({anecdotes})=>{
  
  return(
    <div>
     
        <h3>{anecdotes.content} by {anecdotes.author}</h3>
        has {anecdotes.votes} votes
    </div>
  )
}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')
  const [add, setAdd] = useState('')
  
  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setAdd("ADDED ")
    setInterval(() => {
      setAdd('')
    }, 5000);

    setNotification('a new anecdote '+anecdote.content+' created!')
    setInterval(() => {
      setNotification('')
    }, 10000);
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  const padding = {
    paddingRight: 5
  }

  const match=useRouteMatch('/anecdotes/:id')
  const anec=match ? anecdotes.find(val=>val.id===Number(match.params.id)):null


  return (
    

      <div>
        <h1>Software anecdotes</h1>
        <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="/create">create new</Link>
            <Link style={padding} to="/about">about</Link>
        </div>
      <Switch>
        <Route path="/about">
            <About />
        </Route>

        <Route path="/create">
           <CreateNew addNew={addNew} mess={add}/>
        </Route>

        <Route path="/anecdotes/:id">
            <Anecdot anecdotes={anec} />
        </Route>

        <Route path="/">
            <AnecdoteList anecdotes={anecdotes} mess={notification}/>
        </Route>
      </Switch>
        <Footer />
      </div>
   
  )
}

export default App;
