"use client"

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { MazeContextType, MazeContext } from './context/mazeContext'
import MazeToJSON from '@/src/MazeToJSON'
import Block from './Block'
import Player from './Player'
import Rim from './Rim'
import Tile from './Tile'
import Trophy from './Trophy'

export default function Maze({ name }: { name: string }) {
    const [mazeData, setMazeData]: [MazeContextType | undefined, Dispatch<SetStateAction<MazeContextType | undefined>>] | undefined = useState<MazeContextType | undefined>(undefined)

    useEffect(() => {
        setMazeData(MazeToJSON(name.toLowerCase().replaceAll(" ", "_")))
    }, [name])

    if (mazeData) {
        return (
            <MazeContext value={mazeData}>
                <div className="maze" style={{ width: mazeData.tile_size * (mazeData.rows[0].length / 2 + 1 / 2), height: mazeData.tile_size * (mazeData.rows.length + 1 / 2) }}>
                    <Rim>

                        {Object.keys(mazeData.blocks).map(name => <Block key={name} name={name} />)}

                        <Player />

                        {mazeData.trophies.map((_, id) => <Trophy key={id} id={id} />)}

                        {mazeData.rows.map((row, i) =>
                            row.match(/.{2}/g)?.map((_, j) =>
                                <Tile key={i.toString() + "." + j.toString()} row={i} col={j} />
                            )
                        )}
                    </Rim>
                </div >
            </MazeContext >
        )
    }
    return (<></>)
}