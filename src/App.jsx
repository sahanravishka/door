import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import GenericPage from './pages/GenericPage';

// We map out all required pages. Unimplemented custom pages will fall back to GenericPage.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<Products />} />
          
          {/* Custom Informational Pages */}
          <Route path="about" element={<GenericPage title="Heritage & Craftsmanship" type="about" />} />
          <Route path="inspirations" element={<GenericPage title="Inspiration Gallery" type="inspirations" />} />
          <Route path="contact" element={<GenericPage title="Contact Us" type="contact" />} />
          
          {/* Resource & Support Pages */}
          <Route path="warranty" element={<GenericPage title="Warranty Information" type="warranty" />} />
          <Route path="literature" element={<GenericPage title="Literature & Catalogs" type="resources" />} />
          <Route path="maintenance" element={<GenericPage title="Care & Maintenance" type="resources" />} />
          <Route path="how-to/measure" element={<GenericPage title="How to Take Measurements" type="guides" />} />
          <Route path="how-to/install" element={<GenericPage title="Installation Guides" type="guides" />} />
          
          {/* Partner & B2B Pages */}
          <Route path="where-to-buy" element={<GenericPage title="Where to Buy" type="dealers" />} />
          <Route path="dealer-application" element={<GenericPage title="Dealer Application" type="forms" />} />
          <Route path="dealer-login" element={<GenericPage title="Dealer Portal Login" type="forms" />} />
          <Route path="volume-sales" element={<GenericPage title="Volume & Project Sales" type="forms" />} />
          
          {/* Legal */}
          <Route path="privacy-policy" element={<GenericPage title="Privacy Policy" type="legal" />} />
          <Route path="return-policy" element={<GenericPage title="Return Policy" type="legal" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
