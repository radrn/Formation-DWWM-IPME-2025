import {describe, expect, it} from "vitest"
import {dice6, diceN, dices, dicesAlt} from "../src/numbers/dices.js";


describe("Jeu de dés", () => {
    const MIN_DICE = 1;
    const MAX_DICE = 6;

    it('Simuler un jet de dé classique (1..6)', () => {
        for (let i = 0; i < 20; i++) {
            expect(dice6())
                .a("number")
                .within(MIN_DICE, MAX_DICE)
        }
    });

    it('Simuler un jet de dé custom', () => {
        const d20 = 20;
        for (let i = 0; i < 20; i++) {
            expect(diceN(d20))
                .a("number")
                .within(MIN_DICE, d20)
        }
        const d100 = 100;
        for (let i = 0; i < 20; i++) {
            expect(diceN(d20))
                .a("number")
                .within(MIN_DICE, d100)
        }
    })
    it('Simuler plusieurs jets de dés custom', () => {
        const d65 = 65;
        const throws = 100;
        let results = dices(throws, d65);
        for (const result of results) {
            expect(result)
                .a("number")
                .within(MIN_DICE, d65)
        }
        expect(results).a("array").length(throws);
    })
})
