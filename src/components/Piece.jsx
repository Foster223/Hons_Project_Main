import React from 'react'
import { useDrag, DragPreviewImage } from "react-dnd" // use drag hok from react drag and drop

// need thing to move piece
// and drop zone which is the board where the piece is dropped.

// using destructuring for the pieces
export default function Piece({piece: {type, color}, position}) {
  
  const [{ isDragging } , drag, preview] = useDrag({
    item: {type: 'piece', id: `${position}_${type}_${color}`},
    type: 'piece',
    collect: (monitor) => {
      return {isDragging: !!monitor.isDragging()}
    }
  })

      // id is = ${type}_${color}.png(identifier of item)

      const pieceImg = require(`../assets/${type}_${color}.png`);
    // path to image will be pieceImg
  return (
    // class for containing the piece and class for piece itself
    <>
    <DragPreviewImage connect={preview} src={pieceImg}/>

    <div className='piece-container' ref={drag} style={{opacity: isDragging ? 0 : 1}}>
      <img src={pieceImg} alt="" className='piece' />
    </div>
    </>
  )
}

// {piece.type}


// talk about how isDragging() works