import React, { useState } from 'react'

export const State_update_arent_immediate = () => {
 
const [count, setCount] = useState(0)

///You might expect count to go up by 3 — but React batches these updates and treats them all as if you're
// const handleClick = () => {
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
// }

//setCount(count + 1) x 3 === Add only one times

//So all three lines use the same count value (from before any update), leading to count + 1 being set three times, but they all compute the same value, resulting in a +1, not +3.


///how we fix that 


const handleClick = () => {
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
}

//setCount(prev => prev + 1) x 3 ==== It well add 3 time

  return (
    <div className='flex flex-col items-center m-10 gap-3 justify-center'>
       <button className='px-5 py-4 font-bold bg-blue-500 rounded-2xl  '
       onClick={handleClick}
       >
        click me
       </button>
      <p className='font-bold'>Count is: {count} </p>

    </div>
  )
}
