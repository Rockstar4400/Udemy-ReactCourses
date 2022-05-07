import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);
        },1000);

        return()=>{
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(()=>{
        const search = async () =>{
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const rederedResults = results.map((response) => {
      return (
        <div key={response.pageid} className="item">
          <div className="right floated content">
            <a 
            className="ui button" 
            href={`https://en.wikipedia.org?curid-${response.pageid}`}
            >
                Go
            </a>
          </div>
          <div className="content">
            <div className="header">{response.title}</div>
            <span dangerouslySetInnerHTML={{ __html: response.snippet }}></span>
          </div>
        </div>
      );
    });

    return (
        <div>
            <div className="ui form">
                <div>
                    <label>Enter Search Term</label>
                    <input 
                    value = {term}
                    onChange = {e => setTerm(e.target.value)}
                    className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {rederedResults}
            </div>
        </div>
    );
};

export default Search;