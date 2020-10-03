import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';
import pic from '../../files/me.jpg'
import './About.css'

export default function About(props) {
    return (
        <div className="section-content">
            <img src={pic} className="Picture"/><br/><br/>
            <div className="section-header">about</div>
            <div>
                <p>Hi, I'm <b>Jonathan</b>! 👋</p> 
                <p>I'm still exploring things, but I've built <b><a href="#projects">a lot</a></b> for the web, and I'm now trying to <b><a href="http://blog.jonathancai.com/blog/">write</a></b> about my experiences/lessons.</p>
                <p>I study <b>computer science</b> at <b>Rice University</b>, graduating in Spring 2021.</p>
                <p>Currently thinking about 💭:</p>
                <ul>
                    <li>How do you build thriving communities online (eg HackerNews, ProductHunt)?</li>
                    <li>What are the best ways to improve your ability to write (English, not code)?</li>
                </ul>
                <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p>
            </div>
        </div>
    )
}