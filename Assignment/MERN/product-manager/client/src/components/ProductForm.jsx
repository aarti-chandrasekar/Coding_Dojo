import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductForm = ({updateRefreshListFlag}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [titleError, setTitleError] = useState("Title is required");
    const [priceError, setPriceError] = useState("Price is required");
    const [serverError, setServerError] = useState("");

    const url = `http://localhost:8000/api/products`;

    const validateTitle = (e) => {
        setTitle(e.target.value);
        setTitleError(e.target.value.length < 1 ? "Title is required " : "");
    }

    const validatePrice = (e) => {
        setPrice(e.target.value);
        setPriceError(e.target.value.length < 1 ? "Price is required " : "");
    }

    const validateDescription = (e) => {
        setDescription(e.target.value);
        // setDescriptionError(e.target.value.length < 1 ? "Price is required " : "");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setServerError("")
        if (!titleError && !priceError) {
            axios.post(url, { title, price, description })
                .then(response => {
                    console.log("axios res - ", response.data);
                    setTitle("")
                    setDescription("")
                    setPrice("")
                    updateRefreshListFlag()
                }).catch(err => {
                    console.log(err);
                    setServerError("Unexpected Error. Try Again")
                });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
            <h2 className="text-center">Product Manager</h2>
            <div className="bg-dark m-2 p-3 w-50 " >
                {/* <!-- Title --> */}
                <div className="form-group">
                    <label htmlFor="title" className="form-label text-white">Title </label>
                    <input type="text" name="title" id="title"
                        onChange={validateTitle}
                        value={title} className="rounded form-control" />
                    {titleError ? <p className="text-danger">{titleError}</p> : ""}
                </div>

                {/* <!-- Price --> */}
                <div className="form-group">
                    <label htmlFor="price" className="form-label text-white">Price </label>
                    <input type="number" name="price" id="price"
                        onChange={validatePrice}
                        value={price} className="rounded form-control" />
                    {priceError ? <p className="text-danger">{priceError}</p> : ""}
                </div>

                {/* <!-- Description --> */}
                <div className="form-group">
                    <label htmlFor="description" className="form-label text-white">Description </label>
                    <input type="text" name="description" id="description"
                        onChange={validateDescription}
                        value={description} className="rounded form-control mb-2" />
                </div>

                <input type="submit" value="Create" />
                {serverError ? <p className="text-danger">{serverError}</p> : ""}

            </div>
        </form>
    )
}

export default ProductForm