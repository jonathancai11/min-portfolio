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
                <p>I'm still exploring things, but I've built <b><a href="#projects">a lot</a></b> for the web, and I'm now trying to <b><a href="http://blog.jonathancai.com/blog/">write</a></b> about my experiences/lessons.</p>
                <p>Currently thinking about 💭:</p>
                <ul>
                    <li>What is the most optimal way to learn?</li>
                    <li>How do you build thriving communities online (eg HackerNews, ProductHunt)?</li>
                    <li>What are the most effective distribution strategies for makers?</li>
                    <li>How do you define yourself? And your purpose?</li>
                </ul>
                <p>I study <b>computer science</b> at <b>Rice University</b>, graduating in Spring 2021.</p>
                <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p>
            </div>
        </div>
    )
}