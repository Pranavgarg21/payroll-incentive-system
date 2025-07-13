import React, { useState } from 'react';
import CalculatorWrapper from '../../CalculatorWrapper';
import CommonFields from '../CommonFields';

export default function SalesManagerThamarasseryCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 22000,
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
      title="Sales Manager – Thamarassery"
      location={location}
      category={category}
      employeeId={employeeId}
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
