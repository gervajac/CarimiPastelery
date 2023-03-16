import React from 'react';
import CardSection from "../Components/CardSection";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import Presentation from '../Components/Presentation';
import Wsp from '../Components/Wsp';


export default function Home() {

return (
        <div>
            <div>
            <Wsp />
            </div>
            <div>
            <Navbar />
            </div>
            <div>
            <Presentation/>
            </div>
            <div>
            <CardSection />
            </div> 
            <div>
            <Footer />
            </div> 
        </div>

    )
}