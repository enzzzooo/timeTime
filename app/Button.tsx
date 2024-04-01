'use client';
import {useState, useEffect} from 'react';
export default function Button(){
    // Specify the type of 'time' as 'string' and provide an initial value
    const [time, setTime] = useState(new Date().toLocaleTimeString()); 
    
    // need to use client to render the time, cus react 'hydrates' or waits for component 
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    function click(){
        setTime(new Date().toLocaleTimeString());
    }
    
    return(
        // /30 makes the font 30% of original opacity
        // flex justify center (centering)
    <div className="flex justify-center size text-4xl text-black hover:text-blue-600/50" onClick={click}>{isClient && time}</div>
    ) 
    // onClick is react version of onclick
}