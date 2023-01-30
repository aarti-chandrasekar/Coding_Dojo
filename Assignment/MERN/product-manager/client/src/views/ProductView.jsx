import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ProductView = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [serverError, setServerError] = useState("");


    const { id } = useParams()
    const url = `http://localhost:8000/api/products/${id}`;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log("axios res - ", response.data);
                setTitle(response.data.product.title)
                setPrice(response.data.product.price)
                setDescription(response.data.product.description)
            }).catch(err => {
                console.log(err);
                setServerError("Error loading Product Details")
            });
    }, [])


    return (
        <div className="row d-flex justify-content-center">
            <div className="bg-dark m-2 p-3 w-50 " >
                <Link to={`/`}>Home</Link>

                <h2 className="text-center">{title}</h2>
                <h4 className="text-center">Price : ${price}</h4>
                <h4 className="text-center">Description :{description}</h4>

                {serverError ? <p className="text-danger">{serverError}</p> : ""}

            </div>
        </div>

    )
}

export default ProductView