import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ChargerStateIndicator} from './Components/ChargerStateIndicator';
import {ChargerControlButtons} from './Components/ChargerControlButtons';
import { ChargerHeader } from './Components/ChargerHeader';


const UpdateChargerStateCommand = (chargers, setChargers, chargerId, newState) => {
  //We can add validation here to check if the state transition is valid or not
  const execute = () => {
    const updated = chargers.map((c) =>
      c.id === chargerId ? { ...c, state: newState } : c
    );
    setChargers(updated);
  };

  return { execute };
};

function App() {
  const [chargers, setChargers] = useState(() => {
    const saved = localStorage.getItem('chargers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chargers', JSON.stringify(chargers));
  }, [chargers]);

  const addCharger = () => {
    const newCharger = { id: nanoid(), state: 'Offline' };
    setChargers([...chargers, newCharger]);
  };

  const removeCharger = (id) => {
    setChargers(chargers.filter((c) => c.id !== id));
  };

  const handleStateChange = (id, state) => {
    const command = UpdateChargerStateCommand(chargers, setChargers, id, state);
    command.execute();
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
              <ChargerHeader chargerId={charger.id} onStateChange={handleStateChange} onRemove={removeCharger}/>
              <ChargerStateIndicator state={charger.state} />
              <ChargerControlButtons chargerId={charger.id} onStateChange={handleStateChange}/>
            </Paper>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
