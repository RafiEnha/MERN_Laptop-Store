import React, { useState } from 'react';
import { AppBar, Tabs, Toolbar, Typography, Tab } from '@mui/material';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#2E2E2E" }} position='sticky'>

                <Toolbar>
                    <NavLink to="/" style={{ color: "white" }}>
                        <Typography>
                            <LaptopChromebookIcon />
                        </Typography>                        
                    </NavLink>
                    <Tabs textColor="white" >
                        <Tab LinkComponent={NavLink} to="/" label="Laptop Store" />
                    </Tabs>
                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="inherit"
                        indicatorColor="secondary"
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab LinkComponent={NavLink} to="/laptops" label="Catalog" />
                        <Tab LinkComponent={NavLink} to="/add" label="Add Laptop" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
