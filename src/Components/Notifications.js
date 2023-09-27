import React, { useState } from 'react'

export const Notifications = ({result,children}) => {

    const[show,setShow]=useState(true);

  return (
    <div className={show?"":"hidden"}>
        <div className={`box ${result}`}>
            {children}
        </div>
    <button onClick={()=>setShow(!show)} className="trigger">Hide</button>
    </div>
  )
} 