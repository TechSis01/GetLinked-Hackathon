import React from 'react'

function BlurCircle({blurStyle,circleText}) {
  return (
    <div className={blurStyle}>{circleText}</div>
  )
}

export default BlurCircle