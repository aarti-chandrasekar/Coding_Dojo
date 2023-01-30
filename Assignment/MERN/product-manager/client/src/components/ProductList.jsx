import React from 'react'
import ProductLineITem from './ProductLineITem'

const ProductList = ({ productList, updateRefreshListFlag }) => {
    return (
            <div className="row d-flex  justify-content-center " >
            <div className="bg-dark m-2 p-3 w-50 text-center " >

            <h2>All Products</h2>
            {console.log( "Products ---> ", productList)}
            {productList.length !== 0 ?
                (!productList[0].hasOwnProperty("error") ?
                    <>{
                        productList.map((item, index) =>
                            <ProductLineITem key={index} id={item._id} title={item.title} />
                        )
                    }</>
                    :
                    <h2>{productList[0].error}</h2>)
                :
                ""
            }
            </div>
        </div>
    )
}

export default ProductList