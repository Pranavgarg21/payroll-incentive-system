import React from 'react';
import { useParams, Link } from 'react-router-dom';

const employeeMap = {
  calicut: {
    skilled_technician: [
      'Ameer Suhail', 'Jithin K V K', 'Amal C C', 'Muhammed Favas',
      'Swaroop T', 'Abhinand', 'Vyshakh', 'Athul',
      'Arjun T C', 'Thejas', 'Adithyan', 'Libin Das TSMRTY'
    ],
    service_advisor: ['Anaj', 'Sibin Raj', 'Jithin Lal'],
    service_incharge: ['Arun Vysakh', 'Sachin Lal'],
    spare_incharge: ['Joji'],
    floor_manager: ['Sidhin'],
    warranty_manager: ['Shyam Danush']
  }
};

const CategoryPage = () => {
  const { location, category } = useParams();
  const employees = employeeMap[location]?.[category] || [];

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">
        {category.replace(/_/g, ' ')} — {location}
      </h2>

      {employees.length === 0 ? (
        <div className="alert alert-warning">No employees found in this category.</div>
      ) : (
        <div className="list-group">
          {employees.map((name, index) => (
            <Link
              key={index}
              to={`/location/${location}/${category}/${index}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
