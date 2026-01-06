import { useContext } from "react";
import { MazeContext } from "./context/mazeContext";

export default function Block({ name }: { name: string }) {
    const mazeData = useContext(MazeContext);
    if (mazeData && mazeData.blocks[name]) {
        return (
            <div style={{
                backgroundColor: mazeData.blocks[name].color, width: mazeData.blocks[name].width * mazeData.tile_size, height: mazeData.blocks[name].height * mazeData.tile_size, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row", position: "absolute", marginLeft: (mazeData.blocks[name].col + 1 / 4) * mazeData.tile_size, marginTop: (mazeData.blocks[name].row + 1 / 4) * mazeData.tile_size, zIndex: 2
            }}>
                <p>{name}</p>
            </div>
        )
    }
    return (<></>)
}