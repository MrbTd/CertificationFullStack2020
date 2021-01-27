import React, { useState } from 'react'
const Notification = ({message}) => {
   if(message=== null )
   {
       return null
   }
    return(
    <div>
       
       <div className="sucess"> 
            {message}
        </div>
        
            
    </div>
    )
}
export default Notification
