
import { useContext, useEffect, useState } from "react"
import { MazeContext } from "./context/mazeContext";
import { SessionContext } from "./context/sessionContext";

export default function Rim() {
    const mazeData = useContext(MazeContext);
    const sessionContext = useContext(SessionContext);

    const [color, setColor] = useState("white")
    if (sessionContext && mazeData && mazeData.rows && mazeData.rows[0]) {
        useEffect(() => {
            if (sessionContext.blockStack.length > 0) {
                if (sessionContext.blockStack[sessionContext.blockStack.length - 1] == "0") {
                    setColor(mazeData.outside_color)
                }
                else {
                    for (const [block_name, block] of Object.entries(mazeData.blocks)) {
                        if (block && block_name == sessionContext.blockStack[sessionContext.blockStack.length - 1]) {
                            setColor(block.color)
                            break
                        }
                    }
                }
            }
        }, [sessionContext])

        return (
            <div style={{ position: "absolute", border: mazeData.tile_size / 4 + "px solid " + color, width: mazeData.tile_size * (mazeData.rows[0].length / 2 + 1 / 2), height: mazeData.tile_size * (mazeData.rows.length + 1 / 2), zIndex: 2 }}></div>
        )
    }
    return (<></>)
}