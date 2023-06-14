export interface IComment{
    comment: string;
    createdAt:string;
    user:{
        name:string;
        photo:string;
        id:string;
    }
}