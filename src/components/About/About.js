import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';
import pic from '../../files/me.jpg'
import './About.css'

export default function About(props) {
    return (
        <div className="AboutPage">
            <img src={pic} className="Picture"/>
            <div>
                <p>Hi, I'm Jonathan. I currently study computer science at rice university.</p>
                <p>This website is for random stuff related to my interests, work, and projects.</p>
                <p>If you're a recruiter, or just a no-bs kind of person, here's <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a> (no guarantees on how up-to-date it is).</p>
                <p>Website last updated 6/21/20</p>
            </div>
        </div>
    )
}