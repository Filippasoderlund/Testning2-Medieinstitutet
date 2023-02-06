/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { movieSort } from "../ts/functions";

describe("movieSort", () => {
    test("should descending sort", () => {
        // arrange
        let testData: IMovie[] = [
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
            }
        ];

        // act
        let results: IMovie[] = movieSort(testData, true);

        // assert
        expect(results[0].Title).toBe("");
    });

    test("should ascending sort", () => {
        // arrange
        let testData: IMovie[] = [
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
            }
        ];

        // act
        let results: IMovie[] = movieSort(testData, false);

        // assert
        expect(results[0].Title).toBe("");
    });

});