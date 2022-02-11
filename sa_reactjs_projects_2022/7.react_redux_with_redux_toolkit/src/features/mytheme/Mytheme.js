import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./mythemeSlice"

const Mytheme = () => {
 const [color, setColor] = useState("white"); // set local state
 const dispatch = useDispatch()
 return (
  <div className="theme-wrapper">
   <input className="textbox" type="text" onChange={(e) => setColor(e.target.value)} />
   <button className="button" onClick={() => { dispatch(changeTextColor(color)) }}>Change Text Color</button>
  </div>
 )
}

export default Mytheme