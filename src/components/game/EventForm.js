import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { GameContext } from "./GameProvider.js"


export const EventForm = props => {
  const { getGames, games } = useContext(GameContext)
  const { createEvent } = useContext(EventContext)
  const [currentEvent, setEvent] = useState({
    gameId: 1,
    description: "",
    date: "",
    time: ""
  })

    useEffect(() => {
        getGames()
    }, [])

    const handleControlledInputChange = (event) => {
      currentEvent[event.target.name] = event.target.value
      setEvent(currentEvent)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        defaultValue={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id} key={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={currentEvent.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        defaultValue={currentEvent.date}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        defaultValue={currentEvent.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    createEvent({
                      gameId: currentEvent.gameId,
                      description: currentEvent.description,
                      date: currentEvent.date,
                      time: currentEvent.time
                    }).then(() => props.history.push({pathname: "/events"}))

                    // Create the event
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
