import { describe, expect, it } from "vitest"
import {
    addition,
    soustraction,
    multiplication,
    division,
    auCarre,
    estPair,
    getPriceTTC,
    getNewPrice,
    getWaterState
} from './src/numbers/numbers_basics'


describe("Opérations mathématiques", () => {
    it('Additionne a et b', () => {
        expect(addition(5, 5)).toBe(10)
        expect(addition(10,105)).toBe(115)
        expect(addition(5, -10)).toBe(-5)
    })
    it('Soustrait a à b', () => {
        expect(soustraction(15, 5)).toBe(10)
        expect(soustraction(0, 100)).toBe(-100)
    })
    it('Multiplie a et b', () => {
        expect(multiplication(5, 5)).toBe(25)
        expect(multiplication(500, 1)).toBe(500)
    })
    it('Divise a et b', () => {
        expect(division(200, 4)).toBe(50)
        expect(division(10, 2)).toBe(5)
        expect(division(200, 0)).toBe(NaN)
        expect(division(0, 10)).toBe(NaN)
    })
    it('Calcule le carré de a', () => {
        expect(auCarre(5)).toBe(25)
        expect(auCarre(1)).toBe(1)
        expect(auCarre(82)).toBe(6724)
    })
    it('Retourne TRUE (vrai) si le nombre est pair, ou FALSE', () => {
        expect(estPair(4)).toBe(true)
        expect(estPair(7)).toBe(false)
    })
})

describe("Prix TTC avec quantité", () => {
    const TESTS = [
        {
            input: {
                prixHT: 10,
                quantity: 1
            },
            output: 12
        },
        {
            input: {
                prixHT: 199,
                quantity: 5
            },
            output: 1194
        },
    ];

    TESTS.forEach(test => {
        it('Calcule le prix TTC à partir du HT et de la quantité', () => {
            expect(getPriceTTC(test.input.prixHT, test.input.quantity)).toBe(test.output)
        })
    })
})


describe("Retourne un prix après modification", () => {
    const TESTS = [
        {
            input: {
                prixHT: 10,
                modif: 50
            },
            output: 15
        },
        {
            input: {
                prixHT: 200,
                modif: -50
            },
            output: 100
        },
        {
            input: {
                prixHT: 100,
                modif: -20
            },
            output: 80
        },
    ];

    TESTS.forEach(test => {
        it('Prix après augmentation/réduction', () => {
            expect(getNewPrice(test.input.prixHT, test.input.modif)).toBe(test.output)
        })
    })
})


describe("Retourne l'état de l'eau selon une température Celcius donnée", () => {
    const TESTS = [
        {
            input: 20,
            output: "liquide"
        },
        {
            input: 80,
            output: "gazeux"
        },
        {
            input: -70,
            output: "solide"
        },
    ];

    TESTS.forEach(test => {
        it('Prix après augmentation/réduction', () => {
            expect(getWaterState(test.input)).toBe(test.output)
        })
    })
})
