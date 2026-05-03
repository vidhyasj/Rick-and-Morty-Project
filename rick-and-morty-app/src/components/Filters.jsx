import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onFilterChange(newName, status);
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onFilterChange(name, newStatus);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by name"
        value={name}
        onChange={handleNameChange}
      />
      <select value={status} onChange={handleStatusChange}>
        <option value="all">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>
    </div>
  );
};

export default Filters;