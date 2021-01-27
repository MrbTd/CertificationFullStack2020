import React from 'react'


const Course = ({obj1,obj2}) => {
    const objj1=obj1.parts
    const objj2=obj2.parts
    let som1=0
    for(let i in objj1){
        som1 +=objj1[i].exercises
    }

    let som2=0
    for(let j in objj2){
        som2 +=objj2[j].exercises
    }
   
  return (
        <div>
            <div>
                <h3>{obj1.name}</h3>
                {objj1.map(val1=><p key={val1.id}>{val1.name} : {val1.exercises}</p>)}
                <h3>Total of {som1} exercises</h3>
            </div>

            <div>
                <h3>{obj2.name}</h3>
                {objj2.map(val2=><p key={val2.id}>{val2.name} : {val2.exercises}</p>)}
                <h3>Total of {som2} exercises</h3>
            </div>

        </div>
  )
}

export default Course