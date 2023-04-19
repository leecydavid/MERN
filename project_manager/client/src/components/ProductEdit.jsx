import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const ProductEdit = () => {
    const {id} = useParams();
    // const [editproduct, setEditProduct] = useState({});
    const navigate = useNavigate();

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");
    const [titleupdate, setTitleUpdate] = useState();
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            const {
                title,
                price,
                description
            } = res.data
            // setEditProduct(res.data);
            setTitle(title);
            setTitleUpdate(title)
            setPrice(price);
            setDescription(description);
        })
        .catch(err => {
            console.log(err);
            navigate("/product");
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedProduct = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:8000/api/product/${id}`, editedProduct)
            .then(res => {
                console.log(res);
                navigate(`/product/${id}`);
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3> Edit {titleupdate} </h3>
            <form className='form' onSubmit={handleSubmit}>
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
                <label>Title: </label>
                <input value={title} type="text" className='input-spacing' onChange={e => {setTitle(e.target.value)}}/> 
                <label>Price: </label>
                <input value={price} type="Number" className='input-spacing' onChange={e => {setPrice(e.target.value)}}/>
                <label>Description: </label>
                <input value={description} type="text" onChange={e => {setDescription(e.target.value)}}/>
                <input type="submit" value={`Edit ${titleupdate}`} className='submit-spacing'/>
            </form>
        </div>
    )
}

export default ProductEdit;