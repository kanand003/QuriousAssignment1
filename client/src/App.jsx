import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/server-info')
      .then((res) => setServerInfo(res.data))
      .catch((err) => console.error('Failed to load server info:', err));
  }, []);

  if (!serverInfo) return <div>Loading server data...</div>;

  return (
    <div className="container">
      <h1>{serverInfo.name}</h1>
      <div className="subhead">
        <p>{serverInfo.gameMode} - {serverInfo.map} - {serverInfo.type} - {serverInfo.tickrate}</p>
        <p>{serverInfo.description}</p>
        <a href={serverInfo.discord} target="_blank" rel="noopener noreferrer">{serverInfo.discord}</a>
      </div>

      <div className="buttons">
        <button>Join</button>
        <button>Spectate</button>
        <button>Join as Commander</button>
        <button>⭐ {Math.floor(Math.random() * 20000)}</button>
      </div>

      <div className="grid">
        <div>
          <h2>Players</h2>
          <p>{serverInfo.players}</p>
          <h2>Ping</h2>
          <p>{serverInfo.ping}</p>
          <h2>Tickrate</h2>
          <p>{serverInfo.tickrate}</p>
        </div>

        <div>
          <h2>Settings</h2>
          <p>Region: {serverInfo.region}</p>
          <p>Punkbuster: {serverInfo.punkbuster}</p>
          <p>FairFight: {serverInfo.fairfight}</p>
          <p>Password: {serverInfo.password}</p>
          <p>Preset: {serverInfo.preset}</p>
        </div>

        <div>
          <h2>Advanced</h2>
          {Object.entries(serverInfo.advanced).map(([key, value]) => (
            <p key={key}>{key.replace(/([A-Z])/g, ' $1')}: {value}</p>
          ))}
        </div>

        <div>
          <h2>Rules</h2>
          {Object.entries(serverInfo.rules).map(([key, value]) => (
            <p key={key}>{key.replace(/([A-Z])/g, ' $1')}: {value}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
