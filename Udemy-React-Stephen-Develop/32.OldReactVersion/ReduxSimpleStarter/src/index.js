import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCSBTsI650fbg-GeW8XKnTCt6LTuRBgjPs';

const App = () => {
    return (
        <SearchBar />
    );
}

ReactDom.render(<App/>,document.querySelector('.container'));
