import axios from 'axios';
import React from 'react';


const ProductsList = ({productsList, setForm, selectProduct, getProducts, getWarning}) => {
    const orderedList = productsList.sort((a, b) => a.name.localeCompare(a.name))



    return (
        <div className='listProduct'>
            <div className='sumary'>
                <h1>Listado de Productos</h1>
                <p><strong>Productos Registrados: </strong>{productsList.length}</p>
                <button onClick={() => setForm(true)}>+Nuevo Producto</button>
            </div>
            <div className='cardProduct__container'>
                {
                    orderedList.map((product) => (
                        <div className='card' key={product.id}> 
                            <div className='info__product'>                
                                <p><strong>Name product: </strong> <br />{product.name} </p>
                                <p><strong>Category: </strong> <br />{product.category} </p>
                                <p><strong>Price: </strong> <br />{product.price} </p>
                                <p><strong>isAvailable </strong> <br />{product.isAvailable} </p>
                            </div>
                            <div className='icons'>
                                <div onClick={() => selectProduct(product)}>
                                    <i className='bx bxs-edit-alt bx-sm'></i>
                                </div>
                                <div onClick={() => getWarning(product)}>
                                    <i className='bx bx-trash bx-sm'></i>                
                                </div>  
                            </div>                     
                        </div>
                    ))
                }
            </div>
        </div>
    );
};



export default ProductsList;