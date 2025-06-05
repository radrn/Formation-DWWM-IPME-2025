import { describe, expect, it } from "vitest"
import {bubbleSort, bubbleSortGPT, swap} from '../src/arrays/sort'


describe("Doit trier le tableau", () => {
    const TESTS = [
        {
            input: [3, 2, 1],
            ouput: [1, 2, 3],
        },
        {
            input: [1, 2, 3, 1, 9, 7, 5, 8, 3, 4, 6],
            ouput: [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
        },
    ];

    TESTS.forEach(test => {
        it('Tri en utilisant le tri à bulle', () => {
            expect(bubbleSort(test.input)).toStrictEqual(test.ouput);
        })
    })
})
