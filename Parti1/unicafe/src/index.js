import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clic,tit}) => {
  
  return(
    <div>
         <button onClick={clic}>  {tit}  </button>
    </div>
  )
}

const Statistic = (props) => {

  const {text,value}=props

  return(
    <div>
        {text} : {value}
    </div>
  )
}

const Statistics = ({vG,vN,vB,isVerif,total,aver,posi}) => {
  if(isVerif===false)
  {
   return <div>No fedback given</div>
  }
  return(
    <div>
      <Statistic text="good" value ={vG} />
      <Statistic text="neutral" value ={vN} />
      <Statistic text="bad" value ={vB} />
      <p>
        all : {total} <br/>
        average : {aver} <br/>
        positive:{posi} %<br/>
      </p>
    </div>
  )
}



const App = () => {

    const [hook,setHook]=useState({hG:0,hN:0,hB:0,verif:false,tb:[]})

    const handleG=()=>{
      const newClicG = { 
        ...hook, 
        hG: hook.hG + 1,
        verif:true,
        tb:hook.tb.concat(hook.hG)
      }
      setHook(newClicG)
    }

    const handleN=()=>{
      const newClicN = { 
        ...hook, 
        hN: hook.hN + 1,
        verif:true,
        tb:hook.tb.concat(hook.hN)
      }
      setHook(newClicN)
    }

    const handleB=()=>{
      const newClicB = { 
        ...hook, 
        hB: hook.hB + 1,
        verif:true,
        tb:hook.tb.concat(hook.hB)
      }
      setHook(newClicB)
    }
    const tab=hook.tb.length
    const average=((hook.hG*1)+(hook.hN*0)+(hook.hB*(-1)))/tab
    const posi=((hook.hG*100))/tab
    return(
      <div>
        
      <Button tit="good" clic={handleG}/>
      <Button tit="neutral" clic={handleN} />
      <Button tit="bad" clic={handleB}/>
      <Statistics vG={hook.hG} vN={hook.hN} vB={hook.hB} isVerif={hook.verif} total={tab}aver={average} posi={posi}/>
      </div>
    )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)