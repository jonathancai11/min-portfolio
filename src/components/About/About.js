import React from 'react';
import pdf from '../../files/simple_resume.pdf';

export default function About(props) {
    return (
        <div>
            <p>Hi, I'm Jonathan. I study Computer Science at Rice University.</p>
            <p>This website is for random stuff related to my interests, work, and projects.</p>
            <p>Clear inspiration from <a target="_blank" rel="noopener noreferrer" href={"https://patrickcollison.com/"}>Patrick Collison</a>.</p>

            <p>If you're a no-BS kind of person, or just a recruiter, here's <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a> 
            (no guarantees on how up-to-date it is).</p>
            <p>Website last updated 6/21/20</p>
        </div>
    )
}