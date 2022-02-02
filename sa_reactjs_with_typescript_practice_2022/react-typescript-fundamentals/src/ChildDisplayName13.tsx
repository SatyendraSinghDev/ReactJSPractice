import { useContext } from "react";
import { userContext } from "./UseContextHookL13";


export function ChildDisplayName13() {
    //    use context here with teh help of useContext
    const contextValue = useContext(userContext);

    return <div>User RollNo:  {contextValue.name}</div>
}