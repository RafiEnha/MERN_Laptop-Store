import { Button } from '@mui/material';
import axios from 'axios';
// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Laptop.css"

const Laptop = (props) => {
    const history = useNavigate();
    const { _id, name, brand, description, price, image } = props.laptop;
    const deleteHandler = async () => {
        await axios.delete('http://localhost:5000/laptops/' + _id).then((res) => res.data).then(() => history("/")).then(() => history("/laptops"));
    };
    return (
        <div className='card'>
            <img src={image} alt={name} />
                <article>{brand}</article>
                <h3>{name}</h3>
                <p>{description}</p>
                <h3>Rp{price}</h3>
                <Button color='secondary' variant='contained' LinkComponent={Link} to={'/laptops/' + _id} sx={{ mt: "auto" }}>Update</Button>
                <Button color='error' variant='contained' onClick={deleteHandler} sx={{ mt: "10px" }}>Delete</Button>
        </div>
    );
};

export default Laptop;
