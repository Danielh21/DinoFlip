import React, { useEffect, useState } from 'react'
import { setName } from './../Slice/UserSlice'
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks'
import { useHistory } from "react-router-dom";

export function Welcome() {
    
    const isSubmitted = useAppSelector(state => state.userSlice.isSet);
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        if(isSubmitted){
            history.push("/game")
        }
    });


    const [tempName, settempName] = useState("null");

  return (
      <div>
          <input onChange={(w) => settempName(w.target.value)}/>
          <button onClick={() => dispatch(setName(tempName))}>Go to game</button>
      </div>
  )
}