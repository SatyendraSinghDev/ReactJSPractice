import { useEffect, useRef, useState } from "react";
import { usePrevious } from "./hooks/usePrevious";

// Example1: with useRef
export function UseRefHookExL11() {
    const nameInputRef = useRef<HTMLInputElement>(null);  // initial value mangta t= hai yeh
    const [count, setCount] = useState(0);
    
    // const previousCount = useRef(0);
    // useEffect(() => {
    //     previousCount.current = count; // previous count ke current mein hum new value addd kr dinge
    // });

    const previousCount = usePrevious(count);

    const onSubmit = () => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
            console.log(' nameInputRef ', nameInputRef, nameInputRef.current.value);
        }
    }

    return (
        <div>
            Count Value with useState: {count} <br />
            {/* Previous Count value with useRef: {previousCount.current} <br /> */}
            Previous Count value with useRef: {previousCount} <br />
            <button onClick={() => { setCount(count + 1) }}>Increment Count</button>
            <input ref={nameInputRef} name="nameInput" value="Satty" />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}