import React, { useState } from 'react';
import CommonFields from '../CommonFields.jsx';
import CalculatorWrapper from '../../CalculatorWrapper';

export default function SalesExecutiveCalculatorAtholi({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 10000,
    overtimeHours: '',
    bikeCount: '',
    tsyTargetAchieved: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const getPayload = () => formData;

  return (
    <CalculatorWrapper
      employeeId={employeeId}
      location={location}
      category={category}
      getPayload={getPayload}
      title="Sales & Service Executive – Atholi"
    >
      <CommonFields formData={formData} handleChange={handleChange} />
      
      <label className="d-block my-2">
        Retail Bikes Sold:
        <input
          type="number"
          name="bikeCount"
          value={formData.bikeCount}
          onChange={handleChange}
          className="form-control mt-1"
        />
      </label>

      <label className="form-check my-2">
        <input
          type="checkbox"
          name="tsyTargetAchieved"
          checked={formData.tsyTargetAchieved}
          onChange={handleChange}
          className="form-check-input"
        />
        TSY Target Achieved
      </label>
    </CalculatorWrapper>
  );
}
