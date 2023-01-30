import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const ProductLineITem = ({ id, title }) => {
    return (
        <form className="row mt-4">
                <Link to={`/${id}`}>{title}</Link>
                {/* <div>
                    <input type="checkbox" checked={isDone}
                        onChange={handleDone} className="me-4" />
                    <input type="submit" value="Delete" />
                </div> */}
            

        </form>
    )
}

export default ProductLineITem