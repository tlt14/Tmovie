export interface IDetail{
    adult: boolean;
    backdrop_path: string;
    genres: [
        {
            id: number;
            name: string;
        }
    ];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
    imdb_id: string;
    belongs_to_collection:{
        backdrop_path: string;
        id: number;
        name: string;
        poster_path: string;
    }
    
}