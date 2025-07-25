import React from 'react';
import { Link } from 'react-router-dom';

const locations = ['calicut', 'thamarassery', 'atholi', 'engapuzha'];

const HomePage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Payroll Locations</h2>
      
      {/* View Saved Data Button */}
      <div className="text-center mb-4">
        <Link to="/view" className="btn btn-success">
          View Saved Data
        </Link>
      </div>

      {/* Location Buttons */}
      <div className="row justify-content-center g-3">
        {locations.map((location, idx) => (
          <div className="col-md-3" key={idx}>
            <Link to={`/location/${location}`} className="btn btn-outline-primary w-100 text-capitalize">
              {location}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
