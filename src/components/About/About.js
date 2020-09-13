import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';
import pic from '../../files/me.jpg'
import './About.css'

export default function About(props) {
    return (
        <div className="section-content">
            <img src={pic} className="Picture"/>
            <div>
                <p>Hi, I'm <b>Jonathan</b>! 👋</p> 
                <p>I study <b>computer science</b> at <b>Rice University</b>, graduating in Spring 2021.</p>
                <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                &nbsp; (no guarantees on how up to date it is).</p>
            </div>
        </div>
    )
}