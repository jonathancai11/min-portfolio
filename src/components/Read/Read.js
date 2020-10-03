import React from 'react';
import read from '../../data/read.json';

export default function Read(props) {

    return (
        <div className="section-content">
            <div className="section-header">read</div>
            <p>I'm going to try to maintain a list of <b>books I'd like to read at some point</b>
                (inspired by <a target="_blank" rel="noopener noreferrer" href="https://patrickcollison.com/bookshelf">
                Patrick Collison's bookshelf</a> and what he cites as 
                <a href="https://books.google.com/books?id=_ntDTaMUys8C&lpg=PT115&ots=E3jhWnG6aB&pg=PT124#v=onepage&q&f=false">"Umberto Eco theory of the library"</a>.
                </p>

            {read.toread.map((x, i) => <li key={i}>{x}</li>)}

            <p>Here are some that I've <b>read or reread in recent memory</b> that I could recommend.
                Might also try to include articles in the future if I can bother to.</p>

            {read.read.map((x, i) => <li key={i}>{x}</li>)}
        </div>
    )
}