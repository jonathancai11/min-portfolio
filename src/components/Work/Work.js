import React from 'react';
import pdf from '../../files/simple_resume.pdf';

export default function Work(props) {
    return (
        <div>
            <p>
                I've been working as a software engineer (internships so far) - previously facebook, jpmorgan chase, sihua technologies (small startup in cupertino).
            </p>

            <p>
                At Facebook, I improved the performance, logging, monitoring and testing of a service to generate network device configs.
            </p>


            <p>
                At Jpmorgan, I developed application that pipelined asynchronous loan/bond data for investment bankers to visualize.
            </p>

            <p>
                At Sihua, I improved their CI/CD pipeline.
            </p>

            <p>
                I also run an app development club at Rice called <a target="_blank" rel="noopener noreferrer" href="http://riceapps.org/">RiceApps</a>.
            </p>

            <p>
                At Rice, I've TA'd a few classes and had an unfortunately short and hardly significant undergrad research stint in deep learning.
            </p>

            <p>For more details, check out <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a>.</p>

        </div>
    )
}