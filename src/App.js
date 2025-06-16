import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeWrapper from './components/HomeWrapper';
import Checkout from './components/Checkout';
import Design from './components/Design';
import Solution from './components/Solution';
import Support from './components/Support';
import Order from './components/Order';
// import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import ScrollToTop from './components/ScrollToTop';
// import Register from './components/Register';
// import Login from './components/Login';
// import UpdateUser from './components/UpdateUser';
// import DeleteUser from './components/DeleteUser';
import ChatWidget from './components/ChatWidget';


// Services Components - Matching your exact file names
import SoftwareDevelopment from './Services/SoftwareDevelopment';
import MobileAppDevelopment from './Services/MobileAppDevelopment';
import UIUXDesign from './Services/UIUXDesign';
import BusinessAnalysis from './Services/BusinessAnalysis';
import CustomProductDevelopment from './Services/CustomProductDevelopment';
import APIIntegration from './Services/APIIntegration';
import OffshoreDevelopment from './Services/OffshoreDevelopment';
import AIDevelopment from './Services/AIDevelopment';
import StaffAugmentation from './Services/StaffAugmentation';

// Industries Components - Matching your exact file names
import HealthCare from './Industries/HealthCare';
import Manufacturing from './Industries/Manufacturing';
import Pharmaceutical from './Industries/Pharmaceutical';
import Industrial from './Industries/Industrial';
import Agricultural from './Industries/Agricultural';
import Automotive from './Industries/Automotive';
import ECommerce from './Industries/ECommerce';
import Logistics from './Industries/Logistics';
import Construction from './Industries/Construction';

// Solutions Components - Matching your exact file names
import DigitalMarketing from './Solutions/DigitalMarketing';
import DesignAnimation from './Solutions/DesignAnimation';
import AISolutions from './Solutions/AISolutions';
import AssetTracking from './Solutions/AssetTracking';
import Biometrics from './Solutions/Biometrics';
import Blockchain from './Solutions/Blockchain';
import BIAnalytics from './Solutions/BIAnalytics';
import Database from './Solutions/Database';
import AssetManagement from './Solutions/AssetManagement';

// Portfolio Components - Matching your exact file names
import OurClients from './Portfolio/OurClients';
import OurWork from './Portfolio/OurWork';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <NewNavbar />

          {/* Main Content Area */}
          <main>
            <Routes>
              <Route path="/" element={<ScrollToTop><HomeWrapper /></ScrollToTop>} />
              <Route path="/checkout" element={<ScrollToTop><Checkout /></ScrollToTop>} />
              <Route path="/design" element={<ScrollToTop><Design /></ScrollToTop>} />
              <Route path="/contact" element={<ScrollToTop><Contact /></ScrollToTop>} />
              <Route path="/solution" element={<ScrollToTop><Solution /></ScrollToTop>} />
              <Route path="/support" element={<ScrollToTop><Support /></ScrollToTop>} />
              <Route path="/order" element={<ScrollToTop><Order /></ScrollToTop>} />
              {/* <Route path="/register" element={<ScrollToTop><Register /></ScrollToTop>} /> */}
              {/* <Route path="/login" element={<ScrollToTop><Login /></ScrollToTop>} /> */}
              {/* <Route path="/update-user" element={<ScrollToTop><UpdateUser /></ScrollToTop>} /> */}
              {/* <Route path="/delete-user" element={<ScrollToTop><DeleteUser /></ScrollToTop>} /> */}
              <Route path="/chatWidget" element={<ScrollToTop><ChatWidget /></ScrollToTop>} />
              
              {/* Services Routes */}
              <Route path="/services/software-development" element={<ScrollToTop><SoftwareDevelopment /></ScrollToTop>} />
              <Route path="/services/mobile-app" element={<ScrollToTop><MobileAppDevelopment /></ScrollToTop>} />
              <Route path="/services/ui-ux" element={<ScrollToTop><UIUXDesign /></ScrollToTop>} />
              <Route path="/services/business-analysis" element={<ScrollToTop><BusinessAnalysis /></ScrollToTop>} />
              <Route path="/services/custom-product" element={<ScrollToTop><CustomProductDevelopment /></ScrollToTop>} />
              <Route path="/services/api-integration" element={<ScrollToTop><APIIntegration /></ScrollToTop>} />
              <Route path="/services/offshore" element={<ScrollToTop><OffshoreDevelopment /></ScrollToTop>} />
              <Route path="/services/ai" element={<ScrollToTop><AIDevelopment /></ScrollToTop>} />
              <Route path="/services/staff-augmentation" element={<ScrollToTop><StaffAugmentation /></ScrollToTop>} />
              
              {/* Industries Routes */}
              <Route path="/industries/healthcare" element={<ScrollToTop><HealthCare /></ScrollToTop>} />
              <Route path="/industries/manufacturing" element={<ScrollToTop><Manufacturing /></ScrollToTop>} />
              <Route path="/industries/pharmaceutical" element={<ScrollToTop><Pharmaceutical /></ScrollToTop>} />
              <Route path="/industries/industrial" element={<ScrollToTop><Industrial /></ScrollToTop>} />
              <Route path="/industries/agricultural" element={<ScrollToTop><Agricultural /></ScrollToTop>} />
              <Route path="/industries/automotive" element={<ScrollToTop><Automotive /></ScrollToTop>} />
              <Route path="/industries/ecommerce" element={<ScrollToTop><ECommerce /></ScrollToTop>} />
              <Route path="/industries/logistics" element={<ScrollToTop><Logistics /></ScrollToTop>} />
              <Route path="/industries/construction" element={<ScrollToTop><Construction /></ScrollToTop>} />

              {/* Solutions Routes */}
              <Route path="/solution/digital-marketing" element={<ScrollToTop><DigitalMarketing /></ScrollToTop>} />
              <Route path="/solution/animation-graphic-design" element={<ScrollToTop><DesignAnimation /></ScrollToTop>} />
              <Route path="/solution/artificial-intelligence" element={<ScrollToTop><AISolutions /></ScrollToTop>} />
              <Route path="/solution/asset-tracking" element={<ScrollToTop><AssetTracking /></ScrollToTop>} />
              <Route path="/solution/biometrics" element={<ScrollToTop><Biometrics /></ScrollToTop>} />
              <Route path="/solution/blockchain" element={<ScrollToTop><Blockchain /></ScrollToTop>} />
              <Route path="/solution/business-intelligence-analytics" element={<ScrollToTop><BIAnalytics /></ScrollToTop>} />
              <Route path="/solution/database" element={<ScrollToTop><Database /></ScrollToTop>} />
              <Route path="/solution/digital-asset-management" element={<ScrollToTop><AssetManagement /></ScrollToTop>} />

              {/* Portfolio Routes */}
              <Route path="/portfolio/clients" element={<ScrollToTop><OurClients /></ScrollToTop>} />
              <Route path="/portfolio/work" element={<ScrollToTop><OurWork /></ScrollToTop>} />
              
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
        {/* Chat Widget outside main content flow */}
        <ChatWidget />
      </Router>
    </AuthProvider>
  );
}

export default App;