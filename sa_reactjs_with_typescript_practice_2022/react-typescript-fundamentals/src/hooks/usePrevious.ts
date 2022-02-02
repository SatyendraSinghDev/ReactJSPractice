import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
    const ref = useRef(value);
    
    useEffect(() => {
        ref.current = value; // previous count ke current mein hum new value addd kr dinge
    }, [value]);

    return ref.current
};
