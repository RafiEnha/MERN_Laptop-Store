import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center' width={1000} marginLeft='auto' marginRight='auto'>
        <br/>
        <Typography variant='p' textAlign='center'>Program CRUD untuk toko laptop.</Typography>
        <br/>
        <Typography variant='p' textAlign='center'>Project ini dibuat menggunakan framework MERN Stack yaitu kombinasi dari mongoDB, ExpressJS, ReactJs, dan NodeJS. Dimana mongoDB menangani operasi database, ReactJS menangani fungsi pada frontend, kemudian ExpressJS dan NodeJS menangani urusan di sisi server dan API.</Typography>
        <br/>
        <Typography variant='h5'>By Rafi Enha</Typography>
      </Box>
    </div>
  );
};

export default About;
