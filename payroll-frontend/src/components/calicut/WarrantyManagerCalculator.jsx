import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ Adjust if path differs

export default function WarrantyManagerCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    warrantyLabour: '',
    pdi: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Warranty Manager Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Warranty Labour (₹):
        <input type="number" name="warrantyLabour" value={formData.warrantyLabour} onChange={handleChange} />
      </label>
      <label>PDI Jobs:
        <input type="number" name="pdi" value={formData.pdi} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
