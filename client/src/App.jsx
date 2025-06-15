import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// Mock data to use when API is unavailable
const mockServerInfo = {
  name: "! RC3-BASEMAPS",
  shortGameMode: "CONQUEST LARGE",
  gameMode: "CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ",
  map: "Siege of Shanghai",
  type: "Normal",
  hz: "40 Hz",
  players: "64/64",
  ping: "47ms",
  region: "EUROPE - DE",
  punkbuster: "ON",
  fairfight: "ON",
  password: "OFF",
  preset: "NORMAL",
  stars: "13672",  advanced: {
    minimap: "ON",
    onlySquadLeaderSpawn: "OFF",
    vehicles: "ON",
    teamBalance: "ON",
    minimapSpotting: "ON",
    hud: "ON",
    "3pVehicleCam": "ON",
    regenerativeHealth: "ON",
    killCam: "ON",
    friendlyFire: "OFF",
    "3dSpotting": "ON",
    enemyNameTags: "ON"
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3
  },
  discord: "https://discord.gg/3r5NK4d",
  description: "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d",
  tickrate: "60 Hz"
};

function App() {
  const [serverInfo, setServerInfo] = useState(null);  useEffect(() => {    // Try to fetch from the API first
    const apiUrl = import.meta.env.VITE_API_URL;
    
    if (!apiUrl) {
      console.log('%c Using mock data: No API URL configured', 'color: yellow; font-weight: bold');
      setServerInfo(mockServerInfo);
      return;
    }

    console.log('%c Attempting to fetch from:', 'color: cyan; font-weight: bold', `${apiUrl}/server-info`);
    
    axios.get(`${apiUrl}/server-info`)
      .then((res) => {
        console.log('%c Successfully fetched data from API', 'color: green; font-weight: bold');
        console.log('API Response:', res.data);
        setServerInfo(res.data);
      })
      .catch((err) => {
        console.error('%c API Error:', 'color: red; font-weight: bold', err);
        console.log('%c Falling back to mock data', 'color: yellow; font-weight: bold');
        setServerInfo(mockServerInfo);
      });
  }, []);

  if (!serverInfo) return (
    <div className="loading-container">
      <div className="loading-text">Loading server data...</div>
      <div className="loading-spinner"></div>
    </div>
  );  return (    <div className="bf-app">
      <div className="menu-background"></div>
      <div className="menu-darker-bg"></div>
      <div className="friends-section"></div>
      <div className="bf-header">
        <div className="breadcrumb">
          <span>MULTIPLAYER / SERVER BROWSER /</span>
          <h1>SERVER INFO</h1>
        </div>
      </div>

      <div className="server-container">
        <div className="server-top">
          <h1 className="server-name">{serverInfo.name}</h1>
          <div className="server-mode">
            <div className="flag">🇩🇪</div> {serverInfo.gameMode}
          </div>
          <p className="server-description">{serverInfo.description}</p>
        </div>
        
        <div className="server-buttons">
          <button className="bf-button">JOIN</button>
          <button className="bf-button">SPECTATE</button>
          <button className="bf-button">JOIN AS COMMANDER</button>
          <div className="star-button"> 
            <span className="star-icon">★</span>
            <span>{serverInfo.stars}</span>
          </div>
        </div>

        <div className="server-stats">
          <div className="stat-box">
            <div className="stat-label">PLAYERS</div>
            <div className="stat-value">{serverInfo.players}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">PING</div>
            <div className="stat-value">{serverInfo.ping}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">TICKRATE</div>
            <div className="stat-value">{serverInfo.tickrate}</div>
          </div>
        </div>

        <div className="server-details">
          <div className="details-section">
            <h2>SETTINGS</h2>
            <div className="details-grid">
              <div className="setting-row">
                <div className="setting-name">REGION</div>
                <div className="setting-value">{serverInfo.region}</div>
              </div>
              <div className="setting-row">
                <div className="setting-name">PUNKBUSTER</div>
                <div className="setting-value">{serverInfo.punkbuster}</div>
              </div>
              <div className="setting-row">
                <div className="setting-name">FAIRFIGHT</div>
                <div className="setting-value">{serverInfo.fairfight}</div>
              </div>
              <div className="setting-row">
                <div className="setting-name">PASSWORD</div>
                <div className="setting-value">{serverInfo.password}</div>
              </div>
              <div className="setting-row">
                <div className="setting-name">PRESET</div>
                <div className="setting-value">{serverInfo.preset}</div>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h2>ADVANCED</h2>
            <div className="details-grid">
              {Object.entries(serverInfo.advanced).map(([key, value]) => (
                <div className="setting-row" key={key}>
                  <div className="setting-name">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
                  <div className="setting-value">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2>RULES</h2>
            <div className="details-grid">
              {Object.entries(serverInfo.rules).map(([key, value]) => (
                <div className="setting-row" key={key}>
                  <div className="setting-name">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
                  <div className="setting-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
          <div className="map-rotation">
          <h2>MAP ROTATION</h2>
          <div className="map-thumbnails">
            {/* Map rotation thumbnails would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
