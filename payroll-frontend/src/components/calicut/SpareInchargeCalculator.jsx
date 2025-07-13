import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // Adjust path based on your folder structure

export default function SpareInchargeCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    counterSale: '',
    spareTotal: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Spare In-Charge Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Counter Sale (₹):
        <input type="number" name="counterSale" value={formData.counterSale} onChange={handleChange} />
      </label>
      <label>Total Spare MRP (₹):
        <input type="number" name="spareTotal" value={formData.spareTotal} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
