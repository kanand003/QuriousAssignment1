// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Sample server info data
app.get('/api/server-info', (req, res) => {
  res.json({
    name: 'Epic Battlefield Server',
    ping: 34,
    isFavorited: true,
    players: 48,
    maxPlayers: 64,
    map: 'Operation Locker',
    mode: 'Conquest Large',
    region: 'EU West'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
