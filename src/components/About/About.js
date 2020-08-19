import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';
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
                <p>If you're a recruiter, or just interested in that kind of thing, here's <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a> (no guarantees on how up to date it is).</p>
                <i>Website last updated 8/17/20</i>
            </div>
        </div>
    )
}