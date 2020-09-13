import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';

export default function Work(props) {
    return (
        <div className="section-content">
            <p>
                I've worked as a <b>software engineer</b> during 3 internships.
            </p>

            <p>
                At <b>Facebook</b>, I improved the performance, reliability, and architecture of a service to generate network device configs. <br/>
                The service handled ~3k requests per hour.
                Saw ~10% increase in performance, and prevented several SEVs.
            </p>

            <p>
                At <b>JPMorgan</b>, I worked on data modeling, and <b>data engineering at scale</b>. <br/>
                This looked like 12,000+ data points with 40+ properties on an hourly basis. <br/>
                Dealt with constantly changing business requirements from investment bankers, varying data processing issues (asynchronous fetching on dynamic time cycles), etc.
            </p>

            <p>
                At <b>Sihua</b>, I improved the deployment time for their CI/CD pipeline by 70%, but the tool was completely unmanagable, the code was absolute crap, and not used in production. 
            </p>

            <p>
                I also run an app development club at Rice called <b><a target="_blank" rel="noopener noreferrer" href="http://riceapps.org/">RiceApps</a></b>.
            </p>

            <p>
                At Rice, I've TA'd a few CS courses and had an unfortunately short and hardly significant undergrad research stint in deep learning.
            </p>

            {/* <p>For more details, check out <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a>.</p> */}

        </div>
    )
}
