import React from 'react';

export default function Presentation() { 

return (

    <section id="presentation" className="bg-indigo-50 m-0">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4x">Sobre mí</h1>
                            
                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 rounded-full bg-orange-100"></span>
                                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-orange-100"></span>
                                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-orange-100"></span>
                                </div>
                            </div>
    
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-gray-700 bg-orange-100 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5,12.8739825 C3.27477279,12.4299397 2,10.8638394 2,9 C2,6.790861 3.790861,5 6,5 C6.11332888,5 6.22555698,5.00471299 6.33649899,5.01395368 C7.15621908,2.67628292 9.38235111,1 12,1 C14.6176489,1 16.8437809,2.67628292 17.663501,5.01395368 C17.774443,5.00471299 17.8866711,5 18,5 C20.209139,5 22,6.790861 22,9 C22,10.8638394 20.7252272,12.4299397 19,12.8739825 L19,17 C19,17.5522847 18.5522847,18 18,18 L6,18 C5.44771525,18 5,17.5522847 5,17 L5,12.8739825 Z" />
                                    </svg>
                                </span>
    
                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">Mi comienzo</h1>
    
                                    <p className="mt-3 text-gray-500">
                                        Mi nombre es Carimi, desde temprana edad tuve una pasión muy fuerte por el mundo de la pasteleria y a mis 20 años decidí comenzar este emprendimiento. Hoy ya con 22 años y más experiencia
                                        puedo brindarle a mis clientes productos de calidad. 

                                    </p>
                                </div>
                            </div>
    
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-gray-700 bg-orange-100 rounded-xl md:mx-4 dark:bg-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.03587629,17.2664036 L2.54094808,14.2345363 C1.62521847,13.6168689 1.38359132,12.373805 2.00125875,11.4580753 C2.61892617,10.5423457 3.86199008,10.3007186 4.7777197,10.918386 L7,12.417333 L7,8 C7,4.6862915 9.6862915,2 13,2 C16.3137085,2 19,4.6862915 19,8 L19,17 C19,17.5522847 18.5522847,18 18,18 L8,18 C7.53996718,18 7.15248755,17.6893628 7.03587629,17.2664036 Z" />
                                    </svg>
                                </span>
    
                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">Estudios</h1>
    
                                    <p className="mt-3 text-gray-500">
                                        Actualmente estoy recibida en Pasteleria Profesional, título otorgado por IGA (Instituto Gastronómico de Argentina).
                                    </p>
                                </div>
                            </div>
    
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-gray-700 bg-orange-100 rounded-xl md:mx-4  dark:bg-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>
    
                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">Pedidos</h1>
    
                                    <p className="mt-3 text-gray-500">
                                        Tomo pedidos con un día mínimo de anticipación, hago envíos (incluye Crespo).
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.ibb.co/SQr2LK4/fotor-2023-2-22-11-39-1.png" alt=""/>
                        </div>
                    </div>              
                </div>
            </section>

)
}