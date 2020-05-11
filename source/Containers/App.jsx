import React, {useState,useEffect} from 'react'; 
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categorias from '../Components/Categorias';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/Carousel-item';
import Footer from '../Components/Footer';
import UseInitialState from '../Hooks/UseInitialState';

import '../assets/styles/App.scss';
import useInitialState from '../Hooks/UseInitialState';

 const API = 'http://localhost:3000/initalState';

const App = () => {
 const initalState = useInitialState(API);
    return (
    <div className="App">
        <Header/>
        <Search/>

        {initalState.mylist.length > 0 &&
        <Categorias title="Mi Lista">
            <Carousel>
                <CarouselItem/>
            </Carousel>
        </Categorias>       
         }

        <Categorias title="Tendencias">
            <Carousel>
            {initalState.trends.map(item =>
                <CarouselItem key={item.id} {...item}/>
            )}
            </Carousel>
        </Categorias>

        <Categorias title="Originales">
            <Carousel>
            {initalState.originals.map(item =>
                <CarouselItem key={item.id} {...item}/>
            )}
            </Carousel>
        </Categorias>
         
        <Footer/>

    </div>
  );
}
export default App;