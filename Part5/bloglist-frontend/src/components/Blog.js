import React,{ useState } from 'react'

const Blog = ({ blog,updateHandler,deleteHandler }) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }
  const showWhenNotVisible = { display: visible ? 'none' : '' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (
    <div style={blogStyle}>
      <div className='blog'>
        {blog.title} - {blog.author}
        <div style={showWhenNotVisible}>
          <button onClick={() => setVisible(!visible)}>View</button>
        </div>
        <div style={showWhenVisible}>
        <button onClick={() => setVisible(!visible)}>hide</button><br/>
          <a href={blog.url}>{blog.url}</a>
          <br />
          {blog.likes} likes
          <button onClick={() => updateHandler(blog)}>like</button>
          <br />
          <br />
          <button onClick={() => deleteHandler(blog)}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
