// import React, { useEffect, useState } from 'react'

export const Conditional_rendering = ({id}) => {

//   const [someThink,setSomeThink] = useState("ABCD")

//   useEffect(()=>{},[someThink])

 


  return (
    <div className='flex items-center justify-center'>

        {!id ? "no id provided" : {}}
    </div>
  ) 
}
