import { describe, expect, it } from "vitest"
import { ajout, plusOne, avg, avgGroup, deleteDuplicate } from './src/arrays/arrays'


describe("Ajout dans un tableau", () => {
    const TESTS = [
        {
            input: [
                ["cerise", "pomme", "poire"],
                "abricot"
            ],
            output: ["cerise", "pomme", "poire", "abricot"],
        },
        {
            input: [
                [34, 32, 19, 30, 31],
                100
            ],
            output: [34, 32, 19, 30, 31, 100],
        },
    ];

    TESTS.forEach(test => {
        it('Retourne le tableau avec le nouvel élément à la fin', () => {
            expect(ajout(test.input[0], test.input[1])).toStrictEqual(test.output);
        })
    })
})

describe("PlusOne", () => {
    const TESTS = [
        {
            input: [1, 2, 3, 4, 5],
            output: [2, 3, 4, 5, 6],
        },
        {
            input: [39, 28, 29, 99, 10],
            output: [40, 29, 30, 100, 11],
        },
    ];

    TESTS.forEach(test => {
        it('Ajoute 1 à chaque valeur du tableau', () => {
            expect(plusOne(test.input)).toStrictEqual(test.output);
        })
    })
})

describe("avg: Moyenne", () => {
    const TESTS = [
        {
            notes: [12, 14, 12, 19, 20, 19],
            moyenne: 16
        },
        {
            notes: [5, 9, 9.5, 18, 11],
            moyenne: 10.5
        },
    ];

    TESTS.forEach(test => {
        it('Calcule la moyenne à partir de notes', () => {
            expect(avg(test.notes)).toBe(test.moyenne);
        })
    })
})

describe("avgGroup: Details des moyennes de la classe", () => {
    const TESTS = [
        {
            input: {
                marine: [18, 14, 16, 13],
                simon: [19, 20, 12, 11],
                chloe: [11, 9, 11, 7],
            },
            ouput: "marine a eu la moyenne de 15.25\nsimon a eu la moyenne de 15.5\nchloe a eu la moyenne de 9.5\n"
        },
        {
            input: {
                kevin: [20, 17, 19, 16.5],
                wendy: [11, 16, 17, 18, 18],
                romain: [3, 9, 12, 11.5, 8],
            },
            ouput: "kevin a eu la moyenne de 18.125\nwendy a eu la moyenne de 16\nromain a eu la moyenne de 8.7\n"
        },
    ];

    TESTS.forEach(test => {
        it('Donne la moyenne de chaque élève avec son nom', () => {
            expect(avgGroup(test.input)).toBe(test.ouput);
        })
    })
})

describe("deleteDuplicate: Supprime les doublons dans un tableau", () => {
    const TESTS = [
        {
            input: [1, 2, 2, 2, 3, 4],
            output: [1, 2, 3, 4]
        },
        {
            input: [9, 9, 9, 9, 9, 9, 9, 9],
            output: [9]
        },
    ];

    TESTS.forEach(test => {
        it('Devrait éliminer les doublons', () => {
            expect(deleteDuplicate(test.input)).toStrictEqual(test.output);
        })
    })
})

describe("Biggest", () => {
    const TESTS = [
        {
            input: [1, 2, 2, 2, 3, 4],
            output: 4,
        },
        {
            input: [9, 9, 9, 9, 9, 9, 9, 9],
            output: 9,
        },
        {
            input: [933, 51, 1555, 4],
            output: 1555,
        },
    ];

    TESTS.forEach(test => {
        it('Doit trouver la plus grosse valeur', () => {
            expect(biggest(test.input)).toBe(test.output);
        })
    })
})
