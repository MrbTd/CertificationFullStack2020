import React,{useContext, useReducer} from 'react';
import PersonItem from './PersonItem'


function Person(props) {
    const initiale=0
    const reducer=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1;

            case 'decrement':
                return state-1;
            
            case 'zero':
                    return initiale;
            
            default: return state
        }


    }

     const [count ,dispatch]  = useReducer(reducer,initiale)
     console.log(count)
    return (
        <div >
            <h1 style={{textAlign:'center'}}>
                {count}
            </h1>
            <div style={{position:'absolute' ,right:880}} >
            <button onClick={()=>dispatch('increment')}>+</button>
            <button onClick={()=>dispatch('decrement')}>-</button>
            <button onClick={()=>dispatch('zero')}>0</button>
            </div>
        </div>
    );
}

export default Person;