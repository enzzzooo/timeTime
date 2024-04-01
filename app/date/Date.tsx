'use client'
import { useState } from 'react';
// "hooks should only go in Components (with a capital leter), not in page"


export default function Date() {
// query
            function getDate() {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const date = today.getDate();
                return `${month}/${date}/${year}`;
            }
    // default
        const [currentDate, setCurrentDate] = useState(getDate());
    // click
        function click(){
            setCurrentDate(getDate());
        }
  return (
// display
    <div onClick={click}>{currentDate}</div>
  );
}