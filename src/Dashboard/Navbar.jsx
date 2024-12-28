import React from 'react';
import './Navbar.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    return (
        
        <div className="navbar">
            <div className="navbar-left">
                <h1 className="title">Helpdesk</h1>
            </div>
            <div className="navbar-right">
                <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
                    <Button className="bg-dark text-white fs-5 fw-bold navBtn">BM</Button>
                    <Button className="bg-white text-dark fs-5 fw-bold navBtn">BI</Button>
                </ButtonGroup>
                <NotificationsIcon className="navIcons" />
                <PersonIcon className="navIcons" />
                <LogoutIcon className="navIcons" />
            </div>
        </div>
    );
};

export default Navbar;
