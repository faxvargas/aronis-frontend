import React, { useContext, useEffect } from 'react'
import ClotheContext from '../context/Clothes/ClotheContext'
import ClipLoader from "react-spinners/ClipLoader";
import {
    Link
} from "react-router-dom"
import UsersContext from '../context/Users/UsersContext';

export default function Home() {
    const ctxClothes = useContext(ClotheContext)
    const {
        clothes,
        getAllClothes
    } = ctxClothes
    useEffect(() => {
        getAllClothes()
    }, [])
    return (
        <div>
            <div class="bg-white">

                <div class="relative pb-32 bg-gray-800">
                    <div class="absolute inset-0">
                        <img class="w-full h-full object-cover" src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.15752-9/244941998_571123544176437_3948294862714608015_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeH0xoQubJWjqtVyQR3o63EoznSToD8XKhDOdJOgPxcqECbsSkrWo9qiEgfXnq-6A826zf9SgrRD-0jpcl4ojWrH&_nc_ohc=SfqiXV_MjCQAX95jO3I&_nc_ht=scontent.fmex3-1.fna&oh=a060ce9a8b0e75cf5f2d41a73d265264&oe=6193F8A8" alt="" />
                        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">𝒜𝓇𝑜𝓃𝒾'𝓈 𝐵𝑜𝓊𝓉𝒾𝓆𝓊𝑒</h1>
                        <p class="mt-6 max-w-3xl text-xl text-gray-300">Estas a un click de vestir elegante.</p>
                    </div>
                </div>


                <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
                    <h2 class="sr-only" id="contact-heading">Contact us</h2>
                    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>

                                </div>
                                <h3 class="text-xl font-medium text-gray-900">𝒮𝑜𝒷𝓇𝑒 𝒩𝑜𝓈𝑜𝓉𝓇𝑜𝓈</h3>
                                <p class="mt-4 text-base text-gray-500">¿Quienes somos?</p>
                                <p class="mt-4 text-base text-gray-500">Nosotros somos una empresa familiar con distintos roles, la principal es la señora Elizabeth Aroni, la cual se ocupa en diseñar los vestidos y/o prendas, en consiguiente viene su hijo, el cual le ayuda con las redes sociales y fotos para la pagina, nuestro proyecto es que el usuario pueda crear el diseño que el quiera y posteriormente a eso ver de hablarlo con la señora Elizabeth para llegar a un acuerdo. </p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Disfruta<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>

                                </div>
                                <h3 class="text-xl font-medium text-gray-900">¿𝒬𝓊𝑒 𝓃𝑜𝓈 𝑔𝓊𝓈𝓉𝒶𝓇𝒾𝒶?</h3>
                                <p class="mt-4 text-base text-gray-500">El fin de esta pagina es llegar a mas publico y ahorrar tiempo de las personas, tales como el del comprador como el vendedor y así no tener el tipico chat en whatsapp.</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Nuestra<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">𝒫𝓇𝑒𝓃𝒹𝒶𝓈</h3>
                                <p class="mt-4 text-base text-gray-500">Respecto a las prendas que ofrecemos por el momento solo producimos para dama (comunmente vestidos) pero esperamos en un futuro ampliarnos a producir prendas para caballero.</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Pagina<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />
            <hr />

        </div>
    )
}