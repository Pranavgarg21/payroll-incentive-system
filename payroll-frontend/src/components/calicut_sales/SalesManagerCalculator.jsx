import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // adjust the path if needed

export default function SalesManagerCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 22000,
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
      title="Sales Manager Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
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
