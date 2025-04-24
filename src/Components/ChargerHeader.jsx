import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const ChargerHeader = ({ chargerId, onStateChange, onRemove }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        ID: {chargerId}
      </Typography>
      <Box>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ ml: 1, minWidth: 40, padding: 0 }}
          onClick={() => onStateChange(chargerId, 'Online')}
          title="Turn On"
        >
          <img
            src="/src/assets/power-on.svg"
            alt="Power On"
            style={{ width: 20, height: 20, padding: '3px' }}
          />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => onRemove(chargerId)}
          sx={{ ml: 1, minWidth: 40, padding: 0 }}
          title="Remove"
        >
          <img
            src="/src/assets/delete.svg"
            alt="Delete"
            style={{ width: 20, height: 20, padding: '3px' }}
          />
        </Button>
      </Box>
    </Box>
  );
};

