import React from 'react';
import { useParams, Link } from 'react-router-dom';

const employeeMap = {
  calicut: {
    skilled_technician: [
      'Ameer Suhail', 'Jithin K V K', 'Amal C C', 'Muhammed Favas',
      'Swaroop T', 'Abhinand', 'Vyshakh', 'Athul',
      'Arjun T C', 'Thejas', 'Adithyan', 'Libin Das TSMRTY'
    ],
    sales: {
      sales_manager: ['Nithin Raj'],
      sales_executive: ['Shijitha MP', 'Abhinraj R J', 'Sreeshu'],
      delivery_executive: ['Sreekanth']
    },
    service_advisor: ['Anaj', 'Sibin Raj', 'Jithin Lal'],
    service_incharge: ['Arun Vysakh', 'Sachin Lal'],
    spare_incharge: ['Joji'],
    floor_manager: ['Sidhin'],
    warranty_manager: ['Shyam Danush']
  },
  thamarassery: {
    service_manager_thamarassery: ['John'],
    service_consultant_thamarassery: ['Rishan', 'Nivin'],
    sme_thamarassery: ['Anaswara'],
    technician_thamarassery: ['Vimal Kumar', 'Libin', 'Sarang'],
    trainee_technician_thamarassery: ['Alan Martin', 'Abinav'],
    spare_parts_manager_thamarassery: ['Pratheesh Thoranittavitta'],
    sales: {
    sales_manager_thamarassery: ['Manu Raj U K'],
    sales_executive_thamarassery: ['Jishna K', 'XXXX', 'Ajnas'],
    registration_executive_thamarassery: ['Sreelakshmi'],
    delivery_executive_thamarassery: ['Ajith V R']
    }
},
  atholi: {
    technician_atholi: ['Arjun TC'],
    sales_exec_atholi: ['Shibila O K']
  },
  engapuzha: {
  technician_engapuzha: ['Aswin K'],
  sales_exec_engapuzha: ['Soni'],
  service_advisor_engapuzha: ['Jishnu N V']
}



};

const CategoryPage = () => {
  const { location, category } = useParams();
  const employees = employeeMap[location]?.[category];

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">
        {category.replace(/_/g, ' ')} — {location}
      </h2>

      {/* 👇 if sales is an object, show subcategory list */}
      {typeof employees === 'object' && !Array.isArray(employees) ? (
        Object.entries(employees).map(([subCat, empList]) => (
          <div key={subCat} className="mb-4">
            <h4 className="text-capitalize">{subCat.replace(/_/g, ' ')}</h4>
            <div className="list-group">
              {empList.map((name, index) => (
                <Link
                  key={index}
                  to={`/location/${location}/${category}/${subCat}/${index}`}
                  className="list-group-item list-group-item-action"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="list-group">
          {employees?.map((name, index) => (
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