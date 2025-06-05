import { describe, expect, it } from "vitest"
import { isPangram } from './src/strings/pangram'


describe("Pangramme", () => {
    const TESTS = [
        {
            input: "abcdefghijklmnopqrstuvwxyz",
            output: true
        },
        {
            input: "aaaaaaaabbbbbcccccckkkeeza",
            output: false
        },
        {
            input: "Portez ce vieux whisky au juge blond qui fume",
            output: true
        },
    ];

    TESTS.forEach(test => {
        it("Détermine si la phrase est un pangramme (contient chacune des 26 lettres de l'alphabet", () => {
            expect(isPangram(test.input)).toBe(test.output)
        })
    })
})

