import { useContext, useEffect } from "react";
import { SessionContext } from "./context/sessionContext";
import { MazeContext } from "./context/mazeContext";

export default function Hud({ children }: { children: any }) {
    const sessionContext = useContext(SessionContext);
    const mazeData = useContext(MazeContext);

    if (sessionContext && mazeData) {
        let handleReset = () => {
            sessionContext.blockStack.forEach((_, i) => { setTimeout(() => { sessionContext.setBlockStack(bs => { if (bs.length > 1) { return bs.slice(0, -1) } else { return bs } }) }, 350 * i) })
            sessionContext.setPlayerPos({ row: mazeData.player.row, col: mazeData.player.col })
            sessionContext.setPrevPlayerPos({ row: mazeData.player.row, col: mazeData.player.col })
            sessionContext.setLines({})
            sessionContext.setIsWin(false)
        }

        return (
            (sessionContext && mazeData) &&
            <section style={{ width: mazeData.tile_size * (mazeData.rows[0].length / 2 + 1 / 2) }}>
                {!sessionContext.isWin && <h1 id="hud">Position: {sessionContext.blockStack.join("←")}</h1>}
                {sessionContext.isWin && <h1 id="hud">Congratulations, you {mazeData.trophies.length > 0 ? mazeData.trophies.length > 1 ? "reached one of the goals" : "reached the goal" : "escaped"}!</h1>}
                {children}
                <button id="reset_button" onClick={handleReset}>Reset</button>
            </section>
        )
    }
    return (<></>)
}