import React from 'react'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useAppSelector, useAppDispatch } from '../../Hooks/Hooks'
import {
    Link
  } from "react-router-dom";

export function Counter() {

    const count = useAppSelector(state => state.counterReducer.value)
    const dispatch = useAppDispatch()

  return (
      <div className="bg-gray-100">
        <button
          aria-label="Increment value"
          className="bg-grey"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(7))}
        >
          Decrement
        </button>

        <Link to="/game">
            Go to game!
        </Link>
      </div>
  )
}