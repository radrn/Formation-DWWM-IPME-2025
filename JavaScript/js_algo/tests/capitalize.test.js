import { describe, expect, it } from "vitest"
import {
    capitalize,
    lowerize,
    toPascalCase,
    toCamelCase
} from './src/strings/capitalize'


describe("Capitalize et cie", () => {
    it('Doit mettre la première lettre de la phrase en majuscule', () => {
        expect(capitalize("coucou les amis")).toBe("Coucou les amis")
    })
    it('Doit mettre la première lettre de la phrase en minuscule', () => {
        expect(lowerize("Coucou les amis")).toBe("coucou les amis")
        expect(lowerize("COUCOU LES AMIS")).toBe("cOUCOU LES AMIS")
    })
    it('Doit convertir en PascalCase', () => {
        expect(toPascalCase("coucou les amis")).toBe("CoucouLesAmis")
    })
    it('Doit convertir en camelCase', () => {
        expect(toCamelCase("coucou les amis")).toBe("coucouLesAmis")
    })
})

