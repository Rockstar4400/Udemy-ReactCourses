import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


class App extends Component {

    constructor(props){
    super(props);

    this.state = { videos: [] };

   const API_KEY = process.env.YOUTUBE_API_KEY;

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.querySelector('.container'));
