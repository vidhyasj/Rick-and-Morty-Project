import React from 'react';
import Character from './Character';

const CharacterList = ({ characters, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div className="character-list">
        {characters.map(character => (
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
          />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;