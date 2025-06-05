import { describe, expect, it } from "vitest"
import { firstLetter, firstWord, pasDeA } from '../src/strings/stringBasic'


describe("Inversion de texte", () => {
    it('Doit trouver le premier caractère', () => {
        expect(firstLetter("Plop je suis là")).toBe("P");
        expect(firstLetter("Coucou")).toBe("C");
        expect(firstLetter("Moui...")).toBe("M");
    });

    it('Doit trouver le premier mot', () => {
        expect(firstWord("Plop je suis là")).toBe("Plop");
        expect(firstWord("Coucou")).toBe("Coucou");
        expect(firstWord("Moui...")).toBe("Moui...");
    });
    it('Doit remplacer les a par des XXX', () => {
        expect(pasDeA("Ca va")).toBe("CXXX vXXX");
    });
});
