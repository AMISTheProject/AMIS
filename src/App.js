import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { Header } from './components/Header';
import { PageTitle } from './components/PageTitle';
import { AUC } from './screens/AUC';
import { Dashboard } from './screens/Dashboard';
import { Drafts } from './screens/Drafts';
import { AssetReports } from './screens/AssetReports';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import RoleContext, { RoleProvider } from './Context';

function App() {
  return (
      <BrowserRouter>
        <RoleProvider>
          <AppMain />
        </RoleProvider>
      </BrowserRouter>
  );
}

function AppMain() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [subtitle, setSubtitle] = useState('');
  const { role, setRole } = useContext(RoleContext);

  useEffect(() => {
    if(location.pathname == '/') {
      setCurrentRoute('Dashboard Overview');
      setSubtitle('');
    } else if(location.pathname == '/reports') {
      setCurrentRoute('Asset Reports');
      setSubtitle('');
    } else if(location.pathname == '/auc') {
      setCurrentRoute('Assets Under Construction');
      setSubtitle('June 2024');
    } else if(location.pathname == '/drafts') {
      setCurrentRoute('Drafts');
      setSubtitle('AUC History');
    }
  }, [location.pathname]);

  return (
      <div className="App">
          {
            location.pathname != '/login' && (
              <>
                <Header />
                <PageTitle title={currentRoute} subtitle={subtitle}/>
              </>
            )
          }
          <Routes>
            <Route path="/" element={<Dashboard role={role}/>} />
            <Route path="/reports" element={<AssetReports />} />
            <Route path="/auc" element={<AUC />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
  );
}

export default App;
