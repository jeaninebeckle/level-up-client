import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./game/EventList.js"
import { EventProvider } from "./game/EventProvider.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"



export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/games" render={(props) => {
                    return <>
                        <main className="gameContainer">
                            <GameList history={props.history} />
                        </main>

                    </>
                        }} />

                        <Route exact path="/games/new" render={(props) => {
                            return <GameForm {...props} />
                        }} />
            </GameProvider>

            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
            </EventProvider>
        </main>
    </>
}
