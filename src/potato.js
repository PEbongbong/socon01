import React from 'react';

function Food(){
    return <h3>I love potato</h3>;
}

function App(){
    return (
        <div>
            <h1>Hello</h1>
            <Food fav= "kimchi"/>
        </div>
    );
}
export default App;