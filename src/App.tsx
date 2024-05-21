import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing-page';
import FAQ from './pages/faq';
import ContactForm from './pages/contact-form';
import PersonalDetail from './pages/personaldetail';
import PostPage from './pages/post';
import RidesStays from './pages/rides-stays';
import ServiceProvider from './pages/service-provider';
import LocationContent from './pages/location-content';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/personal-detail' element={<PersonalDetail />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/rides' element={<RidesStays />} />
        <Route path='/service' element={<ServiceProvider />} />
        <Route path='/location-content' element={<LocationContent />} />
      </Routes>
    </Router>
  );
}

export default App;
