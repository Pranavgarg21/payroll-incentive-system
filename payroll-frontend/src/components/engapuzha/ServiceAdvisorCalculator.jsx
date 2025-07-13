import React, { useState } from 'react';
import CommonFields from '../CommonFields.jsx';
import CalculatorWrapper from '../../CalculatorWrapper'; // adjust path if needed

export default function ServiceAdvisorEngapuzha({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 12000,
    overtimeHours: '',
    labour: '',
    spare: '',
    amcCount: '',
    ewRsa: '',
    rsa: '',
    specialAmc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Service Advisor – Engapuzha"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {['labour', 'spare', 'amcCount', 'ewRsa', 'rsa', 'specialAmc'].map((name) => (
        <label key={name}>
          {name.replace(/([A-Z])/g, ' $1')}: 
          <input type="number" name={name} value={formData[name]} onChange={handleChange} />
        </label>
      ))}
    </CalculatorWrapper>
  );
}
