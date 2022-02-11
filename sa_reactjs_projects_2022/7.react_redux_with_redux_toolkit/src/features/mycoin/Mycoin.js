import { useSelector } from "react-redux"

function Mycoin() {
 const coin = useSelector((state) => state.myCounter.myCount)
 const themeTextColor = useSelector((state) => state.myTheme.color)
 return (
  <div className="counter-wrapper">
   <span className="value" style={{ color: themeTextColor }}>Coin: {coin}</span>
  </div>
 )
}

export default Mycoin