import React ,{useContext}from 'react';
import { UserContext } from "./MyContext";
function PersonItem(props) {

    const pers=useContext(UserContext)
    return (
        <div>
            {pers.name} a {pers.age} ans 
        </div>
    );
}

export default PersonItem;