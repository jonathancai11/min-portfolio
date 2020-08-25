import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {

    return (
    <div className="Sidebar">
        <p>Jonathan Cai</p>
        <Link to="/about">about</Link>
        <a href="http://blog.jonathancai.com/blog/">write</a>
        <Link to="/read">read</Link>
        <Link to="/work">work</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
    </div>
    )
}
