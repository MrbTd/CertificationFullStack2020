import serviceAnec from '../services/anec'
const reducer = (state = [], action) => {

  switch(action.type)
  {
    case 'CREER':
      return [...state, action.data]
    
    case 'INIT':
    return action.data

    case 'VOTE':
      const id = action.data.id
      const voteIncremente = state.find(n => n.id === id)
      const changedVote = { 
        ...voteIncremente, 
        votes:voteIncremente.votes+1
      }

      return state.map(val =>
        val.id !== id ? val : changedVote
      )
      
      
    default:
      return state

  }

}   

export const creatNote = (content) =>{
  return async dispatch => {
    const newNote = await serviceAnec.createNew(content)
    dispatch({
      type: 'CREER',
      data: newNote,
    })
  }

}

export const votage = (id) =>{
  return{
    type:'VOTE',
    data:{id}
  }
}

export const handleInit = (data) =>
{/*
  return{
    type:'INIT',
    data
  }*/
return async dispatch =>{
  const response= await serviceAnec.getAll()
  dispatch({
    type:'INIT',
    data:response
  })
}
  
}

export default reducer