import React, { useState } from 'react';
import axios from 'axios';
import CommonFields from './CommonFields';

export default function ServiceAdvisorCalculator({ location, employeeId, category }) {
  const [formData, setFormData] = useState({
    month: '',
    workingDays: '',
    advance: '',
    baseSalary: 15000,
    overtimeHours: '',
    labour: '',
    spare: '',
    gma: '',
    polish: '',
    teflon: '',
    waterWash: '',
    wheelTuning: '',
    buffing: '',
    swingArmGreasing: ''
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
        employeeId,
        location,
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
      <h2 className="text-xl font-bold mb-4">Service Advisor Incentive</h2>
      <CommonFields formData={formData} handleChange={handleChange} />

      <label>Total Labour:
        <input type="number" name="labour" value={formData.labour} onChange={handleChange} />
      </label>
      <label>Total Spare:
        <input type="number" name="spare" value={formData.spare} onChange={handleChange} />
      </label>
      <label>GMA (₹): 
        <input type="number" name="gma" value={formData.gma} onChange={handleChange} />
      </label>
      <label>Polish (count):
        <input type="number" name="polish" value={formData.polish} onChange={handleChange} />
      </label>
      <label>Teflon (count):
        <input type="number" name="teflon" value={formData.teflon} onChange={handleChange} />
      </label>
      <label>Water Wash (count):
        <input type="number" name="waterWash" value={formData.waterWash} onChange={handleChange} />
      </label>
      <label>Wheel Tuning (count):
        <input type="number" name="wheelTuning" value={formData.wheelTuning} onChange={handleChange} />
      </label>
      <label>Buffing (count):
        <input type="number" name="buffing" value={formData.buffing} onChange={handleChange} />
      </label>
      <label>Swing Arm Greasing (count):
        <input type="number" name="swingArmGreasing" value={formData.swingArmGreasing} onChange={handleChange} />
      </label>

      <button onClick={handleCalculate} className="bg-green-600 text-white px-4 py-2 mt-4">Calculate</button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <p><strong>💼 Labour Incentive:</strong> ₹{result.labourIncentive}</p>
          <p><strong>⚙️ Spare Incentive:</strong> ₹{result.spareIncentive}</p>
          <p><strong>🧽 Service Incentive:</strong> ₹{result.serviceIncentive}</p>
          <p><strong>🪙 Salary:</strong> ₹{result.salary}</p>
          <p><strong>➖ Advance:</strong> ₹{result.advance}</p>
          <p><strong>⏱ Overtime Pay:</strong> ₹{result.overtimePay}</p>
          <p><strong>🎉 Holiday Bonus:</strong> ₹{result.holidayBonus}</p>
          <p className="text-xl mt-2"><strong>✅ Final Total Incentive:</strong> ₹{result.totalIncentive}</p>
        </div>
      )}
    </div>
  );
}
