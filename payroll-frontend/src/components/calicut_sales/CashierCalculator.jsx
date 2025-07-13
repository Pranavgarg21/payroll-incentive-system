import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // Adjust path if needed

const CashierCalculator = ({ employeeId, location, category, employeeName }) => {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    registration_per_bike: '',
    ew_rsa_value: '',
    bikes_registered: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Cashier Incentive – Calicut"
      location={location}
      category={category}
      employeeName={employeeName}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Registration ₹ per Bike:
        <input type="number" name="registration_per_bike" value={formData.registration_per_bike} onChange={handleChange} />
      </label>
      <label>EW + RSA Amount (₹):
        <input type="number" name="ew_rsa_value" value={formData.ew_rsa_value} onChange={handleChange} />
      </label>
      <label>No. of Bikes Registered:
        <input type="number" name="bikes_registered" value={formData.bikes_registered} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
};

export default CashierCalculator;
