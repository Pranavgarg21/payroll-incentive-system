// src/App.js
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import CategoryPage from './pages/CategoryPage';
import EmployeePage from './pages/EmployeePage';
import ViewSavedData from './pages/ViewSavedData';
import Footer from './components/Footer'; // if added

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location/:location" element={<LocationPage />} />
          <Route path="/location/:location/:category" element={<CategoryPage />} />
          <Route path="/location/:location/:category/:subcategory/:employeeId" element={<EmployeePage />} />
          <Route path="/location/:location/:category/:employeeId" element={<EmployeePage />} />
          <Route path="/view" element={<ViewSavedData />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
