export interface ITrailer{
    name:string;
    key: string;
    site: string,
    size: 1080;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}
export interface ITrailerResult{
    id:number;
    results:ITrailer[]
}