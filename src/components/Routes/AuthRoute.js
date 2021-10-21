import React,{useContext, useEffect, useState} from "react"
import{
    Route,
    Redirect
}from "react-router-dom"
import UsersContext from "../../context/Users/UsersContext"

const AuthRoute=({component: Component,...props})=>{
  const usersCtx= useContext(UsersContext)
  const {
      authStatus,
      tokenVerification
    }=usersCtx

    useEffect(()=>{
     const verifyUser=async()=>{
       await tokenVerification()
     }
     verifyUser()
    }, [authStatus])
    return(
        <Route {...props} render={(props)=>{
            return authStatus ?
            (<Redirect to="/"/>)
            :
            (<Component {...props}/>)
        }}/>
    )
}

export default AuthRoute