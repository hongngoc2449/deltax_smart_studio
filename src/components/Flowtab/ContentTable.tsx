import React from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

interface ContentTableProps {
  title: string;
  small?: boolean;
}

const ContentTable: React.FC<ContentTableProps> = ({ title, small }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const fontSize = small
    ? isSmallScreen
      ? '0.7rem'
      : isMediumScreen
      ? '0.8rem'
      : '0.9rem'
    : isSmallScreen
    ? '0.8rem'
    : isMediumScreen
    ? '0.9rem'
    : '1rem';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', flexWrap: 'nowrap' }}>
      <Typography variant="h6" sx={{ marginRight: '10px', fontSize, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {title}
      </Typography>
      <IconButton>
        <DoneIcon />
      </IconButton>
    </Box>
  );
};

export default ContentTable;