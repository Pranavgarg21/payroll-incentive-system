import React, { useState } from 'react';
import axios from 'axios';

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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalculate = async () => {
    try {
      const res = await axios.post(`http://127.0.0.1:5000/calculate/${category}`, {
        ...formData,
        employeeId,
        location,
        category
      });
      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert('Calculation failed');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Skilled Technician Incentive Calculator</h2>
      <div className="row g-3">
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
          <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <input
              type="text"
              name={name}
              className="form-control"
              value={formData[name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="col-md-6">
          <label className="form-label">Month</label>
          <select name="month" className="form-select" value={formData.month} onChange={handleChange}>
            <option value="">Select Month</option>
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'
            ].map((m) => (
              <option key={m.toLowerCase()} value={m.toLowerCase()}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={handleCalculate} className="btn btn-primary mt-4">
        Calculate
      </button>

      {result && (
        <div className="mt-4 border p-3 rounded bg-light">
          <h5>Result:</h5>
          <p><strong>Labour Incentive:</strong> ₹{result.labourIncentive}</p>
          <p><strong>Service Incentive:</strong> ₹{result.serviceIncentive}</p>
          <p><strong>Salary:</strong> ₹{result.salary}</p>
          <p><strong>Advance Deducted:</strong> ₹{result.advance}</p>
          <p><strong>Overtime Pay:</strong> ₹{result.overtimePay}</p>
          <p><strong>Holiday Bonus:</strong> ₹{result.holidayBonus}</p>
          <hr />
          <p><strong>Total Incentive:</strong> ₹{result.totalIncentive}</p>
        </div>
      )}
    </div>
  );
}
