const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/server-info', (req, res) => {
  res.json({
    name: "! RC3-BASEMAPS",
    gameMode: "Conquest Large",
    map: "Lancang Dam",
    type: "Custom",
    tickrate: "60 Hz",
    players: "60/64",
    ping: "104ms",
    region: "Europe - DE",
    punkbuster: "ON",
    fairfight: "ON",
    password: "OFF",
    preset: "NORMAL",
    advanced: {
      minimap: "ON",
      vehicles: "ON",
      friendlyFire: "OFF",
      killCam: "ON",
      hud: "ON",
      spotting: "ON",
      teamBalance: "ON"
    },
    rules: {
      tickets: 400,
      vehicleSpawnDelay: 25,
      bulletDamage: 100,
      kickAfterTeamKills: 5,
      playerHealth: 100,
      respawnTime: 100,
      kickIdle: 300,
      banAfterKicks: 3
    },
    discord: "https://discord.gg/3r5NK4d",
    description: "Server protected by The_K-50 AntiCheat. VIP rules, questions, appeals, visit epg.gg"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
