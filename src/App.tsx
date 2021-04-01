import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import users from "./app/redux/user/user.reducer"
import items from "./app/redux/Item/Item.reducers"
import RouteManager from "./app/RouteManager"
import todos from "./app/redux/todo/Todo.reducer"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

// Setup Redux store with Thunks
const reducers = combineReducers({ items, users, todos })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <div className="container m-5">
            <Provider store={store}>
                <RouteManager />
            </Provider>
        </div>
    )
}

export default App
