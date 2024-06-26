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
import { Approvals } from './screens/Approvals';
import { AssetApproval } from './screens/AssetApproval';
import { ReportCreation } from './screens/ReportCreation';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from './components/PrimaryButton';

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
  const [reportButton, setReportButton] = useState(null);

  useEffect(() => {
    setReportButton(null);
    if(location.pathname == '/dashboard') {
      setCurrentRoute('Dashboard Overview');
      setSubtitle('');
    } else if(location.pathname == '/reports') {
      setCurrentRoute('Asset Reports');
      setSubtitle('');
      setReportButton(
        <NavLink to = "/report-creation">
            <PrimaryButton text="Generate custom report"/>
        </NavLink>
    );
    } else if(location.pathname == '/auc') {
      setCurrentRoute('Assets Under Construction');
      setSubtitle('June 2024');
    } else if(location.pathname == '/drafts') {
      setCurrentRoute('Drafts');
      setSubtitle('AUC History');
    } else if(location.pathname == '/approvals') {
      setCurrentRoute('Approvals');
      setSubtitle('Submissions for Review');
    } else if(location.pathname == '/notifications') {
      setCurrentRoute('Notifications');
      setSubtitle('Stay up to date');
    } else if(location.pathname == '/asset-approval') {
      setCurrentRoute('Asset Aprovals');
      setSubtitle('Asset Under Construction');
    } else if(location.pathname == '/report-creation') {
      setCurrentRoute('Report Creation');
      setSubtitle('');
    }
  }, [location.pathname]);

  return (
      <div className="App">
          {
            location.pathname != '/' && (
              <>
                <Header role={role}/>
                <PageTitle title={currentRoute} subtitle={subtitle} button={reportButton}/>
              </>
            )
          }
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard role={role}/>} />
            <Route path="/reports" element={<AssetReports />} />
            <Route path="/auc" element={<AUC />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/asset-approval" element={<AssetApproval />} />
            <Route path="/report-creation" element={<ReportCreation />} />
          </Routes>
        </div>
  );
}

export default App;
