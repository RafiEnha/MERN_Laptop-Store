import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddLaptop = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        brand: '',
        image: ''
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
    }));
    // console.log(e.target.name, "Value", e.target.value);
    };
    const sendRequest = async() => {
        await axios.post("http://localhost:5000/laptops", {
            name: String(inputs.name),
            brand: String(inputs.brand),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => history('/laptops'))
    };
    return <form onSubmit={handleSubmit}>
        <Box display='flex' flexDirection='column' justifyContent='center' maxWidth={800} alignContent='center' alignSelf={'center'} marginLeft='auto' marginRight='auto' marginTop={5} marginBottom={5} >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin='dense' fullWidth variant='outlined' name='name' />
            <FormLabel>Brand</FormLabel>
            <TextField value={inputs.brand} onChange={handleChange} margin='dense' fullWidth variant='outlined' name='brand' />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin='dense' fullWidth variant='outlined' name='description' />
            <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handleChange} type='number' margin='dense' fullWidth variant='outlined' name='price' />
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin='dense' fullWidth variant='outlined' name='image' />
            <FormControlLabel control={<Checkbox checked={checked} onChange={ () => setChecked(!checked) } />} label='Available' />

            <Button variant='contained' color='secondary' type='submit'>Add Data</Button>
        </Box >
    </form>;
};

export default AddLaptop;
