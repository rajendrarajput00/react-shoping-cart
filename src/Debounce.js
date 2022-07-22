
import React, { useEffect } from "react";

export default function TestApp() {

    const debounce = ((cb, dely) => {
        let timer
        return (...args) => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                cb(...args)
            }, dely)
        }
    })
    const handleChange = debounce((e) => {
        console.log('dd', e.target.value);
    }, 1000)

    return (
        <input onChange={handleChange}></input>
    )
}


