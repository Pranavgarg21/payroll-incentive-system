import React, { useState } from 'react';
import CommonFields from '../CommonFields';
import CalculatorWrapper from '../../CalculatorWrapper'; // ✅ correct import

export default function ServiceAdvisorCalculator({ location, employeeId, category, employeeName }) {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPayload = () => ({ ...formData });

  return (
    <CalculatorWrapper
      title="Service Advisor Incentive – Calicut"
      location={location}
      category={category}
      employeeName={employeeName}
      employeeId={employeeId}
      getPayload={getPayload}
    >
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
    </CalculatorWrapper>
  );
}
