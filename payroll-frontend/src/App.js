import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import CategoryPage from './pages/CategoryPage';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location/:location" element={<LocationPage />} />
      <Route path="/location/:location/:category" element={<CategoryPage />} />
      <Route path="/location/:location/:category/:employeeId" element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
