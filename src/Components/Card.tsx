import React from 'react'
import { useAppSelector } from '../Hooks/Hooks'
import { translate as t } from '../Services/Translations'

export function Card() {

    function flipCard(target : HTMLDivElement) {
        target.classList.toggle("hover");
    }

    return (
        <div className="flip-container" onTouchStart={(e) => flipCard(e.currentTarget)}>
            <div className="flipper">
                <div className="card-front">
                    2
                </div>
                <div className="card-back">
                    1
                </div>
            </div>
        </div>
    )
}