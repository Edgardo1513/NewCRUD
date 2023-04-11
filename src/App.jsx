import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ProductsList from './components/ProductsList'
import ProductsForm from './components/ProductsForm'
import Warning from './components/Warning'

function App() {
  const [productsList, setProductsList] = useState([])
  const [form, setForm] = useState(false)
  const [productSelected, setProductSelected] = useState(null)
  const [warning, setWarning] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)


  useEffect(() => {
    getProducts()
  }, [])

  const selectProduct = (product) => {
    setForm(true)
    setProductSelected(product)
  }


  const getProducts = () => {
    axios.get('https://products-crud.academlo.tech/products/')
    .then(res => setProductsList(res.data))
  }

  const getWarning = (product) => {
    setWarning(true)
    setProductToDelete(product)
  }

  const cancelDelete = () => {
    setWarning(false)
    setProductToDelete(null)
  }

  const deleteProduct = (productToDelete) => {
    axios.delete(`https://products-crud.academlo.tech/products/${productToDelete?.id}/`)
        .then(() => {
          getProducts()   
          setWarning(false) 
          setProductToDelete(null)
        })
  }
  console.log(productToDelete);    
  return (
    <div className="App">
         { form &&
        <ProductsForm 
        setForm={setForm}
        getProducts={getProducts}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
        />
      } 
      
      { ProductsList &&
         <ProductsList 
         productsList={productsList}
         setForm={setForm}
         selectProduct={selectProduct}
         getProducts={getProducts}
         getWarning={getWarning}
         />
      }    
     
      { warning &&
        <Warning 
        productToDelete={productToDelete} 
        cancelDelete={cancelDelete}
        deleteProduct={deleteProduct}
        />
      }

      <footer>by <strong>Edgardo Oñate | G23 - Academlo </strong> </footer>
      
  

      
    </div>
  )
}

export default App
