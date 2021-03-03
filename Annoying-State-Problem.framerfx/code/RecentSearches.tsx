import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function RecentSearches(props) {
    const {
        height,
        width,
        recentSearches,
        handleOnTapSearchItem,
        onTap,
        ...rest
    } = props

    return (
        <Frame height={"auto"} width={"auto"} style={{}} onTap={onTap}>
            {recentSearches.map((item) => (
                <Frame
                    width={350}
                    height={50}
                    position={"static"}
                    style={{ border: "1px solid white", fontSize: 12 }}
                >
                    <h1>
                        Title: {item.title}, Id: {item.searchId}
                    </h1>
                </Frame>
            ))}
        </Frame>
    )
}

RecentSearches.defaultProps = {
    height: 200,
    width: 200,
    recentSearches: [
        { title: "search 1", searchId: 1 },
        { title: "search 2", searchId: 2 },
    ],
    handleOnTapSearchItem: () => null,
}
