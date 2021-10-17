import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hey Allison lets build a twitter clone🚀👩🏽‍💻 </h1>

      {/* {Sidebar} */}
          <Sidebar />
      {/* {Feed} */}
      
      {/* {Widgets} */}
    </div>
  );
}

export default App;
