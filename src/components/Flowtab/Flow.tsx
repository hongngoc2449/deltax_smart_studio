import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ContentTable from './ContentTable';
import FlowButton from './FlowButton';
import ToggleButton from './ToggleButton';

const FlowTab: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', marginBottom: '20px',flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <FlowButton buttonText="ASSEMBLY" />
        <FlowButton buttonText="CALIBRATION" />
        <FlowButton buttonText="ASSEMBLY" />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', }}>
        <Box sx={{ width: '20%', height: '50vh', marginRight: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)' }}>
          <ContentTable title="1. Perspective" />
          <ContentTable title="2. Crop" />
          <ContentTable title="3. Mapping" />
          <Box sx={{ marginLeft: '30px' }}>
            <ContentTable title="Image to Conveyor" small/>
            <ContentTable title="Conveyor to Robot" small/>
          </Box>
        </Box>

        <Box sx={{ flex: 1, border: '1px solid #ccc', padding: '20px',boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)', borderRadius: '10px'}}>
          <Typography variant="h6">Switch Example</Typography>
          <ToggleButton label="Toggle Switch" customStyle={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }} />
        </Box>
      </Box>
    </div>
  );
};

export default FlowTab;
