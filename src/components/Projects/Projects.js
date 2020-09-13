import React from 'react';
import './Projects.css';
import projectData from '../../data/projects.json';


export default function Projects(props) {

    return (
        <div className="section-content">
            <p>Below is <b>every (software) project I've ever worked on</b>.</p>

            <p>Evidently, I've done a lot of things that I now look back on as dumb: stuff
            that provides no value to me or other people, stuff that I learned absolutely nothing from, etc.</p>

            <p>If "results" or "lessons" is empty, that means it had no quantitative results
                (likely due to not launching or having users) or I learned nothing from the experience of building the damn thing!</p>

            <p>Interestingly, there's <b>not much correlation between development time and the results or lessons learned.</b></p>

            <p>In my experience, it's very possible to learn 10x more and see 10x results from a week-long project vs a year-long project.</p>

            <p>That being said, I do think that time might have an magnifying effect on the lessons I've learned (if any), mainly because I've felt
                like more time has been wasted, and so the burn stings a bit more.</p>

            <p>This simple idea that <b>"hard" work {'&'} long hours != results</b> has also been increasingly evident to me during my internships.</p>

            <p>But of course there are nuances to this...</p>

            {projectData.map((project, i) => {
                return (
                    <div>
                        <div key={i} className="single-project">
                            <div className="single-project-header">
                                {project.icon ?
                                    <a className="no-highlight" target="_blank" rel="noopener noreferrer" href={project.link}>
                                        <img src={project.icon} height="50" style={{ borderRadius: 7, maxWidth: "100%" }} />
                                    </a> : <br />
                                }
                                <div>
                                    <h3>{project.name} </h3> {project.organization && <h5>{"for " + project.organization}</h5>}
                                    <p><a target="_blank" rel="noopener noreferrer" href={project.link}>{project.link_display}</a> </p>
                                </div>
                                <p>{project.date}</p>
                                <p>{project.dev_time}</p>
                            </div>
                            <div className="single-project-body">
                                <p>{project.description}</p>
                                <p>{project.stack}</p>
                                <p><b className="no-highlight">Status:</b> {project.status}</p>
                                <p><b className="no-highlight">Results:</b> {project.results}</p>
                                <p><b className="no-highlight">Lessons:</b> {project.lessons}</p>
                            </div>
                        </div>
                        <hr />
                    </div>);
            })}

            {/* <table className="ProjectsTable">
                <tbody>
                    <tr>
                        <th>Project</th>
                        <th>Summary</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Stack</th>
                        <th>Results</th>
                        <th>Lessons</th>
                    </tr>

                    {projectData.map((project, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    {project.name} <br />
                                    <a target="_blank" rel="noopener noreferrer" href={project.link}>{project.link_display}</a> <br />
                                    {
                                        project.organization ? "for " + project.organization : ""
                                    }
                                </td>
                                <td>{project.description}</td>
                                <td>
                                    {project.date + "/"} <br />
                                    {project.dev_time}
                                </td>
                                <td>{project.status}</td>
                                <td>{project.stack}</td>
                                <td>{project.results}</td>
                                <td>{project.lessons}</td>
                            </tr>);
                    })}
                </tbody>
            </table> */}

        </div>
    )
}
