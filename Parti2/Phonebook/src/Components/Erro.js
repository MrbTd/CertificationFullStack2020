import React, { useState } from 'react'
const Erro = ({error}) => {
   if(error===null)
   {
       return null
   }
    return(
    <div>
   
        <div className="error"> 
            {error}
        </div>
            
    </div>
    )
}
export default Erro
