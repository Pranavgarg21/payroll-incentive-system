import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const ViewSavedData = () => {
  const [location, setLocation] = useState('');
  const [entries, setEntries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://ev-motors.onrender.com/view/${location}`);
      setEntries(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load data");
    }
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${location}_saved_data.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportExcel = () => {
    const worksheetData = entries.map(entry => ({
      EmployeeName: entry.employeeName || `ID: ${entry.employeeId}`,
      Category: entry.category,
      Month: entry.data?.month || '',
      Incentive: Number(entry.data?.result || 0).toFixed(2),
    }));
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Incentives');
    XLSX.writeFile(workbook, `${location}_saved_incentives.xlsx`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">View Saved Incentives</h2>
      <div className="flex gap-4 items-center">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-select"
        >
          <option value="">Select Location</option>
          <option value="atholi">Atholi</option>
          <option value="calicut">Calicut</option>
          <option value="engapuzha">Engapuzha</option>
          <option value="thamarassery">Thamarassery</option>
        </select>
        <button className="btn btn-primary" onClick={fetchData}>Load</button>
        {entries.length > 0 && (
          <>
            <button className="btn btn-secondary" onClick={handleDownloadJSON}>Download JSON</button>
            <button className="btn btn-success" onClick={handleExportExcel}>Export Excel</button>
          </>
        )}
      </div>

      <div className="mt-4">
        {entries.length === 0 ? (
          <p className="text-muted">No entries found.</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Category</th>
                <th>Month</th>
                <th>Incentive</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.employeeName || `ID: ${entry.employeeId}`}</td>
                  <td>{entry.category}</td>
                  <td>{entry.data?.month || '-'}</td>
                  <td>₹{Number(entry.data?.result || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewSavedData;
