import React, { useState, useEffect } from 'react'
import axios from 'axios';


import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [productList, setProductList] = useState([]);
    const [refreshListFlag, setRefreshListFlag] = useState(0);
    const [serverError, setServerError] = useState("");

    
    useEffect(() => {
        const url = `http://localhost:8000/api/products`;
        axios.get(url)
            .then(response => {
                console.log("axios res - ", response.data);
                setProductList(response.data.products)
            }).catch(err => {
                console.log(err);
                setServerError("Error loading Product List" )
            });
    }, [refreshListFlag])

    const updateRefreshListFlag = () => setRefreshListFlag(refreshListFlag + 1)

    const handleDelete = (id) => {
        const url = `http://localhost:8000/api/products/${id}`;
        axios.delete(url)
            .then(response => {
                console.log("axios res - ", response.data);
                setRefreshListFlag(refreshListFlag+1)
            }).catch(err => {
                console.log(err);
                setProductList({ error: "Error deleting Product " })
            });
    }

    return (
        <>
            <ProductForm updateRefreshListFlag={updateRefreshListFlag} />
            <ProductList productList={productList} handleDelete={handleDelete} serverError={serverError}/>
        </>
    )
}

export default Main