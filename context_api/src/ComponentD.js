import React, { useContext } from 'react'
import { Name } from './App'
const ComponentD = () => {
    const name = useContext(Name)

  return (
    <div>
        ComponentD
        <h1>{name}</h1>
    </div>
  )
}

export default ComponentD