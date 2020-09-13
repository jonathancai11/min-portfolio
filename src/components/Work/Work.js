import React from 'react';
import pdf from '../../files/jonathan_cai_resume.pdf';

export default function Work(props) {
    return (
        <div className="section-content">
            <p>
                I've worked as a <b>software engineer</b> during 3 internships.
            </p>

            <p>
                At <b>Facebook</b>, I worked on their <b>Network Infra team</b>, improving the performance and reliability of a service that generates network device configs. <br/>
                The service handled ~3k requests/hour. Saw ~10% performance increase, and prevented several SEVs.
            </p>

            <p>
                At <b>JPMorgan</b>, I worked on <b>data modeling</b>, and <b>data engineering at scale</b>. <br/>
                This looked like 12,000+ data points with 40+ properties on an hourly basis. <br/>
                Dealt with constantly changing business requirements from investment bankers, varying data processing issues (asynchronous fetching on dynamic time cycles), etc.
            </p>

            <p>
                At <b><a href="https://www.sihuatech.com/" target="_blank">Sihua Technologies</a></b>, 
                I improved the deployment time for their <b>CI/CD</b> pipeline by 70%, but the tool was completely unmanagable, the code was absolute crap, and not used in production. 
            </p>

            <p>
                I also run an app development club at Rice called <b><a target="_blank" rel="noopener noreferrer" href="http://riceapps.org/">RiceApps</a></b>.
                We're about 50 members strong now, and we're building some pretty ambitious projects this year.
            </p>

            <p>
                At Rice, I've served as a <b>TA for a few CS courses</b> (head TA for COMP 322, and COMP 330) and had an unfortunately short and hardly significant undergrad research stint in deep learning.
            </p>

            {/* <p>For more details, check out <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a>.</p> */}

        </div>
    )
}
