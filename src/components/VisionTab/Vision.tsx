import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const VisionTab: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:8765');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('frame', (data: string) => {
      console.log('Received frame data');  // Log để kiểm tra việc nhận frame
      setImageSrc(`data:image/jpeg;base64,${data}`);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socket.on('error', (error) => {
      console.error('Error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="Camera Feed" /> : <p>Loading...</p>}
    </div>
  );
};

export default VisionTab;