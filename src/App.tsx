import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Enterprise from './pages/Enterprise';
import Firstaid from './pages/Firstaid';
import Hospital from './pages/Hospital';
import Individual from './pages/Individual';
import Ourteam from './pages/Ourteam';
import Terms from './pages/Terms';
import Training from './pages/Training';
import PlaceholderPage from './components/PlaceholderPage';

import HospitalCoordinatorForm from './pages/HospitalCoordinatorForm';
import EmergencyStaffForm from './pages/EmergencyStaffForm';
import ParamedicalTrainerForm from './pages/ParamedicalTrainerForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="contacts" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          
          {/* Services Pages */}
          <Route path="basicsupport" element={<PlaceholderPage title="Basic Life Support" />} />
          <Route path="oxyzenambulanceservice" element={<PlaceholderPage title="Oxygen Ambulance Service" />} />
          <Route path="ventilatorambulanceservice" element={<PlaceholderPage title="Ventilator Ambulance Service" />} />
          <Route path="carpatienttransport" element={<PlaceholderPage title="Car Patient Transport" />} />
          
          {/* Form Pages */}

          <Route path="hospitalCoordinatorForm" element={<HospitalCoordinatorForm />} />
          <Route path="emergencyStaffForm" element={<EmergencyStaffForm />} />
          <Route path="paramedicalTrainerForm" element={<ParamedicalTrainerForm />} />
          
          {/* Info Pages */}
          <Route path="Careers" element={<Careers />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="individual" element={<Individual />} />
          <Route path="hospital" element={<Hospital />} />
          <Route path="training" element={<Training />} />
          <Route path="firstaid" element={<Firstaid />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="booking" element={<PlaceholderPage title="Book a Service" />} />
          <Route path="location" element={<PlaceholderPage title="Locations" />} />
          
          {/* Fallback */}
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
