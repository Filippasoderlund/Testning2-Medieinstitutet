/**
 *@jest-environment jsdom
 */

 import * as movieApp from "../ts/movieApp";
 import { IMovie } from "../ts/models/Movie";

 jest.mock('../ts/services/movieservice');

 beforeEach(() => {
    document.body.innerHTML = ``;
 });

// init 
describe("init", () => {
    test("text", () => {
        // arrange
        document.body.innerHTML= `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här"/>
            <button type="submit" id="search">Sök</button>
        </form>
        `;
        let handleSubmitSpy = jest.spyOn(movieApp, "handleSubmit")
            .mockReturnValue(new Promise<void>((resolve)=> {
                resolve();
            })
        );  

        //act
        movieApp.init();
        (document.getElementById("searchForm") as HTMLFormElement).submit();

        //assert
        expect(handleSubmitSpy).toHaveBeenCalled();
        handleSubmitSpy.mockRestore();
        });
});

describe("createHtml", () => {
    test ("should call createHtml correctly", async () => {     

        //arrange
        document.body.innerHTML = `
        <div id="movieContainer"></div>
        `;

        const container = document.getElementById("movieContainer") as HTMLDivElement;

        let movies: IMovie[] = [
            {
                Title: "",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            }
        ];

        //Act 
        movieApp.createHtml(movies, container);

        //Assert
    
        expect(container.innerHTML).toContain("");
    });
});

describe("displayNoResult", () => {
    
    test("should show error massage", () => {
        //arrange
        document.body.innerHTML = `
        <div id="movieContainer"></div>
        `;

        let container = document.getElementById("movieContainer") as HTMLDivElement;

        //act
        movieApp.displayNoResult(container);

        //assert
        expect(container.innerHTML).toContain("Inga sökresultat");
    });
});
