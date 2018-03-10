import React from 'react';

class App extends React.Component {
    render(){
        return  (
            <Contacts/>
        );
    }
}

class Contacts extends React.Component {
    render(){
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                    <li>Abet 010-0000-0001</li>
                    <li>Betty 010-0000-0002</li>
                    <li>Chalie 010-0000-0003</li>
                    <li>David 010-0000-0003</li>
                </ul>
            </div>
        );
    }
}
export default App;