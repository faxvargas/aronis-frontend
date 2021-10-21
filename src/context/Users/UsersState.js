import UsersContext from "./UsersContext"
import axiosClient from '../../config/axios'
import React from "react"
import { useReducer } from "react"
import UsersReducer from "./UsersReducer"


const UsersState=(props)=>{
    const initialState={
        user:{
            _id: null,
            username: null,
            email:null
        },
        authStatus:false
    }
    const [globalState, dispatch] = useReducer(UsersReducer, initialState)


    const registerUser = async(dataForm)=>{
        console.log(dataForm)
        try {
            const res = await axiosClient.post("/api/users/create", dataForm)
            const token = res.data.data.token
            dispatch({
                type:"CREAR_USUARIO_EXITOSAMENTE",
                payload: token
            })
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async (dataForm) => {

        try {

            const res = await axiosClient.post("/api/auth/login", dataForm)
            console.log(res)

            const token = res.data.data.token

            dispatch({
                type: "INICIO_SESION_EXITOSO",
                payload: token
            })
            
        } catch (error) {
            console.log(error)            
        }


    }   
    
    const tokenVerification=async()=>{

        const token= localStorage.getItem("token")
        if(!token){
            console.log("Borrando Token de los headers")
            delete axiosClient.defaults.headers.common["x-auth-token"]
        }   
        axiosClient.defaults.headers.common["x-auth-token"] = token
        try {
            const res = await axiosClient.get("/api/auth/verifying-token")
            const currentUser = res.data.data.user
            dispatch({
                type:"OBTENER_USUARIO",
                payload:currentUser
            })
            console.log(res)
        } catch (error) {
            
        }
    }


    return(
        <UsersContext.Provider
            value={{
                user: globalState.user,
                authStatus: globalState.authStatus,
                registerUser,
                loginUser,
                tokenVerification
            }}
            >
                {props.children}
        </UsersContext.Provider>
    )
}


export default UsersState