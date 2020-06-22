import React from 'react';
import read from '../../data/read.json';

export default function Read(props) {

    console.log(read);

    return (
        <div>
            <p>Again, I'm a fan of <a target="_blank" rel="noopener noreferrer" href="https://patrickcollison.com/bookshelf">
                Patrick Collison's bookshelf</a> and 
                <a href="https://books.google.com/books?id=_ntDTaMUys8C&lpg=PT115&ots=E3jhWnG6aB&pg=PT124#v=onepage&q&f=false">"Umberto Eco theory of the library"</a>
                , so I'm gonna try to maintain a list of pieces I think I'd like to read at some point.</p>

            {read.toread.map((x, i) => <li key={i}>{x}</li>)}

            <p>Here are some that I've read or reread in recent memory that I could recommend.
                Might also try to include articles in the future if I like this enough.</p>

            {read.read.map((x, i) => <li key={i}>{x}</li>)}
        </div>
    )
}