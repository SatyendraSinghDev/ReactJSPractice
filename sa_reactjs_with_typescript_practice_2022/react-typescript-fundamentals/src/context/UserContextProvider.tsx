import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { IActionType, initialIUserState, IUserState, userStateReducer } from "../reducer/UserDetailsReducer";

interface IProps {
    children: ReactNode;
}

//  we keep to this in the context ek user ki info or ek dispatch Method 
interface IUserContext {
    userInfo: IUserState;
    dispatch: Dispatch<IActionType>
};

// Initial Value kya rahegi meri
export const initialUserContext: IUserContext = { userInfo: { user: [] }, dispatch: () => null };

// Create our context
export const UserContext = createContext(initialUserContext);

// Create our custom hook
export const useUserContext = (): IUserContext => useContext(UserContext);

// Create Provider, iske through hi humari value ange sabhi component ko provide hongi
export function UserContextProvider(props: IProps) {
    // pass here reducer or initial value
    const [userInfo, dispatch] = useReducer(userStateReducer, initialIUserState);

    return (
        <UserContext.Provider value={{ userInfo, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}