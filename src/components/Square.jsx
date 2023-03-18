import React from 'react'

export default function Square({children, black}) {
  // if the square is black (square-black) class if not then (square-white)
  const bgClass = black ? "square-black" : "square-white";

  return (
    <div className={`${bgClass} board-square`}>
      {/* displaying all the children here */}
        {children} 
    </div>
  )
}
