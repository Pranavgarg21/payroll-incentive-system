import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categories = [
  'skilled_technician',
  'service_advisor',
  'service_incharge',
  'spare_incharge',
  'floor_manager',
  'warranty_manager'
];

const LocationPage = () => {
  const { location } = useParams();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">{location} — Employee Categories</h2>
      <div className="row g-3">
        {categories.map((category, idx) => (
          <div className="col-md-4" key={idx}>
            <Link to={`/location/${location}/${category}`} className="btn btn-secondary w-100 text-capitalize">
              {category.replace(/_/g, ' ')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
