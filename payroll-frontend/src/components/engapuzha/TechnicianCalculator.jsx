import React, { useState } from 'react';
import CommonFields from '../CommonFields.jsx';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ adjust if needed

export default function TechnicianCalculatorEngapuzha({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 12000,
    overtimeHours: '',
    labour: '',
    freeServices: '',
    pdi: '',
    fittings: '',
    wheelTurning: '',
    hubSetting: '',
    tyreFitting: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Technician – Engapuzha"
      location={location}
      category={category}
      employeeName={employeeName}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {[
        'labour',
        'freeServices',
        'pdi',
        'fittings',
        'wheelTurning',
        'hubSetting',
        'tyreFitting'
      ].map(name => (
        <label key={name}>
          {name.replace(/([A-Z])/g, ' $1')}: 
          <input
            type="number"
            name={name}
            value={formData[name]}
            onChange={handleChange}
          />
        </label>
      ))}
    </CalculatorWrapper>
  );
}
