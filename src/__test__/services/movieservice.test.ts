/**
* @jest-environment jsdom 
*/

import { getData } from "../../ts/services/movieservice";
import { testData } from "../../ts/services/__mocks__/movieservice";


jest.mock('axios', () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith("error")) {
                reject([]);
            } else {
                resolve({ data: {Search: testData } });
            }
        });
    }
}));

describe("getData", () => {
    test("should get data", async () => {
      let result = await getData("");
      expect(result[0].Title).toEqual("");
    });
  
    test("should show error", async () => {
      let result = await getData("error");
      expect(result.length).toBe(0);
    });
  });

