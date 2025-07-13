import React from 'react';
import CalculatorWrapper from '../../CalculatorWrapper';

export default function RegistrationExecutiveThamarasseryCalculator({ location, employeeId, category, employeeName }) {
  const getPayload = () => ({
    note: 'No incentive applicable for this role.'
  });

  return (
    <CalculatorWrapper
      title="Registration Executive – Thamarassery"
      location={location}
      category={category}
      employeeName={employeeName}
      employeeId={employeeId}
      getPayload={getPayload}
    >
      <p className="alert alert-info">No incentive applicable for this role.</p>
    </CalculatorWrapper>
  );
}
