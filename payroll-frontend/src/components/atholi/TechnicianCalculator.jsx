import React, { useState } from 'react';
import CommonFields from '../CommonFields.jsx';
import CalculatorWrapper from '../../CalculatorWrapper';

export default function TechnicianCalculatorAtholi({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
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

  const getPayload = () => formData;

  return (
    <CalculatorWrapper
      employeeId={employeeId}
      location={location}
      category={category}
      getPayload={getPayload}
      title="Technician – Atholi"
    >
      <CommonFields formData={formData} handleChange={handleChange} />
      {['labour', 'freeServices', 'pdi', 'fittings', 'wheelTurning', 'hubSetting', 'tyreFitting'].map(name => (
        <label key={name} className="d-block my-2">
          {name.replace(/([A-Z])/g, ' $1')}: 
          <input 
            type="number" 
            name={name} 
            value={formData[name]} 
            onChange={handleChange} 
            className="form-control mt-1"
          />
        </label>
      ))}
    </CalculatorWrapper>
  );
}
