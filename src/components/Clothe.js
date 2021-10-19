import React, {useContext} from 'react'
import ClotheContext from '../context/Clothes/ClotheContext'

export default function Clothe(){
    const ctx=useContext(ClotheContext)
    return(
        <div>
            Este es mi listado
            <hr/>
            {
                ctx.clothes.map(e=>e.name)
            }
        </div>
    )
}
