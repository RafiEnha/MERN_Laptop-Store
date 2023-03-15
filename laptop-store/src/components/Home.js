import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Button LinkComponent={Link} to="/laptops" sx={{ marginTop:20 }} color="secondary" variant='contained'>
                    <Typography variant='h3'>Get Started</Typography>
                </Button>
            </Box>
        </div>
    );
};

export default Home;
