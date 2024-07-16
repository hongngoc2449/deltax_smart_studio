import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

interface ContentTableProps {
  title: string;
  small?: boolean;
}

const ContentTable: React.FC<ContentTableProps> = ({ title, small }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Typography variant="h6" sx={{ marginRight: '10px', fontSize: small ? '0.9rem' : '1rem'}}>{title}</Typography>
      <IconButton sx={{ ml: 'auto' }}>
        <DoneIcon />
      </IconButton>
    </Box>
  );
};

export default ContentTable;
