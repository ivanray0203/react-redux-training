import "./sample.css"
import React, { useState, useEffect } from "react"
import Profile from "./profile"

const Home = (props: any) => {
    const [name, setName] = useState("Ivan Ray Antonio")
    const id = props.match.params.id

    useEffect(() => {
        setName("Racid Gwapo")
    }, [name])

    const handleonChange = (e: any) => {
        setName(e.target.value)
    }
    return (
        <div className="wrapper">
            <Profile />
            <input onChange={handleonChange} />
            <h1>This is Home Page with id {id} </h1>
            <h1>Name: {name}</h1>
        </div>
    )
}

export default Home
