import React, { useState } from 'react'
const PersonForm = ({fctSend,recupName,recupNumber,vaName,valNum,myFunction}) => {
    
    return(
    <div>
        <form onSubmit={fctSend}>
            <div>name: <input  onChange={recupName} value={vaName} placeholder="enter a name of length >3"/></div>
            <div>number: <input onChange={recupNumber} value={valNum} placeholder="enter a num of length >8"/></div>
            <div><button type="submit" >Add</button></div>
      </form>
    </div>
    )
}
export default PersonForm
