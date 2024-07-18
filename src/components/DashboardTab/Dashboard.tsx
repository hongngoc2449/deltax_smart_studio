import React from 'react';
import PropertiesPanel from './PropertiesPanel';
import { useTheme, useMediaQuery, Box } from '@mui/material';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', height: '100%', padding: isSmallScreen ? '10px' : '20px' }}>
      <PropertiesPanel />
    </Box>
  );
};

export default Dashboard;
