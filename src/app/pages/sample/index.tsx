import React from "react"
import { useHistory } from "react-router-dom"

const Sample = () => {
    const history = useHistory()

    const gotToHomePge = () => {
        history.push("/home")
    }

    return (
        <div>
            <h1>this is sampe page</h1>
            <button onClick={gotToHomePge}>go to home page</button>
        </div>
    )
}

export default Sample
