import React, { useState } from 'react';
import axios from 'axios';
import CommonFields from './CommonFields';

export default function WarrantyManagerCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    warrantyLabour: '',
    pdi: ''
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
      alert("Calculation failed");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Warranty Manager Incentive</h2>
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Warranty Labour (₹):
        <input type="number" name="warrantyLabour" value={formData.warrantyLabour} onChange={handleChange} />
      </label>
      <label>PDI Jobs:
        <input type="number" name="pdi" value={formData.pdi} onChange={handleChange} />
      </label>

      <button onClick={handleCalculate} className="bg-blue-600 text-white px-4 py-2 mt-4">Calculate</button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <p><strong>🧾 Warranty Incentive:</strong> ₹{result.warrantyIncentive}</p>
          <p><strong>🧩 PDI Incentive:</strong> ₹{result.pdiIncentive}</p>
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
