import { useEffect, useState } from 'react';
import axios from 'axios';
import { CharacterResponse, Character } from '../types';

const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [nameFilter, setNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            setError(null);

            try {
                const params = new URLSearchParams();
                params.set('page', String(currentPage));
                if (nameFilter) params.set('name', nameFilter);
                if (statusFilter !== 'all') params.set('status', statusFilter);

                const response = await axios.get<CharacterResponse>(
                    `https://rickandmortyapi.com/api/character?${params.toString()}`
                );

                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to load characters'));
                setCharacters([]);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [currentPage, nameFilter, statusFilter]);

    return {
        characters,
        loading,
        error,
        currentPage,
        totalPages,
        setCurrentPage,
        setNameFilter,
        setStatusFilter,
    };
};

export default useCharacters;