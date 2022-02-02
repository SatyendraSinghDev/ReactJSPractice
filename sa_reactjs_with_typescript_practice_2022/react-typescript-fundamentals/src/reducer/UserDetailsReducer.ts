import axios from 'axios';

export interface IUserDetails {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface IUserState {
    user: IUserDetails[];  // array of User rahega
    isUserLogin?: boolean;  // user login hai ya nahi uske liye
}

export enum UserStateReducerConstant {
    userDetails = 'userDetails',   // contstant values
    userLogin = 'userLogin',
}

//  Generic Type ka action rahega
export interface IAction<T, P> {
    type: T;
    payload?: Partial<P>;  // Partial means jitni bhi is payload mein value hogi wo optional rahegi
}

//  Action or payload humar kis type ka rahega, payload means state kis type ki rahegi
export type IActionType = IAction<UserStateReducerConstant, IUserState>;

// dispatch method humara kis type ka hoga
export type IUserStateReducerDispatchType = (value: IActionType) => void;

// state mein humari default value kis type ki rahegi
export const initialIUserState: IUserState = {
    user: [],
    isUserLogin: false,
};

// create our Reducer
export const userStateReducer = (state: IUserState, action: IActionType) => {
    switch (action.type) {
        case UserStateReducerConstant.userDetails: {
            return { ...state, user: action?.payload?.user || [] };  // agar user nahi hota hai undefined rhta hai toh empty value ajyegi meri
        }
        case UserStateReducerConstant.userLogin: {
            return { ...state, isUserLogin: action?.payload?.isUserLogin };
        }
        default: {
            return state;
        }
    }
};

// call API
const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Data fast ayega isliye slow aye tora
    return axios.get(`https://reqres.in/api/users`).then((res) => res?.data?.data ?? []);
};

// fetch data through backend
export const fetchUserDetails = async (dispatch: IUserStateReducerDispatchType) => {
    const userDe = await fetchUsers(); 

    // is type mein jaye or payload user jaye
    dispatch({ type: UserStateReducerConstant.userDetails, payload: { user: userDe } });
};

// To check user login hai ya nahi
export const updateUserLogin = (dispatch: IUserStateReducerDispatchType, isUserLogin: boolean) => {
    dispatch({ type: UserStateReducerConstant.userLogin, payload: { isUserLogin: isUserLogin } });
};