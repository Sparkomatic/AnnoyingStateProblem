import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function AddItem(props) {
    const { width, height, handleOnTap } = props

    return (
        <Frame background="none" size="100%">
            <Frame
                width={width}
                height={height}
                style={{
                    border: "1px solid white",
                    color: "white",
                }}
                onTap={handleOnTap}
            >
                Tap Me To Add Item
            </Frame>
        </Frame>
    )
}

AddItem.defaultProps = {
    height: 50,
    width: 150,
    handleOnTap: (item) => null,
}

addPropertyControls(AddItem, {})
