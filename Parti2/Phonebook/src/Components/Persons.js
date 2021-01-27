import React, { useState } from 'react'
const Persons = ({valeur,deleteClick}) => {
   
    return(
    <div>
       {valeur.name} {valeur.number}
       <button onClick={deleteClick}>Delete</button>
    </div>
    )
}
export default Persons
