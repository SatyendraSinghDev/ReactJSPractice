import {useState} from "react";

export function ToggleButtonL3() {
 
//  To manage state react introduce useState hook
const [isChecked, setChecked] = useState(false);
 return (
     <div>
         <input type="checkbox" checked={isChecked} onChange={(e: any) => setChecked(e.target.checked)} />
         Toggle with state management 
     </div>
 )
}