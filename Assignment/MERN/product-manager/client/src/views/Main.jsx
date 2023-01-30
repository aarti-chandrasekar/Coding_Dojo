import React, { useState, useEffect } from 'react'
import axios from 'axios';


import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [productList, setProductList] = useState([]);
    const [refreshListFlag, setRefreshListFlag] = useState(0);


    const url = `http://localhost:8000/api/products`;

    useEffect(() => {
            axios.get(url)
                .then(response => {
                    console.log("axios res - ", response.data);
                    setProductList(response.data.products)
                }).catch(err => {
                    console.log(err);
                    setProductList([{ error: "Error loading Product List" }])
                });
            }, [refreshListFlag])

    const updateRefreshListFlag = () => setRefreshListFlag(refreshListFlag+1)

    return (
        <>
            <ProductForm updateRefreshListFlag={updateRefreshListFlag}/>
            <ProductList productList={productList} updateRefreshListFlag={updateRefreshListFlag} />
        </>
    )
}

export default Main