import React from 'react';
import './Projects.css';
import projectData from '../../data/projects.json';


export default function Projects(props) {
    
    return (
        <div>
            <p>Here is every project I've ever worked on, along with the quantitative results and the lessons I've learned.</p>

            <p>Evidently, I've done a lot of things that I now look back on as <b>dumb</b>: stuff 
            that provides no value to me or other people, stuff that I didn't learned absolutely nothing from, etc.</p>

            <p>If a "results" or "lessons learned" cell is empty, that means it had no quantitative results 
                (likely due to not launching or having users) or I learned nothing from the experience of building the damn thing.</p>

            <p>Interestingly, there's not much correlation between dev time (time spent on development)
                 and the results or lessons learned.</p>

            <p>In my experience, it's very possible to learn 10x more and see 10x results from a week-long project vs a year-long project.</p>

            <p>That being said, I do think that time might have an magnifying effect on lessons learned (if any), mainly because I've felt
                like more time has been wasted, and so the burn stings a bit more.</p>

            <p>This has also been increasingly evident to me during my internships, the simple idea that hard work != results.</p>

            <p>But of course there are nuances to this...</p>
            
            <table>
                <tbody>
                    <tr>
                        <th>Project</th>
                        <th>Link</th>
                        <th>Org</th>
                        <th>Summary</th>
                        <th>Date</th>
                        <th>Dev Time</th>
                        <th>Status</th>
                        <th>Results</th>
                        <th>Lessons learned</th>
                    </tr>

                    {projectData.map((project, i) => {
                        return (
                        <tr key={i}>
                            <td>{project.name}</td>
                            <td><a target="_blank" rel="noopener noreferrer" href={project.link}>{project.link_display}</a></td>
                            <td>{project.organization}</td>
                            <td>{project.description}</td>
                            <td>{project.date}</td>
                            <td>{project.dev_time}</td>
                            <td>{project.status}</td>
                            <td>{project.results}</td>
                            <td>{project.lessons}</td>
                        </tr>);
                    })}
                </tbody>
            </table>

        </div>
    )
}