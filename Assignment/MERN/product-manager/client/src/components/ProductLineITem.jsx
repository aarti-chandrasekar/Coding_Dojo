import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const ProductLineITem = ({ id, title, handleDelete }) => {

    return (
        <form className="row mt-4">
                <div className=" d-flex  justify-content-center ">
                <Link to={`/${id}`} className="me-4 " >{title}</Link>
                    <input type="button" value="Delete" 
                        onClick={(e) => handleDelete(id)}/>
                </div>
            

        </form>
    )
}

export default ProductLineITem