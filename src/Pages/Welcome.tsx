import React, { useEffect, useState } from 'react'
import { translate as t } from '../Services/Translations'
import { setName, switchLang } from '../Slice/UserSlice'
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
          <p onClick={() => dispatch(switchLang('dk'))}>&#9829;</p>
          <p onClick={() => dispatch(switchLang('en'))}>&#9977;</p>
          <h1>{t("Welcome")}</h1>
          <input onChange={(w) => settempName(w.target.value)}/>
          <button onClick={() => dispatch(setName(tempName))}>{t("GoToGame")}</button>
      </div>
  )
}