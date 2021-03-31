import React from 'react';
import './global.css'
import Sidebar from '../src/sidebar/sidebar.js'
import Chat from './chat/chat.js'

function App() {

  return (
    <div className="window">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
