import React from 'react';
import './Side.css';
import { Link } from "react-router-dom";
import Dashboard_img from '../Images/Dashboard_Layout.png';
import New_Ticket from '../Images/New Ticket.png';
import My_Ticket from '../Images/Two Tickets.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <span className="sidebar-item">
                <img src={Dashboard_img} alt="Dashboard" className="icon" />
                <Link to="/" className="sideLinks">
                    <span className="sidebarLinks">Dashboard</span>
                </Link>
            </span>
            <span className="sidebar-item">
                <img src={New_Ticket} alt="New Ticket" className="icon" />
                <Link to="/new_ticket" className="sideLinks">
                    <span className="sidebarLinks">New Ticket</span>
                </Link>
            </span>
            <span className="sidebar-item">
                <img src={My_Ticket} alt="My Ticket" className="icon" />
                <Link to="/my_ticket" className="sideLinks">
                    <span className="sidebarLinks">My Ticket</span>
                </Link>
            </span>
            <span className="sidebar-item mt-4">
                <Link to="/signin" className="sideLinks">
                    <button className="btn btn-primary loginBtn">Signin</button>
                </Link>
            </span>
        </div>
    );
}

export default Sidebar;
