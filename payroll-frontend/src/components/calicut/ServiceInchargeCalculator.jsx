import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ for calicut folder

export default function ServiceInchargeCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    labour: '',
    spare: '',
    gma: '',
    cases: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Service In-Charge Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Labour (₹):
        <input type="number" name="labour" value={formData.labour} onChange={handleChange} />
      </label>
      <label>Spare (₹):
        <input type="number" name="spare" value={formData.spare} onChange={handleChange} />
      </label>
      <label>GMA / Gear Oil (₹):
        <input type="number" name="gma" value={formData.gma} onChange={handleChange} />
      </label>
      <label>No. of EW Cases (Thamarassery only):
        <input type="number" name="cases" value={formData.cases} onChange={handleChange} />
      </label>
    </CalculatorWrapper>
  );
}
