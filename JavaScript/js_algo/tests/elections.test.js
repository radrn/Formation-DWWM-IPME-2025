import { describe, expect, it } from "vitest"
import { hasElections } from './src/numbers/elections';


describe("Doit déterminer si il y aura des élections cette année.", () => {
    it('', () => {
        expect(hasElections(2007)).toBe(true)
        expect(hasElections(2012)).toBe(true)
        expect(hasElections(2011)).toBe(false)
        expect(hasElections(2017)).toBe(true)
        expect(hasElections(2237)).toBe(true)
        expect(hasElections(2238)).toBe(false)
    })
})
