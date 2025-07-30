import React from 'react'
import { State_update_arent_immediate } from './components/State_update_arent_immediate'
import { Conditional_rendering } from './components/Conditional_rendering'
import Updating_object_state from './components/Updating_object_state'
import Object_state_instead_of_multiple_smaller_ones from './components/Object_state_instead_of_multiple_smaller_ones'
import Primitives_vs_non_primitives from './components/Primitives_vs_non_primitives'
import InitializingStateWithObject from './components/InitializingStateWithObject'

const App = () => {
  return (
    <div>
      {/* <State_update_arent_immediate /> */}
      {/* <Conditional_rendering /> */}
      {/* <Updating_object_state/> */}
       {/* <Object_state_instead_of_multiple_smaller_ones/> */}
       {/* <Primitives_vs_non_primitives/> */}
       <InitializingStateWithObject/>
    </div>

  )
}

export default App