import React from 'react';
import '../assets/styles/Components/Categorias.scss';

const Categorias = ({ children }) => (
 
    <div className="categorias">
        <h3 className="categories__title">Mi lista</h3>
        {children}
    </div>
    
);

export default Categorias;