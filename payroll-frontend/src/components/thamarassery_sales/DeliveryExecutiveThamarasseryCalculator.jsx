import React, { useState } from 'react';
import CalculatorWrapper from '../../CalculatorWrapper';
import CommonFields from '../CommonFields';

export default function DeliveryExecutiveThamarasseryCalculator({ employeeId, location, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 11000,
    overtimeHours: '',
    vehicleDelivered: '',
    pdiCount: '',
    gmaCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Delivery Executive – Thamarassery"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      {['vehicleDelivered', 'pdiCount', 'gmaCount'].map((field) => (
        <label key={field}>
          {field.replace(/([A-Z])/g, ' $1')}:
          <input
            type="number"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </label>
      ))}
    </CalculatorWrapper>
  );
}
