import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const LaptopDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get('http://localhost:5000/laptops/' + id).then((res) => res.data).then(data => setInputs(data.laptop));
        };
        fetchHandler();
    }, [id]);
    const sendRequest = async() => {
        await axios.put("http://localhost:5000/laptops/" + id, {
            name: String(inputs.name),
            brand: String(inputs.brand),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/laptops"))
    };
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
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
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label='Available' />

            <Button variant='contained' color='secondary' type='submit'>Update Data</Button>
        </Box >
    </form>;
}

export default LaptopDetail
