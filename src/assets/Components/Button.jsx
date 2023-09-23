import React from 'react'

function Button({buttonText,btnStyle,btnFunction,btnType}) {
  return (
    <button className={btnStyle} onClick={btnFunction} type={btnType}>{buttonText}</button>
  )
}

export default Button