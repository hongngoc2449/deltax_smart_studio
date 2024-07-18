import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropertyButton from './PanelButton';

const PropertiesPanel: React.FC = () => {
  const properties = [
    { button: 'X', value: 100 },
    { button: 'Y', value: 100 },
    { button: 'Z', value: -700 },
    { button: 'W', value: 100 },
    { button: 'U', value: 100 },
    { button: 'V', value: 100 },
    { button: 'F', value: 100 },
    { button: 'A', value: 100 },
    { button: 'J', value: 100 },
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 250, 
      position: 'absolute', 
      top: 20, 
      right: 20, 
      p: 2, 
      backgroundColor: '#d0d8e0', 
      borderRadius: '10px', 
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',  
        alignItems: 'center',
        mb: 2,
        background: '#dde5e9',
        borderRadius: '10px',
        padding: '8px',  
      }}>
        <Typography variant="subtitle1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#96a3b3'}}>Properties</Typography>
        <IconButton size="small">
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2}>
        {properties.map((prop, index) => (
          <Grid item xs={4} key={index}>
            <PropertyButton button={prop.button} value={prop.value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertiesPanel;
