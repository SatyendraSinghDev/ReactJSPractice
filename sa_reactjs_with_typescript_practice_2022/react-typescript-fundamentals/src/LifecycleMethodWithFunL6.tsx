import { useState, useEffect } from "react";

export interface IProps {
    initialvalue: number;
}

export interface IState {
 count: number;
 hideComponent: boolean;
}

export function LifecycleMethodWithFunL6 (props: IProps) {
    const [count, setCount] = useState(props.initialvalue);

    const setCountValue = () => {
        setCount(count+1);
    }

    // only one time call krni ho useEffect toh array ko empty pass krdo, and will just like as componentDidMount
    useEffect(()=>{
        console.log("only one time useEffect");
        setCount(count+1);
    },[]);

    // useEffect jab call ho jab count ki value change ho and will just like as componentDidUpdate
    useEffect(()=>{
        console.log("useEffect call only when count value gets changed");
    },[count]); // We can be pass multiple dependecies here

    // useEffect humesha called hota rahe, 
    useEffect(()=>{
        console.log("useEffect called at every time");
    });

    // cleaning phase, isme yeh return mein humeshe fun leta hai
    useEffect(()=>{ // isme previous one clean ho jaygi or new one create ho jygi yeh kehta hai react mein yeh hook
        console.log("useEffect call only when count value gets changed");
        return () => {
            console.log("useEffect cleanup phase")
        }
    },[count])

    return(
        <div>
        Count With Function component: {count}
        <button onClick={setCountValue}>Increment Value</button>
        {/* {!hideComponent && <Information />} */}
    </div>
    )
}