import { useCallback, useState, useEffect, useMemo } from "react"

export const useArrayHook = (initial) => {
    console.log("in useArrayHook")
    const [array, setArray] = useState(initial)

    const addItem = (newItem) => {
        setArray([...array, newItem])
        // setArray((value) => [...value, newItem])
        console.log(
            "in useArrayHook addItem function and array is now: " +
                JSON.stringify(array)
        )
    }
    return {
        array,
        setArray,
        addItem,
    }
}
