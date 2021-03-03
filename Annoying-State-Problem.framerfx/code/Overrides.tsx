import { Override, Data, Color } from "framer"
import { useArrayHook } from "./ArrayHook"

//note that data.recentSearches will need to be shared across other components via overrides
const data = Data({
    recentSearches: [{ title: "search A", searchId: 1 }],
})

export function RecentSearches(): Override {
    return {
        recentSearches: data.recentSearches,
    }
}

export function AddItem(): Override {
    const { array, setArray, addItem } = useArrayHook([
        {
            title: "initial Search item",
            searchId: 0,
        },
    ])

    console.log("add item code hit and array is " + JSON.stringify(array))
    data.recentSearches = array
    return {
        handleOnTap: (item) => {
            addItem({
                title: "Search added",
                searchId: Math.floor(Math.random() * 99),
            })
            data.recentSearches = array
        },
    }
}
