import React from 'react';
import { Paper, Typography } from '@mui/material';

interface PropertyButtonProps {
  button: string;
  value: number;
}

const PropertyButton: React.FC<PropertyButtonProps> = ({ button, value }) => {
  return (
    <Paper sx={{ 
      padding: '1px', 
      textAlign: 'center', 
      borderRadius: '10px', 
      backgroundColor: '#f0f0f0', 
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    }}>
      <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: '#96a3b3' }}>{button}</Typography>
      <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#96a3b3' }}>{value}</Typography>
    </Paper>
  );
};

export default PropertyButton;
