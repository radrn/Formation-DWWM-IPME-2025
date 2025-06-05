import { describe, expect, it } from "vitest"
import { reverseString } from './src/strings/reverseString'


describe("Inversion de texte", () => {
    it('Doit inverser toutes les lettres', () => {
        expect(reverseString("coucou les amis")).toBe("sima sel uocuoc")
        expect(reverseString("Je pense donc je suis")).toBe("sius ej cnod esnep eJ")
    })
})

