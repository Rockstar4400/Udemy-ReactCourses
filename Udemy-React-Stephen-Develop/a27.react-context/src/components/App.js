import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import UserCreate from './UserCreate';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    render(){
        return (
            <div className="ui container">
                <LanguageStore>
                <LanguageSelector />
                               
                <ColorContext.Provider value="primary">
                    <UserCreate />
                </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
};

export default App;