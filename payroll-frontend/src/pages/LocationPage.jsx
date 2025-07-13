import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryMap = {
  calicut: [
    'skilled_technician',
    'service_advisor',
    'service_incharge',
    'spare_incharge',
    'floor_manager',
    'warranty_manager',
    'sales'
  ],
  thamarassery: [
    'service_manager_thamarassery',
    'service_consultant_thamarassery',
    'sme_thamarassery',
    'technician_thamarassery',
    'trainee_technician_thamarassery',
    'spare_parts_manager_thamarassery',
    'sales'
  ],
  atholi: [
    'technician_atholi',
    'sales_exec_atholi'
  ],
  engapuzha: [
  'technician_engapuzha',
  'sales_exec_engapuzha',
  'service_advisor_engapuzha'
]

};

const LocationPage = () => {
  const { location } = useParams();
  const categories = categoryMap[location] || [];

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
