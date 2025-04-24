import React from 'react';
import { Box, Button } from '@mui/material';

const controlButtons = [
  {
    label: 'Start Charging',
    icon: '/src/assets/charging.svg',
    alt: 'Charging',
    state: 'Charging',
  },
  {
    label: 'Stop Charging',
    icon: '/src/assets/stop.svg',
    alt: 'Stop',
    state: 'Ready',
  },
  {
    label: 'Simulate Fault',
    icon: '/src/assets/warning.svg',
    alt: 'Warning',
    state: 'Fault',
    color: 'error',
    padding: '5px',
  },
];

export const ChargerControlButtons = ({ chargerId, onStateChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" gap={1} flexWrap="wrap" mt={1}>
      {controlButtons.map(({ label, icon, alt, state, color = 'primary', padding = '3px' }) => (
        <Button
          key={state}
          variant="contained"
          color={color}
          onClick={() => onStateChange(chargerId, state)}
          startIcon={
            <img
              src={icon}
              alt={alt}
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: '50%',
                padding,
              }}
            />
          }
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

