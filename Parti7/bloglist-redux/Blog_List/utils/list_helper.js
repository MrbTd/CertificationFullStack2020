const _ = require('lodash')
const dummy = (blogs) => {
   
    return (blogs.length === 0 ?  1 :  0)
    
  }
  
  
  const totalLikes  = (blogs) => {
    var p
   objBlogs=blogs.map(val =>val.likes)
   
   const reducer = (sum, item) => {
    return sum + item
  }
  
  

   if(objBlogs.length === 0)
  {
      p=0
  }
  else
  {
    p= objBlogs.reduce(reducer, 0) 
  }
  
 return p
}

const favoriteBlog=(blogs)=>{

    const obj =blogs.map(val=>val.likes)
    return obj
}


module.exports = {
    dummy, totalLikes,favoriteBlog
  }