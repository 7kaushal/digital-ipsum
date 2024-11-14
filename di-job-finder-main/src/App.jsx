import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JobSeekers from './components/JobSeekers';
import Employers from './components/Employers';
import JobListing from './components/JobListing';
import CompanyProfile from './components/CompanyProfile';
import PricingPage from './components/PricingPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/adobe-job-listing" element={<JobListing />} />
          <Route path="/company-profile-adobe" element={<CompanyProfile/>} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
