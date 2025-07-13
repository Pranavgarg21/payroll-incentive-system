import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ fixed import

export default function FloorManagerCalculator({ location, employeeId, category, employeeName }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    labour: '',
    spare: ''
  });

  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Floor Manager Incentive – Calicut"
      location={location}
      category={category}
      employeeName={employeeName}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Labour (₹):
        <input type="number" name="labour" value={formData.labour} onChange={handleChange} />
      </label>
      <label>Spare (₹):
        <input type="number" name="spare" value={formData.spare} onChange={handleChange} />
      </label>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <p><strong>💼 Labour Incentive:</strong> ₹{result.labourIncentive}</p>
          <p><strong>⚙️ Spare Incentive:</strong> ₹{result.spareIncentive}</p>
          <p><strong>🪙 Salary:</strong> ₹{result.salary}</p>
          <p><strong>Advance:</strong> ₹{result.advance}</p>
          <p><strong>Overtime Pay:</strong> ₹{result.overtimePay}</p>
          <p><strong>Holiday Bonus:</strong> ₹{result.holidayBonus}</p>
          <p className="text-xl mt-2"><strong>✅ Total Incentive:</strong> ₹{result.totalIncentive}</p>
        </div>
      )}
    </CalculatorWrapper>
  );
}
