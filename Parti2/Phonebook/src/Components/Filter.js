import React, { useState } from 'react'
const Filter = ({recupFilter}) => {
   
    return(
    <div>
       
       <div> 
           Filtrer: <input onChange={recupFilter}/> 
        </div>
            
    </div>
    )
}
export default Filter
