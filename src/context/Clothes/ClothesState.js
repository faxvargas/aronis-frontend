import React, {useReducer} from "react";
import ClotheContext from "./ClotheContext";
import ClothesReducer from "./ClothesReducer"
import axios from "axios"

const ClothesState = (props) => {

    const initialState = {
        clothes:[
            {
           name: "vestido"
        },
        {
            name: "pantalon"
        }
    ]

    }

    const newClothe={
        name: "Polo"
    }
    const [globalState, dispatch ]=useReducer(ClothesReducer, initialState)
    const getAllClothes= async()=>{
    try {
        const res= await axios.get("https://localhost:3005/")
    } catch (error) {
        
    }
    }

    const addClothe=()=>{
          dispatch({
              type: "AGEGAR_PRENDA",
              payload: newClothe

          })
    }

    return (
        <ClotheContext.Provider
            value={
                {
                    clothes: globalState.clothes,
                    addClothe   
                }
            }
        >
            {props.children}
        </ClotheContext.Provider>
    )

}


export default ClothesState