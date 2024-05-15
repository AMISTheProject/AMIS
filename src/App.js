import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PageTitle } from './components/PageTitle';
import { AUC } from './screens/AUC';
import { Dashboard } from './screens/Dashboard';
import { AssetReports } from './screens/AssetReports';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

function App() {
  return (
      <BrowserRouter>
        <AppMain />
      </BrowserRouter>
  );
}

function AppMain() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [subtitle, setSubtitle] = useState('');

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
      setSubtitle('');
    }
  }, [location.pathname]);

  console.log('Current route:', currentRoute);

  return (
      <div className="App">
          <Header />
          <PageTitle title={currentRoute} subtitle={subtitle}/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<AssetReports />} />
            <Route path="/auc" element={<AUC />} />
            <Route path="/drafts" element={<Home />} />
          </Routes>
        </div>
  );
}

export default App;
