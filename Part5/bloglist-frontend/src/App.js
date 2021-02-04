import React, { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import CreateUser from './components/CreateUser'
import Togglable from './components/Togglable'


const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user, setUser] = useState(null)
  const [author,setAuthor]=useState('')
  const [title,setTitle]=useState('')
  const [url,setUrl]=useState('')


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  
  const deconnectUser=()=>{
    const loggedUserJSON = window.localStorage.removeItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }
  useEffect(deconnectUser,[])
 
  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleName=(event)=>{
    setUsername(event.target.value)
  }

  const handlePasse=(event)=>{
    setPassword(event.target.value)
  }

  const loginForm = () => (
    <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={handleName}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={handlePasse}
        
        />
      </div>
      <button type="submit">login</button>
    </form>      
      </div>
  )

    const addBlog = (event) =>{
      event.preventDefault()
      
      const newObject={
        title:title,
        author:author,
        url:url

      }

      blogService
      .create(newObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
       setTitle('')
        setUrl('')
        setAuthor('')
      })

    }


  const handleAuthor=(event)=>{
    setAuthor(event.target.value)
  }

  const handleTitle=(event)=>{
    setTitle(event.target.value)
  }


  const handleUrl=(event)=>{
    setUrl(event.target.value)
  }


  const updateBlog = (blog) => { //didnt use async as exercise
    blogService.like(blog).then(
      (updateBlog) => {
        updateBlog.user = {
          name: user.name
        }
        const updatedBlogs = blogs.filter(b => b.id !== blog.id)
          .concat(updateBlog)
          .sort((a, b) => b.likes - a.likes)
        setBlogs(updatedBlogs)
      })
  }
  const deleteBlog = async (blog) => {
    if(window.confirm('delete this blog?')){
      console.log(blog,' deleted')
      await blogService.deleteBlog(blog)
      const updatedBlogs = blogs
        .filter(b => b.id !== blog.id)
      setBlogs(updatedBlogs)
      setErrorMessage(`deleted: The blog ${blog.title} by ${blog.author} has been deleted`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }

  } 
 


const blogForm=()=>(
  <div>
    <Togglable>
    <CreateUser
    handleAuthor={handleAuthor}
    handleTitle={handleTitle}
    handleUrl={handleUrl}
    addBlog={addBlog}
    valAut={author}
    valTitre={title}
    valUrl={url}
    />
  </Togglable>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} 
        updateHandler={updateBlog}
        deleteHandler={deleteBlog}
        />
      )}
  
  </div> 
  
)
  



  return (
    <div>
       <Notification message={errorMessage}/> 
    {
      user===null? loginForm():  <div><h2>blogs</h2> <p>{user.name} logged-in <button onClick={deconnectUser}>logout</button> </p> {blogForm()}</div> 
    }

      
    </div>
  )
}

export default App