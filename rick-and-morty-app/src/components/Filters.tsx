import React, { useState } from 'react';

interface FiltersProps {
  onFilterChange: (name: string, status: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    onFilterChange(newName, status);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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