import React from 'react';

export default function CommonFields({ formData = {}, handleChange }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <label>
        Month:
        <select name="month" value={formData.month || ''} onChange={handleChange}>
          <option value="">Select Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </label>

      <label>
        Working Days:
        <input type="number" name="workingDays" value={formData.workingDays || ''} onChange={handleChange} />
      </label>
      <label>
        Base Salary:
        <input type="number" name="baseSalary" value={formData.baseSalary || ''} onChange={handleChange} />
      </label>
      <label>
        Advance Taken:
        <input type="number" name="advance" value={formData.advance || ''} onChange={handleChange} />
      </label>
      <label>
        Overtime Hours:
        <input type="number" name="overtimeHours" value={formData.overtimeHours || ''} onChange={handleChange} />
      </label>
    </div>
  );
}
