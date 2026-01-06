"use client"

import { useState, useEffect } from 'react'

export default function MazeSelector({ onChange }: { onChange: (name: string) => void }) {
    const [mazeList, setMazeList] = useState([])

    useEffect(() => {
        setMazeList(require('../src/list.json').mazes)
    }, [])

    useEffect(() => {
        if (mazeList.length > 0) {
            onChange(mazeList[0])
        }
    }, [mazeList])

    return (
        <section>
            <select name="level_select" id="level_select" onChange={(e) => onChange(e.target.value)}>
                {mazeList.map((level) => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>
        </section>
    )
}