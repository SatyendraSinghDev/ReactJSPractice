import { useReducer } from "react";

interface IState {
    count: number;
}

const initialValue: IState = { count: 0 };

function reducer(state: IState, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        default:
            return { count: state.count }

    }
}

export function UseReducerHookL12() {
    const [countState, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            Count: {countState.count} <br />
            <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT Count</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT Count</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET Count</button>
        </div>
    );
}