import React, { useState } from 'react';
import axios from 'axios';

const CalculatorWrapper = ({ 
  employeeId, 
  employeeName,  // ✅ New prop to display & save employee name
  location, 
  category, 
  children, 
  getPayload, 
  title 
}) => {
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const payload = getPayload();
      const response = await axios.post('https://ev-motors.onrender.com/calculate', {
        location,
        category,
        employeeId,
        data: payload
      });
      setResult(response.data);
    } catch (err) {
      console.error("Calculation failed:", err);
      alert("Failed to calculate incentive.");
    }
  };

  const handleSave = async () => {
    try {
      const payload = getPayload();
      await axios.post('https://ev-motors.onrender.com/save', {
        location,
        category,
        employeeId,
        employeeName,  // ✅ Send to backend
        data: {
          ...payload,
          result: result?.incentive || 0
        }
      });
      alert("Saved successfully!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save.");
    }
  };

  return (
    <div className="container">
      <h3>{title}</h3>
      <p><strong>Employee:</strong> {employeeName}</p> {/* ✅ Optional: show name */}
      {children}
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={handleCalculate}>Calculate</button>
        <button className="btn btn-success" onClick={handleSave}>Save</button>
      </div>
      {result && (
        <div className="alert alert-success mt-3">
          Incentive: ₹{result.incentive}
        </div>
      )}
    </div>
  );
};

export default CalculatorWrapper;
