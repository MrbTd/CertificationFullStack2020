import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import Notification from './Components/Notification'
import Erro from './Components/Erro'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import service from './Services/ReqCont'
import index from './index.css'

 
const App = () => {
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [persons, setPersons] = useState([])
  const [suces,setSuces]=useState(null)
  const [error,setError]=useState(null)
 
  const effet=() => {
    service
      .getAll()
      .then(response => {
        setPersons(response)
       
      })
  }
  
  useEffect(effet, [])

  const [filte, setFilte] = useState('')
  const ListFilter=(filte.length===0 ? persons : persons.filter(val=> val.name.includes(filte)))

  const fctSend=(event)=>{
    event.preventDefault()
    const myObject={
      name:newName,
      number:newNum

    }
   
    if(newName=== '' || newNum=== '')
    {
      alert('empty')
    }

    else{
      if(ListFilter.filter(val=>val.name==newName)==''){
             
          service
          .postAll(myObject)
          .then(response=>{setPersons(persons.concat(response))
              setNewNum('')
              setNewName('')
              setSuces("Added "+newName) 
              setInterval(()=>{setSuces(null)},5000) 
          })
          .catch(error => {
            
            console.log(error.response)
          })
               
      }
      else{
      
        const r=window.confirm("the name "+newName+ " Existing of the bd  do you went  Change the Number ???")
        console.log('r',r)
        const idput=  ListFilter.filter(val=>val.name===newName)[0].id
        
         if(r===true){
          const objRech= persons.find(val=>val.id===idput)
          const objModif={ ...objRech, number: newNum}
          service
            .putAlone(idput,objModif)
              .then(result => {
                setPersons(persons.map(val => val.id !== idput ? val : result))
                setNewName('')
                setNewNum('')
                setSuces("Modifid "+newName) 
                setInterval(()=>{setSuces(null)},5000) 
 
              })
              .catch(error => {
                setError("Information of "+newName+" has alrealy been removed from server")
                setPersons(persons.filter(n => n.id !== idput))
                setNewName('')
                setNewNum('')
                setInterval(()=>{setError(null)},5000) 

              })
              
        }
      }
   
     } 
  }
  

  const handleDeleteClick=(id)=>{
    const r= window.confirm("do you went deleted "+newName)
    if(r){
      service
    .deleteAlone(id)
    .then(res =>{effet()
      setSuces("Deleted "+newName) 
      setInterval(()=>{setSuces(null)},5000) 
    })
    .catch()
  }
    
  }

  const recupNumber=(event)=>{
    setNewNum(event.target.value)
  }

  const recupName=(event)=>{
    setNewName(event.target.value)
  }
  const recupFilter=(event)=>{
    setFilte(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Erro error={error}/>
      <Filter  recupFilter={recupFilter}/>
      <Notification message={suces} error={error}/>
      <h3>Add a new</h3>

      <PersonForm 
        fctSend={fctSend}
        recupName={recupName}
        recupNumber={recupNumber}
        vaName={newName}
        valNum={newNum}
      />

      <h3>Numbers</h3>
      
      {ListFilter.map(val=><Persons key={val.name} valeur={val} deleteClick={()=>{handleDeleteClick(val.id)}}/>)}
    </div>
  )
}


export default App