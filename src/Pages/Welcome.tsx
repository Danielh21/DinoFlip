import React, { useEffect, useState } from 'react'
import d from '../Assets/denmark.svg'
import e from '../Assets/united-kingdom.svg'
import { translate as t } from '../Services/Translations'
import { setName, switchLang } from '../Slice/UserSlice'
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks'
import { useHistory } from "react-router-dom";

export function Welcome() {

    const isSubmitted = useAppSelector(state => state.userSlice.isSet);
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        if (isSubmitted) {
            history.push("/game")
        }
    });


    const [tempName, settempName] = useState("null");

    return (
        <div className="flex flex-col items-center content-center pt-28">
            <div className="flex p-10">
                <img className="w-10 mr-6" src={d} alt="ge" onClick={() => dispatch(switchLang('dk'))}/>
                <img className="w-10 ml-6" src={e} alt="ge" onClick={() => dispatch(switchLang('en'))}/>
            </div>
            <div className="flex flex-col align-middle text-center">
                <h1 className="m-5 ">{t("Welcome")}</h1>
                <h4 className="m-5 ">{t("EnterName")}</h4>
                <input className="m-5 h-6" onChange={(w) => settempName(w.target.value)} />
                <button className="m-5" onClick={() => dispatch(setName(tempName))}>{t("GoToGame")}</button>
            </div>
        </div>
    )
}