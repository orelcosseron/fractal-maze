import { Context, createContext, Dispatch, SetStateAction } from 'react';

interface SessionContextType {
    blockStack: string[],
    setBlockStack: Dispatch<SetStateAction<string[]>>,
    playerPos: {
        row: number,
        col: number
    },
    setPlayerPos: Dispatch<SetStateAction<{
        row: number,
        col: number
    }>>,
    isWin: boolean,
    setIsWin: Dispatch<SetStateAction<boolean>>
}

export const SessionContext: Context<SessionContextType | undefined> = createContext<SessionContextType | undefined>(undefined)