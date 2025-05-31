import React, { useState } from 'react';
import axios from 'axios';
import CommonFields from './CommonFields';

export default function ServiceInchargeCalculator({ location, employeeId, category }) {
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

  const [result, setResult] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalculate = async () => {
    try {
      const payload = {
        ...formData,
        location,
        employeeId,
        category
      };
      const res = await axios.post(`http://127.0.0.1:5000/calculate/${category}`, payload);
      setResult(res.data);
      setIsSaved(false);
    } catch (err) {
      console.error(err);
      alert('Calculation failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Service In-Charge Incentive</h2>
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

      <button onClick={handleCalculate} className="bg-blue-600 text-white px-4 py-2 mt-4">Calculate</button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <p><strong>💼 Labour Incentive:</strong> ₹{result.labourIncentive}</p>
          <p><strong>⚙️ Spare Incentive:</strong> ₹{result.spareIncentive}</p>
          <p><strong>🛢 GMA Incentive:</strong> ₹{result.gmaIncentive}</p>
          <p><strong>🎯 Target Bonus:</strong> ₹{result.targetBonus}</p>
          <p><strong>🪙 Salary:</strong> ₹{result.salary}</p>
          <p><strong>Advance:</strong> ₹{result.advance}</p>
          <p><strong>Overtime Pay:</strong> ₹{result.overtimePay}</p>
          <p><strong>Holiday Bonus:</strong> ₹{result.holidayBonus}</p>
          <p className="text-xl mt-2"><strong>✅ Total Incentive:</strong> ₹{result.totalIncentive}</p>
        </div>
      )}
    </div>
  );
}
