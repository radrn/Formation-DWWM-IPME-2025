import { describe, expect, it } from "vitest"
import { caesarCypher, caesarDecypher, caesarCypherTwoInOne } from './src/strings/caesarCypher'


describe("Chiffrage César : encode du texte selon un décalage", () => {
    const TESTS = [
        {
            input: "a",
            output: "b"
        },
        {
            input: "bonjour",
            output: "cpokpvs"
        },
        {
            input: "je suis un haricot blanc",
            output: "kf tvjt vo ibsjdpu cmbod"
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un nombre entier en son équivalent romain', () => {
            expect(caesarCypher(test.input, 1)).toBe(test.output)
        })
        it('Doit déchiffrer un code césar avec un décalage de 1', () => {
            expect(caesarDecypher(test.output, 1)).toBe(test.input)
        })
    })
})

describe("Chiffrage César : on peut préciser le décalage et choisir entre encodage/decodage", () => {
    const TESTS = [
        {
            input: {
                string: "coucou",
                key: 7
            },
            output: "jvbjvb"
        },
        {
            input: {
                string: "avec javascript on est content",
                key: 23
            },
            output: "xsbz gxsxpzofmq lk bpq zlkqbkq"
        },
        {
            input: {
                string: "abcdefghijklmnopqrst",
                key: 79
            },
            output: "bcdefghijklmnopqrstu"
        },
    ];

    TESTS.forEach(test => {
        it('Encode en césar (hard mode)', () => {
            expect(caesarCypherTwoInOne(test.input.string, test.input.key)).toBe(test.output);
        })

        it('Décode un césar (hard mode)', () => {
            expect(caesarCypherTwoInOne(test.output, test.input.key, true)).toBe(test.input.string);
        })
    })
})


