import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ItemList from "./pages/item/ItemList"
// import UserList from "./pages/user/UserList"
import TodoList from "./pages/todo/TodoList"
import Sample from "./pages/sample"
import Home from "./pages/sample/Home"
import Header from "./pages/layout/Header"

const RouteManager = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Route exact path="/sample" component={Sample} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile/:id" component={Home} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
