import React, { useState } from 'react';
import CommonFields from '../CommonFields.jsx';
import CalculatorWrapper from '../../CalculatorWrapper'; // adjust if needed

export default function SalesExecutiveEngapuzha({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 8000,
    overtimeHours: '',
    bikeCount: '',
    cltTargetAchieved: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Sales Executive – Engapuzha"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
      employeeName={employeeName}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Retail Bikes:
        <input type="number" name="bikeCount" value={formData.bikeCount} onChange={handleChange} />
      </label>
      <label>
        CLT Target Achieved: <input type="checkbox" name="cltTargetAchieved" checked={formData.cltTargetAchieved} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
