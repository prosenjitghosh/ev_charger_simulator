import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';

const STATES = ['offline', 'online', 'charging', 'ready', 'fault'];

function App() {
  const [chargers, setChargers] = useState(() => {
    const saved = localStorage.getItem('chargers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chargers', JSON.stringify(chargers));
  }, [chargers]);

  const addCharger = () => {
    const newCharger = { id: nanoid(), state: 'offline' };
    setChargers([...chargers, newCharger]);
  };

  const removeCharger = (id) => {
    setChargers(chargers.filter((c) => c.id !== id));
  };

  const updateState = (id, newState) => {
    setChargers(
      chargers.map((c) => (c.id === id ? { ...c, state: newState } : c))
    );
  };

  const renderControls = (charger) => {
    return (
      <Box display="flex" justifyContent="space-between" gap={1} flexWrap="wrap" mt={1}>
      <Button
        variant="contained"
        onClick={() => updateState(charger.id, 'charging')}
        startIcon={
        <img
          src="/src/assets/charging.svg"
          alt="Charging"
          style={{
          width: 20,
          height: 20,
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '3px',
          }}
        />
        }
      >
        Start Charging
      </Button>
      <Button
        variant="contained"
        onClick={() => updateState(charger.id, 'ready')}
        startIcon={
        <img
          src="/src/assets/stop.svg"
          alt="Stop"
          style={{
          width: 20,
          height: 20,
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '3px',
          }}
        />
        }
      >
        Stop Charging
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => updateState(charger.id, 'fault')}
        startIcon={
        <img
          src="/src/assets/warning.svg"
          alt="Warning"
          style={{
          width: 20,
          height: 20,
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '5px',
          }}
        />
        }
      >
        Simulate Fault
      </Button>
      </Box>
    );
  };

  return (
    <div style={{ width: '98vw' }}>
      <Container maxWidth="md">
        <Box textAlign="center" my={4}>
          <Typography variant="h3" gutterBottom>EV Charger Simulator</Typography>
          <Button variant="contained" color="primary" onClick={addCharger}>Add Charger</Button>
        </Box>
        <Box display="flex" flexDirection="column" margin="20px" gap={2}>
          {chargers.map((charger) => (
            <Paper key={charger.id} elevation={3} sx={{ p: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body1" sx={{ flexGrow: 1 }}>ID: {charger.id}</Typography>
                <Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 1, minWidth: 40, padding: 0 }}
                    onClick={() => updateState(charger.id, 'online')}
                    title="Turn On"
                  >
                    <img src="/src/assets/power-on.svg" alt="Power On" style={{ width: 20, height: 20, padding: "3px" }} />
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeCharger(charger.id)}
                    sx={{ ml: 1, minWidth: 40, padding: 0 }}
                    title="Remove"
                  >
                    <img src="/src/assets/delete.svg" alt="Delete" style={{ width: 20, height: 20, padding: "3px" }} />
                  </Button>
                </Box>
              </Box>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography>State: {charger.state}</Typography>
                {charger.state === 'charging' && (
                  <span style={{ width: '10px', height: '10px', backgroundColor: 'green', borderRadius: '50%' }}></span>
                )}
                {charger.state === 'ready' && (
                  <span style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' }}></span>
                )}
                {charger.state === 'fault' && (
                  <span style={{ width: '10px', height: '10px', backgroundColor: 'orange', borderRadius: '50%' }}></span>
                )}
              </div>
              {renderControls(charger)}
            </Paper>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
