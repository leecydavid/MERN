import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const ProductViewOne = () => {
    const {id} = useParams();
    const [viewproduct, setViewProduct] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setViewProduct(res.data);
        })
        .catch(err => {
            console.log(err);
            navigate("/product");
        })
    }, [id])


    const {title, price, description} = viewproduct
    return(
        <div>
            <Link to="/">Home</Link>
            <h3 style={{color: 'blue'}}>{title}</h3>
            <p style={{fontWeight: 'bold'}}>Price:</p> 
            <p>${price}</p>
            <p style={{fontWeight: 'bold'}}>Description:</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductViewOne;