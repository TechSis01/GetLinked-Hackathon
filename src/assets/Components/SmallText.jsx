
function SmallText({smallText,smallTextStyle,smallTextSpan,smallTextSpanStyle}) {
  return (
    <p className={smallTextStyle}>{smallText} <span className={smallTextSpanStyle}>{smallTextSpan}</span></p>
  )
}

export default SmallText