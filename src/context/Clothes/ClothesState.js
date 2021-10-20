import React, {useReducer} from "react";
import ClotheContext from "./ClotheContext";
import ClothesReducer from "./ClothesReducer"
// import axios from "axios" 
import axiosClient from "./../../config/axios"

const ClothesState = (props) => {

    const initialState = {
        clothes:[]

    }

    // const newClothe={
    //     name: "Polo"
    // }
    const [globalState, dispatch ]=useReducer(ClothesReducer, initialState)


    const getAllClothes= async()=>{
    try {
        const res= await axiosClient.get("/api/clothes/get-all")
        const clothesFromDB = res.data.data
        dispatch({
            type:"OBTENER_ROPA",
            payload: clothesFromDB
        })
    } catch (error) {
        console.log(error)
    }
    }

    const addClothe= async (dataForm)=>{
        console.log(dataForm)
        try {
            await axiosClient.post("/api/clothes/create", dataForm) 
            getAllClothes() 
        } catch (error) {
            console.log(error)
            
        }
       

        //   dispatch({
        //       type: "AGEGAR_PRENDA",
        //       payload: newClothe

        //   })
    }

    return (
        <ClotheContext.Provider
            value={
                {
                    clothes: globalState.clothes,
                    getAllClothes,
                    addClothe   
                }
            }
        >
            {props.children}
        </ClotheContext.Provider>
    )

}


export default ClothesState
