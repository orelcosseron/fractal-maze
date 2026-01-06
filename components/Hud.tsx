import { useContext } from "react";
import { SessionContext } from "./context/sessionContext";

export default function Hud({ children }: { children: any }) {
    const sessionContext = useContext(SessionContext);
    return (
        sessionContext &&
        <section>
            {!sessionContext.isWin && <h1 id="hud">Position: {sessionContext.blockStack.join("←")}</h1>}
            {sessionContext.isWin && <h1 id="hud">Congratulations, you escaped!</h1>}
            {children}
        </section>
    )
}