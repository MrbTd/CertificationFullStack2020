import axios from 'axios'
const url='http://localhost:3001/anecdote'

const getAll = async () =>{

 const response=  await  axios.get(url)
 return response.data
}

const createNew = async (content) => {
    
    const object = {content,votes:0}
    const response = await axios.post(url, object)
    return response.data
  }

export default {getAll,createNew}