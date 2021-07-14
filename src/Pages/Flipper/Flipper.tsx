import React from 'react'
import { useAppSelector } from '../../Hooks/Hooks'

export function Flipper() {

  const name = useAppSelector(state => state.userSlice.Name)


  return (
      <div className="bg-gray-100">
          <h4>Here we go - {name}</h4>
      </div>
  )
}