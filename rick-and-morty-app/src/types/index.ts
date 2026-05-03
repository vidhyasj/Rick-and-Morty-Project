export interface Character {
    id: number;
    name: string;
    image: string;
    status: 'Alive' | 'Dead' | 'unknown';
}

export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}