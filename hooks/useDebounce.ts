import { useEffect, useRef } from "react";


export default function useDebounce(callback: (...args: any[]) => void, delay = 500) {
    const timeRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
        }
    }, []);

    const debouncedCallback = (...args: any) => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }

    return debouncedCallback;

}