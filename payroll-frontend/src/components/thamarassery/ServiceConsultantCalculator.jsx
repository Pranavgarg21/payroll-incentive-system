import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ adjust the path if needed

export default function ServiceConsultantCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 13000,
    overtimeHours: '',
    polish: '',
    teflon: '',
    waterWash: '',
    buffing: '',
    swingArmGreasing: '',
    wheelTurning: '',
    labour: '',
    spare: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Service Consultant – Thamarassery"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {[
        'polish',
        'teflon',
        'waterWash',
        'buffing',
        'swingArmGreasing',
        'wheelTurning',
        'labour',
        'spare'
      ].map(name => (
        <label key={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}:
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
