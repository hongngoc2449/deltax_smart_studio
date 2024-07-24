import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ContentTable from './ContentTable';
import FlowButton from './FlowButton';
import ToggleButton from './ToggleButton';

const FlowTab: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexDirection: isSmallScreen ? 'column' : 'row',
          marginBottom: '20px',
        }}
      >
        <FlowButton buttonText="ASSEMBLY" />
        <FlowButton buttonText="CALIBRATION" />
        <FlowButton buttonText="ASSEMBLY" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: isSmallScreen ? '3%' : '5%',
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? '100%' : '20%',
            border: '1px solid #ccc',
            padding: isSmallScreen ? '10px' : '20px',
            borderRadius: '10px',
            boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)',
            marginBottom: isSmallScreen ? '20px' : '14%',
            overflow: 'hidden',
          }}
        >
          <ContentTable title="1. Perspective" />
          <ContentTable title="2. Crop" />
          <ContentTable title="3. Mapping" />
          <Box sx={{ marginLeft: isSmallScreen ? '0' : '3px' }}>
            <ContentTable title="Image to Conveyor" small />
            <ContentTable title="Conveyor to Robot" small />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            border: '1px solid #ccc',
            padding: isSmallScreen ? '10px' : '20px',
            boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: isSmallScreen ? '1rem' : '1.25rem' }}>
            Switch Example
          </Typography>
          <ToggleButton
            label="Toggle Switch"
            customStyle={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default FlowTab;