import { describe, expect, it } from "vitest"
import { romanConverter } from './src/objects/romanConverter'


describe("Convertisseur de chiffres romains", () => {
    const TESTS = [
        {
            input: 3,
            output: "III"
        },
        {
            input: 4,
            output: "IV"
        },
        {
            input: 6,
            output: "VI"
        },
        {
            input: 19,
            output: "XIX"
        },
        {
            input: 789,
            output: "DCCLXXXIX"
        },
        {
            input: 1009,
            output: "MIX"
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un nombre entier en son équivalent romain', () => {
            expect(romanConverter(test.input)).toStrictEqual(test.output);
        })
    })
})

