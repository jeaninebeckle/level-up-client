import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./game/EventForm.js"
import { EventList } from "./game/EventList.js"
import { EventProvider } from "./game/EventProvider.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"




export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <GameProvider>
                <Route exact path="/games" render={ props => <GameList {...props}/>} />
                    
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />

                <EventProvider>
                <Route exact path="/events" render={(props) => {
                        return <EventList history={props.history} />
                    }} />

                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider>
            </GameProvider>
        </main>
    </>
}
