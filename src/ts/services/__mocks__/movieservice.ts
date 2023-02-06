import { IMovie } from "../../models/Movie";

export let testData: IMovie[] = [
    {
        Title: "",
        imdbID: "",
        Type: "", 
        Poster: "",
        Year: ""
    },
    {
        Title: "",
        imdbID: "",
        Type: "", 
        Poster: "",
        Year: ""
    },
    {
        Title: "",
        imdbID: "",
        Type: "", 
        Poster: "",
        Year: ""
    },
    {
        Title: "",
        imdbID: "",
        Type: "", 
        Poster: "",
        Year: ""
    },
];

export async function getData(searchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if (searchText === "") {
            resolve([]);
        } 
        if (searchText !== "error") {
            resolve(testData);
        } else {
            reject([]);
        }
    });
};