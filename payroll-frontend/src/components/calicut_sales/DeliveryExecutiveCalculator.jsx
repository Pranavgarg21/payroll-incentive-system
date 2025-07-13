import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // Adjust path if necessary

export default function DeliveryExecutiveCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    baseSalary: 11000,
    advance: '',
    overtimeHours: '',
    registrationCount: '',
    rsaTeam: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Delivery Executive Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>
        Registrations (count):
        <input type="number" name="registrationCount" value={formData.registrationCount} onChange={handleChange} />
      </label>
      <label>
        Part of RSA Team:
        <input type="checkbox" name="rsaTeam" checked={formData.rsaTeam} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
