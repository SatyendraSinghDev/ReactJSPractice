import { useContext } from "react";
import { userContext } from "./UseContextHookL13";


export function ChildDisplayRollNoL13() {
    //    use context here with teh help of useContext
    const contextValue = useContext(userContext);

    return <div>User Name:  {contextValue.rollNo}</div>
}