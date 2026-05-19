import React from 'react';

export default function ErrorDisplay({ message }) {
  if (!message) return null;

  return (
    <div className="alert alert-danger text-center mx-auto my-3 shadow-sm" style={{ maxWidth: '450px', borderRadius: '10px' }}>
      <strong>Error:</strong> {message}
    </div>
  );
}
