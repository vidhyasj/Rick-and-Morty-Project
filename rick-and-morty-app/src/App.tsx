import './App.css';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import useCharacters from './hooks/useCharacters';

const App = () => {
    const {
        characters,
        loading,
        error,
        currentPage,
        totalPages,
        setCurrentPage,
        setNameFilter,
        setStatusFilter,
    } = useCharacters();

    const handleFilterChange = (name: string, status: string) => {
        setNameFilter(name);
        setStatusFilter(status);
        setCurrentPage(1);
    };

    return (
        <div className="App">
            <h1>Rick and Morty Characters</h1>
            <Filters onFilterChange={handleFilterChange} />
            {loading && <p>Loading characters...</p>}
            {error && <p>Error fetching characters: {error.message}</p>}
            <CharacterList
                characters={characters}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default App;