import React,{useState} from 'react'

const Togglable = (props) => {
const [visible, setVisible]=useState(true)

const newNoteAff= { display: visible ? '' : 'none' }

const newNoteCach= { display: visible ? 'none' : '' }

return(
    <div>
        <div style={newNoteAff}>
            <button onClick={()=>{setVisible(false)}}>{visible? 'Create New blog' :''}</button>
        </div >
            
        <div style={newNoteCach}>  
                {props.children}
            <button onClick={()=>{setVisible(true)}}>{visible? '' :'Cancel'}</button> 
        </div>
    </div>
)

}
export default Togglable