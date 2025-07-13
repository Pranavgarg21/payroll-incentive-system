import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // Adjust path as needed

export default function SalesExecutiveCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 11000,
    overtimeHours: '',
    bikeRetail: '',
    gma: '',
    gear: '',
    ewRsa: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Sales Executive Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Bike Retail Count:
        <input type="number" name="bikeRetail" value={formData.bikeRetail} onChange={handleChange} />
      </label>
      <label>GMA Sale (₹):
        <input type="number" name="gma" value={formData.gma} onChange={handleChange} />
      </label>
      <label>Gear Sale (₹):
        <input type="number" name="gear" value={formData.gear} onChange={handleChange} />
      </label>
      <label>EW/RSA Amount (₹):
        <input type="number" name="ewRsa" value={formData.ewRsa} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
