export const handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Your server info data
  const serverInfo = {
    name: "#1| NASA | Noobs Welcome | Conquest 40Hz",
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
    stars: "13672",
    advanced: {
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

  try {
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serverInfo)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Failed to get server info' })
    };
  }
};
