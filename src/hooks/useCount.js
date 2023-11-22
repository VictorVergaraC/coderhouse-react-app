import { useState } from "react"

export const useCount = (initial = 0) => {

    const [count, setCount] = useState(initial);

    const increment = () => setCount(count + 1)

    const decrement = () => setCount(count > initial ? count - 1 : count) 

    const reset = () => setCount(initial)

    return {
        count,
        increment,
        decrement,
        reset
    }
}