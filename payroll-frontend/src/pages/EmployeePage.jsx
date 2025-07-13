// src/pages/EmployeePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import SkilledTechnicianCalculator from '../components/calicut/SkilledTechnicianCalculator';
import ServiceAdvisorCalculator from '../components/calicut/ServiceAdvisorCalculator';
import ServiceInchargeCalculator from '../components/calicut/ServiceInchargeCalculator';
import SpareInchargeCalculator from '../components/calicut/SpareInchargeCalculator';
import FloorManagerCalculator from '../components/calicut/FloorManagerCalculator';
import WarrantyManagerCalculator from '../components/calicut/WarrantyManagerCalculator';
import TechnicianCalculator from '../components/thamarassery/TechnicianCalculator.jsx';
import TraineeTechnicianCalculator from '../components/thamarassery/TraineeTechnicianCalculator.jsx';
import SparePartsManagerCalculator from '../components/thamarassery/SparePartsManagerCalculator.jsx';
import ServiceManagerCalculator from '../components/thamarassery/ServiceManagerCalculator.jsx';
import ServiceConsultantCalculator from '../components/thamarassery/ServiceConsultantCalculator.jsx';
import SMECalculator from '../components/thamarassery/SMECalculator.jsx';
import TechnicianCalculatorAtholi from '../components/atholi/TechnicianCalculator.jsx';
import SalesExecutiveCalculatorAtholi from '../components/atholi/SalesExecutiveCalculatorAtholi.jsx';
// Engapuzha Components
import TechnicianCalculatorEngapuzha from '../components/engapuzha/TechnicianCalculator.jsx';
import SalesExecutiveEngapuzha from '../components/engapuzha/SalesExecutiveCalculator.jsx';
import ServiceAdvisorEngapuzha from '../components/engapuzha/ServiceAdvisorCalculator.jsx';


import SalesManagerCalculator from '../components/calicut_sales/SalesManagerCalculator.jsx';
import SalesExecutiveCalculator from '../components/calicut_sales/SalesExecutiveCalculator.jsx';
import DeliveryExecutiveCalculator from '../components/calicut_sales/DeliveryExecutiveCalculator.jsx';
import CashierCalculator from '../components/calicut_sales/CashierCalculator';


import SalesManagerThamarasseryCalculator from '../components/thamarassery_sales/SalesManagerThamarasseryCalculator';
import SalesExecutiveThamarasseryCalculator from '../components/thamarassery_sales/SalesExecutiveThamarasseryCalculator';
import RegistrationExecutiveThamarasseryCalculator from '../components/thamarassery_sales/RegistrationExecutiveThamarasseryCalculator';
import DeliveryExecutiveThamarasseryCalculator from '../components/thamarassery_sales/DeliveryExecutiveThamarasseryCalculator';


const componentMap = {
  thamarassery: {
    service_manager_thamarassery: ServiceManagerCalculator,
    service_consultant_thamarassery: ServiceConsultantCalculator,
    sme_thamarassery: SMECalculator,
    technician_thamarassery: TechnicianCalculator,
    trainee_technician_thamarassery: TraineeTechnicianCalculator,
    spare_parts_manager_thamarassery: SparePartsManagerCalculator,

  }
};

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
      delivery_executive: ['Sreekanth'],
      accounts_manager: ['Fijina K'],
      accountant: ['Sandhya A'],
      account_assistance: ['Shahana'],
      cashier: ['Prabisha Babu N P'],
      hr: ['Nithya']
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

const categoryComponentMap = {
  skilled_technician: SkilledTechnicianCalculator,
  service_advisor: ServiceAdvisorCalculator,
  service_incharge: ServiceInchargeCalculator,
  spare_incharge: SpareInchargeCalculator,
  floor_manager: FloorManagerCalculator,
  warranty_manager: WarrantyManagerCalculator,
  service_manager_thamarassery: ServiceManagerCalculator,
  service_consultant_thamarassery: ServiceConsultantCalculator,
  sme_thamarassery: SMECalculator,
  technician_thamarassery: TechnicianCalculator,
  trainee_technician_thamarassery: TraineeTechnicianCalculator,
  spare_parts_manager_thamarassery: SparePartsManagerCalculator,
  technician_atholi: TechnicianCalculatorAtholi,
  sales_exec_atholi: SalesExecutiveCalculatorAtholi,
  technician_engapuzha: TechnicianCalculatorEngapuzha,
  sales_exec_engapuzha: SalesExecutiveEngapuzha,
  service_advisor_engapuzha: ServiceAdvisorEngapuzha,
  sales_manager: SalesManagerCalculator,
  sales_executive: SalesExecutiveCalculator,
  delivery_executive: DeliveryExecutiveCalculator,
  cashier: CashierCalculator,
  sales_manager_thamarassery: SalesManagerThamarasseryCalculator,
  sales_executive_thamarassery: SalesExecutiveThamarasseryCalculator,
  registration_executive_thamarassery: RegistrationExecutiveThamarasseryCalculator,
  delivery_executive_thamarassery: DeliveryExecutiveThamarasseryCalculator,



};

const EmployeePage = () => {
  const { location, category, subcategory, employeeId } = useParams();

  const effectiveCategory = subcategory || category;
  const name = subcategory
    ? employeeMap[location]?.[category]?.[subcategory]?.[employeeId]
    : employeeMap[location]?.[category]?.[employeeId];

  const Component = categoryComponentMap[effectiveCategory];

  return (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">{name}</h2>
    {Component ? (
      <Component
        employeeId={employeeId}
        employeeName={name}  // ✅ pass name here
        location={location}
        category={effectiveCategory}
      />
    ) : (
      <p>No calculator available for this category.</p>
    )}
  </div>
);

};

export default EmployeePage;

