import React from 'react'
import ComA from './ComA'

// without context use ke hum koi info ya data ko dusre component per send krna h to sare child se data pass krna hoga c -> se -> app ,m data chiye to phele : C -> B -> A -> App m jayega.

function WithoutContext() {
  return (
    <div>WithoutContext
          <ComA/>
    </div>
  )
}

export default WithoutContext