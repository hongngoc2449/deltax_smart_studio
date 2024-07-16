import React from 'react';
import { Button } from '@mui/material';

interface FlowButtonProps {
  buttonText: string;
}

const FlowButton: React.FC<FlowButtonProps> = ({ buttonText }) => {
  return (
    <Button variant="contained" sx={{ fontFamily: 'Roboto, sans-serif', 
                                        color: '#96a3b3', 
                                        background: '#f0f0f0', 
                                        borderRadius: '50px', 
                                        padding: '6px 20px', 
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        width: '200px',
                                        height: '50px' 
                                    }}>{buttonText}</Button>
  );
};

export default FlowButton;
