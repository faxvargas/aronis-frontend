import React, {useContext} from 'react'
import ClotheContext from '../context/Clothes/ClotheContext'

export default function Home(){
    const ctx = useContext(ClotheContext)
    const{
        clothes,
        addClothe
    } = ctx
    return(
        <div>
            Este es mi home
            <hr/>
            {
                ctx.clothes.map(e=>e.name)
            }
            <button onClick={()=>{addClothe()}}>
                Click para ejecutar addClothe
            </button>
        </div>
    )
}