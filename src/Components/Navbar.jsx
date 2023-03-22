import React from 'react';

export default function Navbar() { 

return (

    <nav className="bg-orange-100 text-extrabold border-solid border-black border-2">
    <div className="container flex items-center justify-center p-6 mx-auto text-extrabold capitalize bg-orange-100 italic font-semibold tracking-wider ">
   
        <a href="#presentation" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-700 hover:border-white mx-1.5 sm:mx-6">Sobre mí</a>

        <a href="#pasteles" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-700 hover:border-white mx-1.5 sm:mx-6">Pasteles</a>

        <a href="#footer" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-700 hover:border-white mx-1.5 sm:mx-6">Contacto</a>

    </div>
</nav>

)}