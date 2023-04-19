// default imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// css import
import './style.css';


const ProductViewAll = () => {
    const [products, setProducts] = useState([]);
    // products = view all products 

    // 1. use effect to display all products
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/")
        .then(res => {
            console.log(res);
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // 2. handle delete function 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            const filteredProducts = products.filter(products => {
                return products._id !== id;
            })

            setProducts(filteredProducts);
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
            <h2>All Products:</h2>
            {products.map(product => {
                const {_id, title, price, description} = product;
                return(
                    <div key={_id}>
                        <h3 style={{color: 'blue'}}>{title}</h3>
                        <p style={{fontWeight: 'bold'}}>Price:</p> 
                        <p>${price}</p>
                        <p style={{fontWeight: 'bold'}}>Description:</p>
                        <p>{description}</p>
                        <Link to={`/product/${_id}/`} className='input-spacing' style={{color: 'red'}}>View</Link>
                        <Link to={`/product/${_id}/edit`} className='input-spacing' style={{color: 'green'}}>Edit</Link>
                        <button onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductViewAll