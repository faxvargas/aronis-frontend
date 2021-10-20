import React, { useContext, useEffect } from 'react'
import ClotheContext from '../context/Clothes/ClotheContext'
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
    const ctx = useContext(ClotheContext)
    const {
        clothes,
        getAllClothes
    } = ctx

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

                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">𝒻𝑒𝓂𝑒𝓃𝒾𝓃𝑜</h3>
                                <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">𝓂𝒶𝓈𝒸𝓊𝓁𝒾𝓃𝑜</h3>
                                <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">

                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">𝓊𝓃𝒾𝓈𝑒𝓍</h3>
                                <p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />
            {
                clothes.length === 0 ?
                    <ClipLoader />
                    :
                    clothes.map(e => {
                        return (
                            <>
                                <div class="bg-white">
                                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                        <h2 class="text-xl font-bold text-gray-900">Listado de Pedidos</h2>

                                        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                            <div>
                                                <div class="relative">
                                                    <div class="relative w-full h-72 rounded-lg overflow-hidden">
                                                        <img src={e.pictureUrl} alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="w-full h-full object-center object-cover" />
                                                    </div>
                                                    <div class="relative mt-4">
                                                        <h3 class="text-sm font-medium text-gray-900">{e.name}</h3>
                                                        <p class="mt-1 text-sm text-gray-500">{e.color}</p>
                                                    </div>
                                                    <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                                                        <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                                                        <p class="relative text-lg font-semibold text-white">{e.talla}</p>
                                                    </div>
                                                </div>
                                                <div class="mt-6">
                                                    <a href="#" class="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">Ver Prenda<span class="sr-only">, Zip Tote Basket</span></a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
            }





            <hr />

        </div>
    )
}