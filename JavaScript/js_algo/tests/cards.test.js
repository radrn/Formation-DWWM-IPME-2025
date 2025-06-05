import { describe, expect, it } from "vitest";
import { generateDeck } from './src/loop/cards';


describe("Générateur de paquet de cartes.", () => {
    it('Retourne un deck de cartes au format VALEUR-COULEUR', () => {
        expect(generateDeck()).toStrictEqual([
            'As-Coeur',
            '2-Coeur',
            '3-Coeur',
            '4-Coeur',
            '5-Coeur',
            '6-Coeur',
            '7-Coeur',
            '8-Coeur',
            '9-Coeur',
            '10-Coeur',
            'Valet-Coeur',
            'Dame-Coeur',
            'Roi-Coeur',

            'As-Carreau',
            '2-Carreau',
            '3-Carreau',
            '4-Carreau',
            '5-Carreau',
            '6-Carreau',
            '7-Carreau',
            '8-Carreau',
            '9-Carreau',
            '10-Carreau',
            'Valet-Carreau',
            'Dame-Carreau',
            'Roi-Carreau',

            'As-Trêfle',
            '2-Trêfle',
            '3-Trêfle',
            '4-Trêfle',
            '5-Trêfle',
            '6-Trêfle',
            '7-Trêfle',
            '8-Trêfle',
            '9-Trêfle',
            '10-Trêfle',
            'Valet-Trêfle',
            'Dame-Trêfle',
            'Roi-Trêfle',

            'As-Pique',
            '2-Pique',
            '3-Pique',
            '4-Pique',
            '5-Pique',
            '6-Pique',
            '7-Pique',
            '8-Pique',
            '9-Pique',
            '10-Pique',
            'Valet-Pique',
            'Dame-Pique',
            'Roi-Pique',
        ]);
    })
})

