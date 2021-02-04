import React from 'react'

const CreateUser = ({
    handleAuthor,
    handleTitle,
    handleUrl,
    addBlog,
    valAut,
    valTitre,
    valUrl
  }) => {

    return(
        <div>
        
        <form >

        <div>
        Title
          <input
          type="text"
          value={valTitre}
          name='title'
          onChange={handleTitle}
        
        />
      </div>


        <div>
        Author
          <input
          type="text"
          value={valAut}
          name="author"
          onChange={handleAuthor}
        
        />
      </div>

      <div>
        URL
          <input
          type="text"
          value={valUrl}
          name="Url"
          onChange={handleUrl}
        />
      </div>
      
      <button onClick={addBlog}>create</button>
    </form>      
      </div>
      
    )
} 
export default CreateUser