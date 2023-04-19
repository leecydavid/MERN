// default imports 
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
// component imports
import ProductViewAll from './ProductViewAll';

const ProductForm = () => {
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");
    // using state so we can change values of our data base
    const [errors, setErrors] = useState(null);
    // error set to null because we are using ternary
    const navigate = useNavigate();
    // we need navigate to direct user to other page when onSubmit 

    // 1. handle submit function to create new product
    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        console.log(newProduct)

        axios.post("http://localhost:8000/api/product/", newProduct)
        .then(res => {
            console.log(res.data);
            navigate(`/`)
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <form className='form' onSubmit={createProduct}>
                {
                    errors?.title &&(
                        <p style={{color: 'red'}}>{errors.title?.message}</p>
                    )
                }
                {
                    errors?.price &&(
                        <p style={{color: 'red'}}>{errors.price?.message}</p>
                    )
                }
                {
                    errors?.description &&(
                        <p style={{color: 'red'}}>{errors.description?.message}</p>
                    )
                }
                {/* error messages */}
                
                <label>Title: </label>
                <input type="text" className='input-spacing' onChange={e => {setTitle(e.target.value)}}/>

                <label>Price: </label>
                <input type="Number" className='input-spacing' onChange={e => {setPrice(e.target.value)}}/>

                <label>Description: </label>
                <input type="text" onChange={e => {setDescription(e.target.value)}}/>

                <input type="submit" value="Submit Product" className='submit-spacing'/>
            </form>
            <ProductViewAll />
        </div>
    )
}

export default ProductForm