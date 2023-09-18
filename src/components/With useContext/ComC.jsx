import React from 'react'
import { firtName , lastName } from './WithContext'

function ComC() {
  return (
    <firtName.Consumer>
          {(fname) => {
               return (
                    <lastName.Consumer>
                         {(lname) => <h1>{fname +" "+ lname}</h1>}
                    </lastName.Consumer>
               )
          }}
     </firtName.Consumer>
  )
}

export default ComC