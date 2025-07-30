// import React, { useEffect, useState } from 'react'

export const Conditional_rendering = ({id}) => {

//   const [someThink,setSomeThink] = useState("ABCD")

//   useEffect(()=>{},[someThink])

 


  return (
    <div className="flex items-center justify-center h-screen">
      {!id ? "no id provided" : null}
    </div>
  )
}
