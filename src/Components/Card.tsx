import React from 'react'
import { useAppSelector } from '../Hooks/Hooks'
import { translate as t } from '../Services/Translations'
import { CardContent } from '../Models/CardContent';

interface CardProps {
    Content : CardContent
}

export function Card({Content} : CardProps) {

    function flipCard(target : HTMLDivElement) {
        target.classList.toggle("hover");
    }

    let cssCardBackground = Content.cssClass;
    let backgroundCss = `card-back ${cssCardBackground}`;

    return (
        <div className="flip-container" onClick={(e) => flipCard(e.currentTarget)} onTouchStart={(e) => flipCard(e.currentTarget)}>
            <div className="flipper">
                <div className="card-front">
                    
                </div>
                <div className={backgroundCss}>
                    {Content.name} - {Content.key}
                </div>
            </div>
        </div>
    )
}