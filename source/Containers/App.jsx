import React from 'react'; 
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categorias from '../Components/Categorias';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/Carousel-item';
import Footer from '../Components/Footer';

import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Categorias title="Mi Lista">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categorias>

        <Categorias title="Tendencias">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categorias>

        <Categorias title="Originales">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categorias>
         
        <Footer/>

    </div>
);

export default App;