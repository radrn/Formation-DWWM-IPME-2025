import { describe, expect, it } from "vitest"
import { marsAgeConverter, alienAgeConverter } from './src/numbers/alienAge'

describe("Convertisseur d'age mode EASY", () => {
    const TESTS = [
        {
            input: 78,
            output: 36.54685494223363
        },
        {
            input: 18,
            output: 8.433889602053915
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un age terrien en age martien', () => {
            expect(marsAgeConverter(test.input, test.input.planet)).toBe(test.output);
        })
    })
})

describe("Convertisseur d'age mode HARD: on peut préciser une planète", () => {
    const TESTS = [
        {
            input: {
                age: 18,
                planet: "terre",
            },
            output: 18
        },
        {
            input: {
                age: 18,
                planet: "mars",
            },
            output: 8.433889602053915
        },
        {
            input: {
                age: 36,
                planet: "uranus",
            },
            output: 0.4281943493987682
        },
        {
            input: {
                age: 7,
                planet: "venus",
            },
            output: 11.355555555555556
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un age terrien selon une planête donnée', () => {
            expect(alienAgeConverter(test.input.age, test.input.planet)).toBe(test.output);
        })
    })

    it("Doit détecter que la planête n'existe pas.", () => {
        expect(alienAgeConverter(22, "plop")).toBe("Cette planète n'existe pas.");
    })
})

