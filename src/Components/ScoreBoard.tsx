import React from 'react'
import { useAppSelector } from '../Hooks/Hooks'
import { translate as t } from '../Services/Translations'

export function ScoreBoard() {

  const name = useAppSelector(state => state.userSlice.Name)
  const points = useAppSelector(state => state.userSlice.points)


  return (
      <div className="p-10 flex space-x-4">
          <p>{t("HereWeGo")} - {name}</p>
          <p>{t("YourPoints")}  - {points}</p>
      </div>
  )
}