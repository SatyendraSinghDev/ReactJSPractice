import { createContext, useState } from "react";
import { ChildDisplayName13 } from "./ChildDisplayName13";
import { ChildDisplayRollNoL13 } from "./ChildDisplayRollNoL13";

export interface IUserDetailContext {
    name: string;
    rollNo: number | null;
}

const initialValue = {
    name: '',
    rollNo: null
}

const user = {
    name: "Satty",
    rollNo: 25
}

// Create Context
export const userContext = createContext<IUserDetailContext>(initialValue);

export function UseContextHookL13() {
    const [userDetails, setUserDetails] = useState(user);

    const updateName = (name: string) => {
        setUserDetails({
            ...userDetails,
            name: name
        });
    }

    return (
        // apna context create kiya or usme value apni pass krdi jo as a props kam kr rhi hai or sabhi child component ko yeh available rahegi
        <userContext.Provider value={userDetails}>
            <button onClick={() => { updateName('Riya1') }}>Update Name</button>
            <ChildDisplayName13 />
            <ChildDisplayRollNoL13 />  
            {/* ab is case mein mujhe props pass nahi krne pade hai isme */}
        </userContext.Provider>
    )
}