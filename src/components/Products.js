import React, { useContext } from 'react'
import { Datacontext } from './Dataprovider'
import { Link } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useContext(Datacontext)

    return (
        <div className="products">
            {products.map(product => (
                <div className="card" key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <img src={product.images[0]} alt="" />
                    </Link>
                    <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.content}</p>
                        <h4>${product.price}</h4>
                        <button>Add to card</button>
                    </div>
                </div>
            ))}




        </div>

    )
}

export default Products
