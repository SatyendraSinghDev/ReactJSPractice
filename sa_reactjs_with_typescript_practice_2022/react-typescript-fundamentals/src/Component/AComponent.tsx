import { useUserContext } from "../context/UserContextProvider";

export function AComponent() {
    const { userInfo: { isUserLogin } } = useUserContext();
    console.log('AComponent isUserLogin', isUserLogin);  // yeh mera component undefined dega or na re render hoga
    return (
        <div>
            {isUserLogin ? 'Hello Anuj' : 'Guest User'} { ' '}
        </div>
    )
}