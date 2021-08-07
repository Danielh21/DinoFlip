import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../Hooks/Hooks'
import { addToPoints } from '../Slice/UserSlice';
import { translate as t } from '../Services/Translations'
import { CardContent } from '../Models/CardContent';
import { firstCardSelected, secondCardSelected  } from '../Slice/GameSlice';

interface CardProps {
    Content : CardContent,
    index : number
}

export function Card({Content, index} : CardProps) {

    let firstSelectedContent = useAppSelector( state => state.GameSlice.firstCardFlipped);
    let secondSelectedContent = useAppSelector( state => state.GameSlice.secondCardFlipped);
    let twoCardsFlipped = useAppSelector( state => state.GameSlice.twoCardsFlipped);
    const cardContainer = useRef(null);

    const dispatch = useAppDispatch();
    const [isMatched, setMatched] = useState(false);
    const [isFlipped, setFliped] = useState(false);
    
    function flipCard(target : HTMLDivElement) {
        if(isMatched || firstSelectedContent?.index === index) {
            return;
        }
        target.classList.toggle("flipme");
        setFliped(true);
            if(firstSelectedContent == null) {
                dispatch(firstCardSelected({ selectedIdentifier : Content.identifier, index: index}));
            }
            else {
                dispatch(secondCardSelected({ selectedIdentifier : Content.identifier, index: index}));
            }
        if(firstSelectedContent?.selectedIdentifier === Content.identifier) {
            dispatch(addToPoints(100));
        }
    }

    function flipCardBack(target : any) {
        target.current.classList.toggle("flipme");
    }
    



    let cssCardBackground = Content.cssClass;
    let backgroundCss = `card-back ${cssCardBackground}`;

    return (
        <div className="flip-container" ref={cardContainer} onClick={(e) => flipCard(e.currentTarget)} onTouchStart={(e) => flipCard(e.currentTarget)}>
            <div className="flipper">
                <div className="card-front">
                    
                </div>
                <div className={backgroundCss}>
                    {Content.name} - {Content.identifier}
                </div>
            </div>
        </div>
    )
}