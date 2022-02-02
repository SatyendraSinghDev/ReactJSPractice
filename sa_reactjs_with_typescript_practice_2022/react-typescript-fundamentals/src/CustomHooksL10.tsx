//  hooks are used for resuablity

import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useLogger } from "./hooks/useLogger";
import { useToggle } from "./hooks/useToggle";

export function CustomHooksL10() {
    const [state, setState, remove] = useLocalStorage('key1', 'value1');
    const [isToggle, setIsToggle] = useToggle(false);
    useDocumentTitle("title by custom hooks");
    useLogger('CustomHooksL10', 'log with custom hook');
    

    return (
        <div>
            Local Storage Value : {state}
            <div>
                <button onClick={() => { setState("update value") }}>Update Storage Value</button>
            </div>
            <div>
                <button onClick={() => { remove() }}>Remove Storage Value</button>
            </div>

            <div>Toggle hook : {isToggle ? 'true' : 'false'}</div>
            <button onClick={() => { setIsToggle() }}>Update Toogle</button>
        </div>
    );
}