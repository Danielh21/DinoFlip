import React from 'react'
import { Card } from '../Components/Card'
import { ScoreBoard } from '../Components/ScoreBoard'
import { CardContent, Rex, Camptosaurus, Stegosaurus } from '../Models/CardContent'

export function Game() {

  let Dinosaurs : CardContent[] = shuffle([Rex, Rex, Camptosaurus, Camptosaurus, Stegosaurus, Stegosaurus]);

  function shuffle(array : CardContent[]) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div>
      <ScoreBoard />
      <div className="flex flex-row flex-wrap max-w-5xl gap-20 ml-auto mr-auto">
        {
          Dinosaurs.map( (d =>
            <Card Content={d} />
          ))
        }
      </div>
    </div>
  )
}