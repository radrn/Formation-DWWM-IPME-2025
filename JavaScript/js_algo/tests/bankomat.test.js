import { describe, expect, it } from "vitest"
import { bankomat } from './src/numbers/bankomat'


describe("Distributeur de billet radin ! Rend le moins de billets possible et donne le détail", () => {
    const TESTS = [
        {
            input: 500,
            output: {
                500: 1,
                200: 0,
                100: 0,
                50: 0,
                20: 0,
                10: 0,
                5: 0,
                2: 0,
                1: 0,
            }
        },
        {
            input: 321,
            output: {
                500: 0,
                200: 1,
                100: 1,
                50: 0,
                20: 1,
                10: 0,
                5: 0,
                2: 0,
                1: 1,
            }
        },
        {
            input: 98398,
            output: {
                500: 196,
                200: 1,
                100: 1,
                50: 1,
                20: 2,
                10: 0,
                5: 1,
                2: 1,
                1: 1,
            }
        },
    ];

    TESTS.forEach(test => {
        it('Retourne un objet donnant le détail des billets et pièces distribuées', () => {
            expect(bankomat(test.input)).toStrictEqual(test.output)
        })
    })
})
