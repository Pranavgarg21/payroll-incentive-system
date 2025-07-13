import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ make sure this path is correct

export default function TraineeTechnicianCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 6000,
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
      title="Trainee Technician – Thamarassery"
      location={location}
      category={category}
      employeeId={employeeId}
      employeeName={employeeName}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {['labour', 'freeServices', 'pdi', 'fittings', 'wheelTurning', 'hubSetting', 'tyreFitting'].map((name) => (
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
