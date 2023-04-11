import axios from 'axios';
import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';

const ProductsForm = ({setForm, getProducts, productSelected, setProductSelected}) => {
    const { handleSubmit, register, reset } = useForm(); 
    const inputNull = {name: "", category: "", price: "", isAvailable: ""}

useEffect(() => {
    if(productSelected){
        reset(productSelected)
    } else {
        reset(inputNull)
    }

}, [productSelected])

const submit = (data) => {
    if(productSelected){
        axios.put(`https://products-crud.academlo.tech/products/${productSelected.id}/`, data)
        .then(() => {
            getProducts()
            closeForm()
        })
    } else {
        axios.post(`https://products-crud.academlo.tech/products/`, data)
        .then(() => {
            getProducts()
            closeForm()
        })
    }
    
}

const closeForm = () => {
    setForm(false)
    setProductSelected(null)
    
}

    return (
        <div className='container__card'>
            <div className='form'>
                <button className='btn__close' onClick={() => closeForm()}>x</button>
                <h3>Formulario</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" id="name" placeholder='Name Product' {...register("name")} />
                    <input type="text" id="category" placeholder='Category'{...register("category")}/>
                    <input type="number" id="price" placeholder='Price'{...register("price")}/>
                    <input type="number" id="isAvailable" placeholder='IsAvailable'{...register("isAvailable")}/>   
                    <button className='btn__update' type='submit'>{productSelected ? "Update" : "Create Product" }</button>            
                </form>
            </div>
        </div>
    );
};



export default ProductsForm;