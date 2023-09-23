function Text({text,textStyle,spanText,spanTextStyle}) {
  return (
    <h1 className={textStyle}>{text} <span className={spanTextStyle}>{spanText}</span></h1>
  )
}

export default Text