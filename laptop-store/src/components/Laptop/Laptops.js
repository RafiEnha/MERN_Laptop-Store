import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Laptop from './Laptop';
import "./Laptop.css";

const URL = "http://localhost:5000/laptops";
const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data);
};
const Laptops = () => {
    const [laptops, setLaptops] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setLaptops(data.laptops));
    }, []);
    console.log(laptops);
    return (
        <div>
            <ul>
                {laptops && laptops.map((laptop, i) => (
                    <li className='laptop' key={i}>
                        <Laptop laptop={laptop} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Laptops;
