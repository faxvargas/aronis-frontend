import React, {useState,useContext} from 'react'
import ClotheContext from '../context/Clothes/ClotheContext'

function CreateClothe() {
    const ctx = useContext(ClotheContext)
    const{
        addClothe
    }=ctx
    const [newClothe, setNewClothe] = useState({
        name:"",
        talla:"",
        pictureUrl:"",
        color:""
    })

    const handleForm=(event)=>{
      event.preventDefault()
      setNewClothe({
          ...newClothe,
          [event.target.name]: event.target.value
      })
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        addClothe(newClothe)
    }
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <h2>Nombre</h2>
                <input
                  value={newClothe.name}
                  name="name"
                  onChange={(e)=>{handleForm(e)}}
                />
                <h2>Talla</h2>
                <input
                value={newClothe.talla}
                name="talla"
                onChange={(e)=>{handleForm(e)}}
                />
                <h2>Imagen</h2>
                <input
                value={newClothe.pictureUrl}
                name="pictureUrl"
                onChange={(e)=>{handleForm(e)}}
                />
                <h2>color</h2>
                <input
                value={newClothe.color}
                name="color"
                onChange={(e)=>{handleForm(e)}}
                />
                <button>
                    Crear Prenda
                </button>

            </form>
        </div>
    )
}

export default CreateClothe
