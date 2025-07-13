import React, { useState } from 'react';
import CalculatorWrapper from '../../CalculatorWrapper';
import CommonFields from '../CommonFields';

export default function SalesExecutiveThamarasseryCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 11000,
    overtimeHours: '',
    bikeRetail: '',
    gmaSale: '',
    gearSale: '',
    totalVehicleTarget: '',
    totalVehicleRetail: '',
    ewRsaAmount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Sales Executive – Thamarassery"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {[
        'bikeRetail',
        'gmaSale',
        'gearSale',
        'totalVehicleTarget',
        'totalVehicleRetail',
        'ewRsaAmount'
      ].map((field) => (
        <label key={field}>
          {field.replace(/([A-Z])/g, ' $1')}: 
          <input type="number" name={field} value={formData[field]} onChange={handleChange} />
        </label>
      ))}
    </CalculatorWrapper>
  );
}
