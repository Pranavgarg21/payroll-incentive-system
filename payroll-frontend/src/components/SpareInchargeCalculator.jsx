import React, { useState } from 'react';
import axios from 'axios';
import CommonFields from './CommonFields';

export default function SpareInchargeCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    counterSale: '',
    spareTotal: ''
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
    } catch (error) {
      console.error(error);
      alert('Calculation failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Spare In-Charge Incentive</h2>
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Counter Sale (₹):
        <input type="number" name="counterSale" value={formData.counterSale} onChange={handleChange} />
      </label>
      <label>Total Spare MRP (₹):
        <input type="number" name="spareTotal" value={formData.spareTotal} onChange={handleChange} />
      </label>

      <button onClick={handleCalculate} className="bg-purple-600 text-white px-4 py-2 mt-4">Calculate</button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <p><strong>🧾 Counter Sale Incentive:</strong> ₹{result.counterIncentive}</p>
          <p><strong>🎯 Fixed Bonus:</strong> ₹{result.fixedBonus}</p>
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
