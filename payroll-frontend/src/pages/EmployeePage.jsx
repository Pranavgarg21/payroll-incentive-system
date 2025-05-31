// src/pages/EmployeePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import SkilledTechnicianCalculator from '../components/SkilledTechnicianCalculator';
import ServiceAdvisorCalculator from '../components/ServiceAdvisorCalculator';
import ServiceInchargeCalculator from '../components/ServiceInchargeCalculator';
import SpareInchargeCalculator from '../components/SpareInchargeCalculator';
import FloorManagerCalculator from '../components/FloorManagerCalculator';
import WarrantyManagerCalculator from '../components/WarrantyManagerCalculator';

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

const categoryComponentMap = {
  skilled_technician: SkilledTechnicianCalculator,
  service_advisor: ServiceAdvisorCalculator,
  service_incharge: ServiceInchargeCalculator,
  spare_incharge: SpareInchargeCalculator,
  floor_manager: FloorManagerCalculator,
  warranty_manager: WarrantyManagerCalculator
};

const EmployeePage = () => {
  const { location, category, employeeId } = useParams();
  const Component = categoryComponentMap[category];
  const name = employeeMap[location]?.[category]?.[employeeId];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      {Component ? (
        <Component employeeId={employeeId} location={location} category={category} />
      ) : (
        <p>No calculator available for this category.</p>
      )}
    </div>
  );
};

export default EmployeePage;
