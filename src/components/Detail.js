import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Datacontext } from './Dataprovider'

export default function Details() {
    const { id } = useParams();
    const [products, setProducts] = useContext(Datacontext)
    const details = products.filter((product, index) => {
        return product._id === id
    })
    return (
        <div >
            {details.map(product => (
                <div className="detail-maindiv" key={product._id}>
                    <img src={product.images[0]} />
                    <div>
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <div className="colors-option">
                            {
                                product.colors.map((color, index) => (
                                    <button style={{ background: `${color}` }} key={index}></button>
                                ))
                            }
                        </div>
                        <div className="sizes-option">
                            {
                                product.sizes.map((size, index) => (
                                    <button key={index}>{size}</button>
                                ))
                            }
                        </div>
                        <p>{product.description}</p>
                        <p>{product.content}</p>
                        <div className="images-option">
                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                        </div>
                        <div className="detail-btn">
                            <button>Add to card</button>
                        </div>
                    </div>
                </div>

            ))
            }
        </div >
    )
}