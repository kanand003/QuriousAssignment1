import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/server-info')
      .then(response => {
        setServerInfo(response.data);
      });
  }, []);

  if (!serverInfo) return <p>Loading...</p>;

  return (
    <div>
      <h1>{serverInfo.name}</h1>
      <p>Ping: {serverInfo.ping}ms</p>
      <p>Players: {serverInfo.players}/{serverInfo.maxPlayers}</p>
      <p>Map: {serverInfo.map}</p>
      <p>Mode: {serverInfo.mode}</p>
      <p>Region: {serverInfo.region}</p>
    </div>
  );
}

export default App
