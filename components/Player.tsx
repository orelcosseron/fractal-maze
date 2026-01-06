import { useContext, useEffect, useState } from "react"
import { MazeContext } from "./context/mazeContext";
import { SessionContext } from "./context/sessionContext";

export default function Player() {
    const mazeData = useContext(MazeContext);
    const sessionContext = useContext(SessionContext);

    const playerSizeRatio = 0.25

    if (mazeData && sessionContext) {

        useEffect(() => {
            sessionContext.setPlayerPos({ row: mazeData.player.row, col: mazeData.player.col })
            sessionContext.setBlockStack(["0"])
            sessionContext.setIsWin(false)
        }, [mazeData]);

        useEffect(() => {
            const handleKeyDown =
                (e: { key: string }) => {
                    if (sessionContext.isWin) {
                        return
                    }
                    const directions = {
                        ArrowLeft: {
                            orientation: 1,
                            rowOffset: 0,
                            colOffset: -1
                        },
                        ArrowDown: {
                            orientation: 2,
                            rowOffset: 1,
                            colOffset: 0
                        },
                        ArrowRight: {
                            orientation: 4,
                            rowOffset: 0,
                            colOffset: 1
                        },
                        ArrowUp: {
                            orientation: 8,
                            rowOffset: -1,
                            colOffset: 0
                        }
                    }

                    if (e.key in directions) {
                        const playerRow = sessionContext.playerPos.row
                        const playerCol = sessionContext.playerPos.col

                        // PATH
                        const currentTile = parseInt(mazeData.rows[sessionContext.playerPos.row].slice(2 * sessionContext.playerPos.col, 2 * sessionContext.playerPos.col + 2))
                        for (const [directionKey, direction] of Object.entries(directions)) {
                            if (e.key == directionKey && currentTile & direction.orientation) {
                                sessionContext.setPlayerPos((prevPlayer) => { return { row: prevPlayer.row + direction.rowOffset, col: prevPlayer.col + direction.colOffset } })
                                return
                            }
                        }

                        // TELEPORTER
                        if (mazeData.teleporters[playerRow] && mazeData.teleporters[playerRow][playerCol]) {
                            const teleporters = mazeData.teleporters[playerRow][playerCol].signature
                            for (const [directionKey, direction] of Object.entries(directions)) {
                                if (e.key == directionKey && teleporters & direction.orientation) {
                                    sessionContext.setPlayerPos((prevPlayer) => {
                                        const row = prevPlayer.row
                                        const col = prevPlayer.col
                                        const orientation = direction.orientation
                                        if (mazeData.teleporters[row] && mazeData.teleporters[row][col] && mazeData.teleporters[row][col].reach[orientation]) {
                                            return { row: prevPlayer.row + direction.rowOffset * mazeData.teleporters[row][col].reach[orientation], col: prevPlayer.col + direction.colOffset * mazeData.teleporters[row][col].reach[orientation] }
                                        }
                                        return prevPlayer
                                    })
                                    return
                                }
                            }
                        }

                        // LINK
                        if (mazeData.links[playerRow] && mazeData.links[playerRow][playerCol]) {
                            for (const link of mazeData.links[playerRow][playerCol]) {
                                const exit = mazeData.exits[link.exit]
                                for (const [directionKey, direction] of Object.entries(directions)) {
                                    if (e.key == directionKey && exit && exit.orientation == (direction.orientation * 4) % 15) {
                                        sessionContext.setBlockStack(bs => { return [...bs, link.block] })
                                        sessionContext.setPlayerPos({ row: exit.row, col: exit.col })
                                        return
                                    }
                                }
                            }
                        }

                        // EXIT
                        const currentBlock = sessionContext.blockStack.length > 1 ? mazeData.blocks[sessionContext.blockStack[sessionContext.blockStack.length - 1]] : null
                        exit_loop:
                        for (const [exitName, exit] of Object.entries(mazeData.exits)) {
                            if (exit && exit.row == sessionContext.playerPos.row && exit.col == sessionContext.playerPos.col) {
                                if (currentBlock && currentBlock.exits[exitName]) {
                                    for (const [directionKey, direction] of Object.entries(directions)) {
                                        if (e.key == directionKey && exit.orientation == direction.orientation) {
                                            sessionContext.setBlockStack(bs => { return bs.slice(0, -1) })
                                            sessionContext.setPlayerPos({ row: currentBlock.exits[exitName].row, col: currentBlock.exits[exitName].col })
                                            break exit_loop
                                        }
                                    }
                                }
                                else if (currentBlock === null && mazeData.trophies.length == 0) {
                                    for (const [directionKey, direction] of Object.entries(directions)) {
                                        if (e.key == directionKey && exit.orientation == direction.orientation) {
                                            sessionContext.setPlayerPos((prevPlayer) => { return { row: prevPlayer.row + direction.rowOffset, col: prevPlayer.col + direction.colOffset } })
                                            sessionContext.setIsWin(true)
                                            break exit_loop
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            document.addEventListener("keydown", handleKeyDown)

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }, [mazeData, sessionContext]);

        return (
            <div className="player" style={{
                position: "absolute", transform: "translate(" + (sessionContext.playerPos.col + 3 / 4 - playerSizeRatio / 2) * mazeData.tile_size + "px, " + (sessionContext.playerPos.row + 3 / 4 - playerSizeRatio / 2) * mazeData.tile_size + "px)", background: mazeData.player.color, width: mazeData.tile_size * playerSizeRatio, height: mazeData.tile_size * playerSizeRatio, borderRadius: mazeData.tile_size * playerSizeRatio / 2, zIndex: 4, transition: "transform 0.1s linear"
            }}>
            </div >
        )
    }
    return (<></>)
}