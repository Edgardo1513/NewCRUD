import React from 'react';
import axios from 'axios'


const Warning = ({productToDelete, cancelDelete, deleteProduct}) => {

   
    return (
        <div className='container__card'>
            <div className='warning'>
                <h4>Deseas eliminar al Producto <br /> {productToDelete?.name}</h4>
               <p>Esta accion es permanente</p><br />               
               <button  onClick={() => deleteProduct(productToDelete)}>Eliminar</button>
               <button  onClick={() => cancelDelete()}>Cancelar</button>                
            </div>
        </div>
    );
};

export default Warning;
