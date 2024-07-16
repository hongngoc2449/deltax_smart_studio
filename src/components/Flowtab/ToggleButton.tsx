import React, { useState } from 'react';
import { Switch, Box, Typography } from '@mui/material';

interface SwitchButtonProps {
  label?: string;
  customStyle?: React.CSSProperties; 
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ label, customStyle }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', ...customStyle }}>
      {label && <Typography>{label}</Typography>}
      <Switch checked={checked} onChange={handleChange} />
    </Box>
  );
};

export default SwitchButton;
