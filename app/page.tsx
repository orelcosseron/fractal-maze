"use client"

import { useState } from 'react'
import Hud from '@/components/Hud'
import Maze from '@/components/Maze'
import MazeSelector from '@/components/MazeSelector'
import { SessionContext } from '@/components/context/sessionContext'

export default function Home() {
  const [currentMazeName, setCurrentMazeName] = useState("")

  const [blockStack, setBlockStack] = useState(["0"])
  const [playerPos, setPlayerPos] = useState({ row: 0, col: 0 })
  const [prevPlayerPos, setPrevPlayerPos] = useState({ row: 0, col: 0 })
  const [lines, setLines] = useState({})
  const [isWin, setIsWin] = useState(false)
  const sessionContext = { blockStack: blockStack, setBlockStack: setBlockStack, playerPos: playerPos, setPlayerPos: setPlayerPos, prevPlayerPos: prevPlayerPos, setPrevPlayerPos: setPrevPlayerPos, lines: lines, setLines: setLines, isWin: isWin, setIsWin: setIsWin }

  return (
    <>
      <MazeSelector onChange={(name: string) => setCurrentMazeName(name)} />
      <SessionContext value={sessionContext}>
        <Hud>
          {currentMazeName !== "" && <Maze name={currentMazeName} />}
          {/* <button id="reset_button">Reset</button> */}
        </Hud>
      </SessionContext>
    </>
  )
}