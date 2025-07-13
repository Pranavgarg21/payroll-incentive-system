import React, { useState } from 'react';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ adjust path based on your structure

export default function SkilledTechnicianCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    name: '',
    totalLabour: '',
    freeServices: '',
    pdi: '',
    fittings: '',
    wheelTurning: '',
    hubSetting: '',
    tyreFitting: '',
    workingDays: '',
    advance: '',
    month: '',
    baseSalary: 15000,
    overtimeHours: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Skilled Technician Incentive – Calicut"
      location={location}
      category={category}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <div className="grid grid-cols-2 gap-4">
        {[
          ['Name', 'name'],
          ['Total Labour', 'totalLabour'],
          ['Free Services', 'freeServices'],
          ['PDI', 'pdi'],
          ['Fittings', 'fittings'],
          ['Wheel Turning', 'wheelTurning'],
          ['Hub Setting', 'hubSetting'],
          ['Tyre Fitting', 'tyreFitting'],
          ['Working Days', 'workingDays'],
          ['Advance', 'advance'],
          ['Base Salary', 'baseSalary'],
          ['Overtime Hours', 'overtimeHours']
        ].map(([label, name]) => (
          <label key={name}>
            {label}:
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
            />
          </label>
        ))}

        <label>
          Month:
          <select name="month" value={formData.month} onChange={handleChange}>
            <option value="">Select Month</option>
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'
            ].map((m) => (
              <option key={m.toLowerCase()} value={m.toLowerCase()}>{m}</option>
            ))}
          </select>
        </label>
      </div>
    </CalculatorWrapper>
  );
}
