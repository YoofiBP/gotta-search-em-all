import {useEffect} from "react";

export const useKeyhandler = (eventName:string, handler:any) => {
     useEffect(() => {
        document.addEventListener(eventName, handler);
        return () => {
            document.removeEventListener(eventName, handler);
        };
    }, [handler]);
}


