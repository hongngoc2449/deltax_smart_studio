import React from 'react';
import PropertiesPanel from './PropertiesPanel';

const Dashboard: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <h1>Dashboard</h1>
      <PropertiesPanel />
    </div>
  );
};

export default Dashboard;

