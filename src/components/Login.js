import React, {useState,useContext} from 'react'
import UsersContext from '../context/Users/UsersContext'

export default function Login() {
    const ctxUser = useContext(UsersContext)
    const {loginUser} = ctxUser

    const [userData, setUserData] =useState({
        email:"",
        password:""
    })

    const handleChange=(event)=>{
       setUserData({
           ...userData,
           [event.target.name]: event.target.value
       })
    }
    const submitData=(event)=>{
        event.preventDefault()
        loginUser(userData)
        console.log(userData)
    }



    return (
        <>
           <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-12 w-auto" src="https://scontent.fmex3-1.fna.fbcdn.net/v/l/t1.15752-9/245442009_618326026197278_7347062344786541479_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEICzsX62bg4AukPjUKY7AKRp4MIUc2DlVGngwhRzYOVdyi0T-UiZ-0U6M19Q1cTK2Uc4tQnguuURMdBBxgxSZ9&_nc_ohc=6kx7QYe6AOMAX87irvh&_nc_ht=scontent.fmex3-1.fna&oh=eecb14b53721d35fb1ff631d6d6623a6&oe=6197B8FA" alt="Workflow"/>
                    <h2 class ="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Inicia sesion
                    </h2>
                    <p class ="mt-2 text-center text-sm text-gray-600">
                    recuerda hacerlo con tu cuenta preregistrada
                    <a href="#" class ="font-medium text-indigo-600 hover:text-indigo-500">
                     
                    </a>
                    </p>
                </div>
                
                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6" onSubmit={(e)=>{submitData(e)}}>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Correo Electronico
                                </label>
                                <div class="mt-1">
                                    <input  name="email" type="email"  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e)=>{handleChange(e)}}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div class="mt-1">
                                    <input  name="password" type="password" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e)=>{handleChange(e)}}
                                    />
                                </div>
                            </div>

                            

                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Inicia Sesion
                                </button>
                            </div>
                        </form>

                        
                        </div>
                    </div>
                </div> 
        </>
    )
}


