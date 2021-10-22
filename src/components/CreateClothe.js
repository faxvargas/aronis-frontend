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
        <> 
        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Crea tu prenda</h3>
        <p class="mt-1 text-sm text-gray-500">
          Estas a punto de crear una prenda ideal para ti.
        </p>
      </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div class="shadow overflow-hidden sm:rounded-md"/>
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" name="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={newClothe.name}
                onChange={(e)=>{handleForm(e)}}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Talla</label>
                <input type="text" name="talla" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={newClothe.talla}
                onChange={(e)=>{handleForm(e)}}
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Imagen</label>
                <input type="text" name="pictureUrl" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={newClothe.pictureUrl}
                onChange={(e)=>{handleForm(e)}}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Color</label>
                <input type="text" name="color" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={newClothe.color}
                onChange={(e)=>{handleForm(e)}}
                />
                <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Crear Prenda
    </button>
              </div>
            </div>
          </div>
            </form>
        </div>
        </div>
        </div>
        </>
        
    )
}

export default CreateClothe
