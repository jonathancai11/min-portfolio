import React from 'react';
import pic from '../../files/me.jpg'
import './About.css'

export default function About(props) {
    return (
        <div className="AboutPage">
            <img src={pic} className="Picture"/>
            <div>
                <p>Hi, I'm Jonathan. Former sperm cell, future space dust.</p> 
                <p>I currently study computer science at rice university.</p>
                <p>This website is for anything related to my interests, work, and projects.</p>
                <i>Website last updated 8/17/20</i>
            </div>
        </div>
    )
}