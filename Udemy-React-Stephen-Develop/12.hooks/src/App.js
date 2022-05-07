import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'aasdasd',
        content: 'ac'   
    },
    {
        title: 'bbasdas',
        content: 'bc'   
    }
];

const options = [
    {
        label: 'The red',
        value: 'red'
    },
    {
        label: 'The blue',
        value: 'blue'
    },
    {
        label: 'The green',
        value: 'green'
    }
];


export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};
