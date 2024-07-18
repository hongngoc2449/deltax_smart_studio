import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Dashboard from './components/DashboardTab/Dashboard';
import Flow from './components/Flowtab/Flow';
import Vision from './components/VisionTab/Vision';
import './App.css';

import playIcon from './assets/icons/PlayIcon.svg';
import stopIcon from './assets/icons/StopIcon.svg';
import dashboardIcon from './assets/icons/DashboardIcon.svg';
import flowIcon from './assets/icons/FlowIcon.svg';
import visionIcon from './assets/icons/VisionIcon.svg';

const App: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <div className="button-wrapper">
            <div className="button-icon">
              <img src={playIcon} alt="Play" className="header-icon" />
            </div>
            <div className="button-icon">
              <img src={stopIcon} alt="Stop" className="header-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/Dashboard">
                  <div className={`tabIcon-wrapper ${currentPath === '/Dashboard' ? 'active' : ''}`}>
                    <img src={dashboardIcon} alt="Dashboard" className="icon" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Flow">
                  <div className={`tabIcon-wrapper ${currentPath === '/Flow' ? 'active' : ''}`}>
                    <img src={flowIcon} alt="Flow" className="icon" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Vision">
                  <div className={`tabIcon-wrapper ${currentPath === '/Vision' ? 'active' : ''}`}>
                    <img src={visionIcon} alt="Vision" className="icon" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Flow" element={<Flow />} />
            <Route path="/Vision" element={<Vision />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;