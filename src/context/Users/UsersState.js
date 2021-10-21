import UsersContext from "./UsersContext"
import React from "react"
import { useReducer } from "react"
import UsersReducer from "./UsersReducer"

const UsersState=(props)=>{
    const initialState={
        user:{
            username: null,
            email:null
        },
        authStatus:false
    }
    const [globalState, dispatch] = useReducer(UsersReducer, initialState)
    return(
        <UsersContext.Provider
            value={{
                user: globalState.user,
                authStatus: globalState.authStatus
            }}
            >
                {props.children}
        </UsersContext.Provider>
    )
}


export default UsersState