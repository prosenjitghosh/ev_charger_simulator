import React from 'react';
import { Typography } from '@mui/material';

const stateColors = {
  Offline: 'gray',
  Online: 'blue',
  Charging: 'green',
  Ready:'yellow',
  Fault: 'red',
};

export const ChargerStateIndicator = ({ state }) => {
  const color = stateColors[state];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Typography>State: {state}</Typography>
      {color && (
        <span
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: color,
            borderRadius: '50%',
          }}
        ></span>
      )}
    </div>
  );
};
