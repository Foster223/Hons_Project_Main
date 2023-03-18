import React, {useEffect, useState} from 'react'
import Square from '../components/Square.jsx'
import Piece from "../components/Piece.jsx"
import {useDrop} from "react-dnd"
//import {move} from "../Game.js"
import {handleMove} from "../Game.js"
import {gameSubject} from "../Game.js"

import Promote from "../components/Promote.jsx"


// recieve a piece
export default function BoardSquare({piece, black, position}) {

  const [promotion, setPromotion] = useState(null)

  const [ , drop] = useDrop({
    accept: 'piece',
    drop: (item) => {
      const [fromPosition] = item.id.split('_')
      handleMove(fromPosition, position, promotion)
    }, 
  })

  useEffect(() => {
    const subscribe = gameSubject.subscribe(({pendingPromotion}) => 
      pendingPromotion && pendingPromotion.to === position ? setPromotion(pendingPromotion) : setPromotion(null)
    )
    return () => subscribe.unsubscribe()
  }, []) 

  return (
  <div className="board-square" ref={drop}>
  <Square black={black}>
    {promotion ? (
      <Promote promotion={promotion} />
    ) : piece ? (
      <Piece piece={piece} position={position} />
    ) : null}
  </Square>
</div>
  )
}
