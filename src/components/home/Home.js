import React from 'react';

import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';

class Home extends React.Component{

    render() {
        return (

            <>
            <Menu />
            
            <main role="main" className="flex-shrink-0 mt-5">


                <div className="container">
                    
                    <Slider />
                    <Servicios />

                    <hr/>
                </div>

            </main>

            <Footer />
            </>
        )
    }
}

export default Home;