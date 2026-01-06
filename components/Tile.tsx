import { useContext, useEffect, useState } from "react"
import { MazeContext } from "./context/mazeContext";
import { SessionContext } from "./context/sessionContext";

export default function Tile({ row, col }: { row: number, col: number }) {
    const mazeData = useContext(MazeContext);
    const sessionContext = useContext(SessionContext)

    if (mazeData && sessionContext) {

        const [isActive, setIsActive] = useState(false);
        const [previousPos, setPreviousPos] = useState({ row: 0, col: 0 });

        const [showLineW, setShowLineW] = useState(false);
        const [showLineS, setShowLineS] = useState(false);
        const [showLineE, setShowLineE] = useState(false);
        const [showLineN, setShowLineN] = useState(false);

        const [oldStack, setOldStack] = useState("0");
        const [lineCache, setLineCache] = useState<NodeJS.Dict<{ w: boolean, s: boolean, e: boolean, n: boolean }>>({});

        useEffect(() => {
            setOldStack("0")
            setLineCache({ "0": { w: false, s: false, e: false, n: false } })
        }, [mazeData])

        const type = parseInt(mazeData.rows[row].slice(2 * col, 2 * col + 2))

        const teleporters = (mazeData.teleporters[row] && mazeData.teleporters[row][col]) ? mazeData.teleporters[row][col] : { signature: 0, reach: {} }

        let links = 0
        if (mazeData.links[row] && mazeData.links[row][col]) {
            mazeData.links[row][col].forEach(link => {
                const exit = mazeData.exits[link.exit]?.orientation
                if (exit == 1) {
                    links |= 4
                }
                else if (exit == 2) {
                    links |= 8
                }
                else if (exit == 4) {
                    links |= 1
                }
                else if (exit == 8) {
                    links |= 2
                }
            })
        }

        let exits = 0
        for (const [exitName, exit] of Object.entries(mazeData.exits)) {
            const stackLength = sessionContext.blockStack.length
            const currentBlock = sessionContext.blockStack[stackLength - 1]
            if ((stackLength == 1 && mazeData.trophies.length == 0 || stackLength > 1 && mazeData.blocks[currentBlock] && mazeData.blocks[currentBlock].exits[exitName]) && exit && exit.row == row && exit.col == col) {
                exits |= exit.orientation
            }
        }

        const isStartingPosition = (mazeData.player.row == row && mazeData.player.col == col)

        let isTrophy = false
        for (const trophy of mazeData.trophies) {
            if (trophy.row == row && trophy.col == col) {
                isTrophy = true
                break
            }
        }

        const pathW = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 4, height: mazeData.tile_size / 2, position: "absolute", marginLeft: 0, marginTop: 1 / 4 * mazeData.tile_size }}></div>
        const pathS = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 4, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: 3 / 4 * mazeData.tile_size }}></div>
        const pathE = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 4, height: mazeData.tile_size / 2, position: "absolute", marginLeft: 3 / 4 * mazeData.tile_size, marginTop: 1 / 4 * mazeData.tile_size }}></div>
        const pathN = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 4, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: 0 }}></div>

        const teleporterW = <div style={{ background: "linear-gradient(to left, " + mazeData.path_color + ", oklch(from " + mazeData.path_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const teleporterS = <div style={{ background: "linear-gradient(to bottom, " + mazeData.path_color + ", oklch(from " + mazeData.path_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: 3 / 4 * mazeData.tile_size, zIndex: 2 }}></div>
        const teleporterE = <div style={{ background: "linear-gradient(to right, " + mazeData.path_color + ", oklch(from " + mazeData.path_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: 3 / 4 * mazeData.tile_size, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const teleporterN = <div style={{ background: "linear-gradient(to top, " + mazeData.path_color + ", oklch(from " + mazeData.path_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: -mazeData.tile_size / 4, zIndex: 2 }}></div>

        const linkW = <div style={{ background: "linear-gradient(to left, " + mazeData.path_color + ", rgb(from " + mazeData.path_color + " r g b / 0))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const linkS = <div style={{ background: "linear-gradient(to bottom, " + mazeData.path_color + ", rgb(from " + mazeData.path_color + " r g b / 0))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: 3 / 4 * mazeData.tile_size, zIndex: 2 }}></div>
        const linkE = <div style={{ background: "linear-gradient(to right, " + mazeData.path_color + ", rgb(from " + mazeData.path_color + " r g b / 0))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: 3 / 4 * mazeData.tile_size, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const linkN = <div style={{ background: "linear-gradient(to top, " + mazeData.path_color + ", rgb(from " + mazeData.path_color + " r g b / 0))", width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: -mazeData.tile_size / 4, zIndex: 2 }}></div>

        const exitW = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const exitS = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: 3 / 4 * mazeData.tile_size, zIndex: 2 }}></div>
        const exitE = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: 3 / 4 * mazeData.tile_size, marginTop: mazeData.tile_size / 4, zIndex: 2 }}></div>
        const exitN = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: -mazeData.tile_size / 4, zIndex: 2 }}></div>

        const central_path = <div style={{ background: mazeData.path_color, width: mazeData.tile_size / 2, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 4, marginTop: mazeData.tile_size / 4 }}></div>

        const roundTileRatio = 1
        const roundTile = <div style={{ background: mazeData.path_color, width: mazeData.tile_size * roundTileRatio, height: mazeData.tile_size * roundTileRatio, position: "absolute", borderRadius: mazeData.tile_size * roundTileRatio / 2, marginLeft: mazeData.tile_size * (1 - roundTileRatio) / 2, marginTop: mazeData.tile_size * (1 - roundTileRatio) / 2 }}></div>

        const lineW = <div style={{ background: mazeData.line_color, width: mazeData.tile_size / 2, height: 1, position: "absolute", marginLeft: 0, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineS = <div style={{ background: mazeData.line_color, width: 1, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineE = <div style={{ background: mazeData.line_color, width: mazeData.tile_size / 2, height: 1, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineN = <div style={{ background: mazeData.line_color, width: 1, height: mazeData.tile_size / 2, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: 0, zIndex: 3 }}></div>

        const lineTeleporterW = <div style={{ background: "linear-gradient(to left, " + mazeData.line_color + ", oklch(from " + mazeData.line_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineTeleporterS = <div style={{ background: "linear-gradient(to bottom, " + mazeData.line_color + ", oklch(from " + mazeData.line_color + " clamp(0, l - 0.2, 1) c h))", width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineTeleporterE = <div style={{ background: "linear-gradient(to right, " + mazeData.line_color + ", oklch(from " + mazeData.line_color + " clamp(0, l - 0.2, 1) c h))", width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineTeleporterN = <div style={{ background: "linear-gradient(to top, " + mazeData.line_color + ", oklch(from " + mazeData.line_color + " clamp(0, l - 0.2, 1) c h))", width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: -mazeData.tile_size / 4, zIndex: 3 }}></div>

        const lineLinkW = <div style={{ background: "linear-gradient(to left, " + mazeData.line_color + ", rgb(from " + mazeData.line_color + " r g b / 0))", width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineLinkS = <div style={{ background: "linear-gradient(to bottom, " + mazeData.line_color + ", rgb(from " + mazeData.line_color + " r g b / 0))", width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineLinkE = <div style={{ background: "linear-gradient(to right, " + mazeData.line_color + ", rgb(from " + mazeData.line_color + " r g b / 0))", width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineLinkN = <div style={{ background: "linear-gradient(to top, " + mazeData.line_color + ", rgb(from " + mazeData.line_color + " r g b / 0))", width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: -mazeData.tile_size / 4, zIndex: 3 }}></div>

        const lineExitW = <div style={{ background: mazeData.line_color, width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: -mazeData.tile_size / 4, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineExitS = <div style={{ background: mazeData.line_color, width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineExitE = <div style={{ background: mazeData.line_color, width: mazeData.tile_size * 3 / 4, height: 1, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: mazeData.tile_size / 2, zIndex: 3 }}></div>
        const lineExitN = <div style={{ background: mazeData.line_color, width: 1, height: mazeData.tile_size * 3 / 4, position: "absolute", marginLeft: mazeData.tile_size / 2, marginTop: -mazeData.tile_size / 4, zIndex: 3 }}></div>

        const defaultLineW = (type & 1) != 0 ? lineW : (teleporters.signature & 1) != 0 ? lineTeleporterW : (links & 1) != 0 ? lineLinkW : (exits & 1) != 0 ? lineExitW : null
        const defaultLineS = (type & 2) != 0 ? lineS : (teleporters.signature & 2) != 0 ? lineTeleporterS : (links & 2) != 0 ? lineLinkS : (exits & 2) != 0 ? lineExitS : null
        const defaultLineE = (type & 4) != 0 ? lineE : (teleporters.signature & 4) != 0 ? lineTeleporterE : (links & 4) != 0 ? lineLinkE : (exits & 4) != 0 ? lineExitE : null
        const defaultLineN = (type & 8) != 0 ? lineN : (teleporters.signature & 8) != 0 ? lineTeleporterN : (links & 8) != 0 ? lineLinkN : (exits & 8) != 0 ? lineExitN : null

        const defaultPathW = (type & 1) != 0 ? pathW : (teleporters.signature & 1) != 0 ? teleporterW : (links & 1) != 0 ? linkW : (exits & 1) != 0 ? exitW : null
        const defaultPathS = (type & 2) != 0 ? pathS : (teleporters.signature & 2) != 0 ? teleporterS : (links & 2) != 0 ? linkS : (exits & 2) != 0 ? exitS : null
        const defaultPathE = (type & 4) != 0 ? pathE : (teleporters.signature & 4) != 0 ? teleporterE : (links & 4) != 0 ? linkE : (exits & 4) != 0 ? exitE : null
        const defaultPathN = (type & 8) != 0 ? pathN : (teleporters.signature & 8) != 0 ? teleporterN : (links & 8) != 0 ? linkN : (exits & 8) != 0 ? exitN : null

        useEffect(() => {
            if (isActive || (sessionContext.playerPos.row == row && sessionContext.playerPos.col == col)) {
                if (sessionContext.playerPos.row == row && sessionContext.playerPos.col == col && isTrophy && sessionContext.blockStack.length == 1) {
                    sessionContext.setIsWin(true)
                    return
                }
                const playerRow = isActive ? sessionContext.playerPos.row : previousPos.row
                const playerCol = isActive ? sessionContext.playerPos.col : previousPos.col
                if (playerRow - row == 0 && playerCol - col == -((teleporters.reach[1] && (teleporters.signature & 1) != 0) ? teleporters.reach[1] : 1)) {
                    setShowLineW((b) => !b)
                }
                else if (playerRow - row == ((teleporters.reach[2] && (teleporters.signature & 2) != 0) ? teleporters.reach[2] : 1) && playerCol - col == 0) {
                    setShowLineS((b) => !b)
                }
                else if (playerRow - row == 0 && playerCol - col == ((teleporters.reach[4] && (teleporters.signature & 4) != 0) ? teleporters.reach[4] : 1)) {
                    setShowLineE((b) => !b)
                }
                else if (playerRow - row == -((teleporters.reach[8] && (teleporters.signature & 8) != 0) ? teleporters.reach[8] : 1) && playerCol - col == 0) {
                    setShowLineN((b) => !b)
                }
                else if (isActive && mazeData.links[playerRow] && mazeData.links[playerRow][playerCol]) {
                    for (const { exit } of mazeData.links[playerRow][playerCol]) {
                        if (mazeData.exits[exit]) {
                            const exitRow = mazeData.exits[exit].row
                            const exitCol = mazeData.exits[exit].col
                            if (exitRow == row && exitCol == col) {
                                if (mazeData.exits[exit].orientation == 1) {
                                    setShowLineW((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 2) {
                                    setShowLineS((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 4) {
                                    setShowLineE((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 8) {
                                    setShowLineN((b) => !b)
                                    break
                                }
                            }
                        }
                    }
                }
                if (isActive && mazeData.links[row] && mazeData.links[row][col]) {
                    for (const { exit } of mazeData.links[row][col]) {
                        if (mazeData.exits[exit]) {
                            const exitRow = mazeData.exits[exit].row
                            const exitCol = mazeData.exits[exit].col
                            if (exitRow == playerRow && exitCol == playerCol) {
                                if (mazeData.exits[exit].orientation == 4) {
                                    setShowLineW((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 8) {
                                    setShowLineS((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 1) {
                                    setShowLineE((b) => !b)
                                    break
                                }
                                else if (mazeData.exits[exit].orientation == 2) {
                                    setShowLineN((b) => !b)
                                    break
                                }
                            }
                        }
                    }
                }
            }

            setPreviousPos(sessionContext.playerPos)
            setIsActive(sessionContext.playerPos.row == row && sessionContext.playerPos.col == col)
        }, [sessionContext.playerPos])

        useEffect(() => {
            setLineCache(lc => {
                lc[oldStack] = { w: showLineW, s: showLineS, e: showLineE, n: showLineN }
                return lc
            })
        }, [showLineW, showLineS, showLineE, showLineN])

        useEffect(() => {
            setTimeout(() => {
                const stack = sessionContext.blockStack.join(".")
                setShowLineW(lineCache[stack] ? lineCache[stack].w : false)
                setShowLineS(lineCache[stack] ? lineCache[stack].s : false)
                setShowLineE(lineCache[stack] ? lineCache[stack].e : false)
                setShowLineN(lineCache[stack] ? lineCache[stack].n : false)
                setOldStack(stack)
                if (sessionContext.playerPos.row == row && sessionContext.playerPos.col == col) {
                    const playerRow = previousPos.row
                    const playerCol = previousPos.col
                    if (mazeData.links[playerRow] && mazeData.links[playerRow][playerCol]) {
                        for (const { exit } of mazeData.links[playerRow][playerCol]) {
                            if (mazeData.exits[exit]) {
                                const exitRow = mazeData.exits[exit].row
                                const exitCol = mazeData.exits[exit].col
                                if (exitRow == row && exitCol == col) {
                                    if (mazeData.exits[exit].orientation == 1) {
                                        setShowLineW((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 2) {
                                        setShowLineS((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 4) {
                                        setShowLineE((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 8) {
                                        setShowLineN((b) => !b)
                                        break
                                    }
                                }
                            }
                        }
                    }
                    if (mazeData.links[row] && mazeData.links[row][col]) {
                        for (const { exit } of mazeData.links[row][col]) {
                            if (mazeData.exits[exit]) {
                                const exitRow = mazeData.exits[exit].row
                                const exitCol = mazeData.exits[exit].col
                                if (exitRow == playerRow && exitCol == playerCol) {
                                    if (mazeData.exits[exit].orientation == 4) {
                                        setShowLineW((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 8) {
                                        setShowLineS((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 1) {
                                        setShowLineE((b) => !b)
                                        break
                                    }
                                    else if (mazeData.exits[exit].orientation == 2) {
                                        setShowLineN((b) => !b)
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }, 100);
        }, [sessionContext.blockStack])

        return (
            <div style={{
                position: "absolute", marginLeft: (col + 1 / 4) * mazeData.tile_size, marginTop: (row + 1 / 4) * mazeData.tile_size, background: mazeData.background_color, width: mazeData.tile_size, height: mazeData.tile_size
            }}>
                {defaultPathW !== null && defaultPathW}
                {defaultPathS !== null && defaultPathS}
                {defaultPathE !== null && defaultPathE}
                {defaultPathN !== null && defaultPathN}

                {((type | teleporters.signature | links | exits) & 15) != 0 && central_path}

                {(isStartingPosition || isTrophy) && roundTile}

                {showLineW && defaultLineW}
                {showLineS && defaultLineS}
                {showLineE && defaultLineE}
                {showLineN && defaultLineN}
            </div >
        )
    }
    return (<></>)
}