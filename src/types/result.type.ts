import { IMovie } from "./movie.type";

export interface IResult{
        page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number
}