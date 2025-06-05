import { describe, expect, it } from "vitest"
import {
    isAdult,
    isGameOver,
    hurlement,
    extrait,
    capitalize,
    lowerize,
    toPascalCase,
    toCamelCase,
    traducteurPolonais,
    getNewPrice,
    divide,
    isEven,
    dice6,
    diceN,
    dices,
    biggest,
    plusOne,
    deleteDuplicate,
    generateDeck,
} from "../src/examen.js";


describe("Examen", () => {
    it('Détermine si la personne est adulte', () => {
        expect(isAdult(22)).toBe(true);
        expect(isAdult(18)).toBe(true);
        expect(isAdult(5)).toBe(false);
    });
    it('Détermine si le jeu est terminé', () => {
        expect(isGameOver(100, 100, 100)).toBe(false);
        expect(isGameOver(0, 100, 100)).toBe(true);
        expect(isGameOver(100, 100, 0)).toBe(true);
        expect(isGameOver(100, 0, 100)).toBe(true);
    });
    it('Doit transformer le texte en hurlement', () => {
        expect(hurlement("Bonjour les enfants ?")).toBe("BONJOUR LES ENFANTS ?!!!");
        expect(hurlement("J'adore le Css")).toBe("J'ADORE LE CSS!!!");
    });
    it('Doit générer un extrait si besoin', () => {
        expect(extrait("Coucou")).toBe("Coucou");
        expect(extrait("Je suis un texte beaucoup trop long et je devrais être coupé !"))
            .toBe("Je suis un...");
    });
    it('Doit mettre la première lettre de la phrase en majuscule', () => {
        expect(capitalize("coucou les amis")).toBe("Coucou les amis")
    })
    it('Doit mettre la première lettre de la phrase en minuscule', () => {
        expect(lowerize("Coucou les amis")).toBe("coucou les amis");
        expect(lowerize("COUCOU LES AMIS")).toBe("cOUCOU LES AMIS");
        expect(lowerize("Je Ne Sais Pas Quoi Faire")).toBe("je Ne Sais Pas Quoi Faire");
    });
    it('Doit convertir en PascalCase', () => {
        expect(toPascalCase("coucou les amis")).toBe("CoucouLesAmis");
    });
    it('Doit convertir en camelCase', () => {
        expect(toCamelCase("coucou les amis")).toBe("coucouLesAmis");
    });
    it('Doit traduire en polonais (retirer les voyelles)', () => {
        expect(traducteurPolonais("ca va")).toBe("c v");
        expect(traducteurPolonais("coucou les amis")).toBe("cc ls ms");
    });
    it('Divise a et b', () => {
        expect(divide(200, 4)).toBe(50)
        expect(divide(10, 2)).toBe(5)
        expect(divide(200, 0)).toBe(NaN)
        expect(divide(0, 10)).toBe(NaN)
    })
    it('Retourne TRUE (vrai) si le nombre est pair, ou FALSE', () => {
        expect(isEven(4)).toBe(true)
        expect(isEven(7)).toBe(false)
    })
});

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

describe("Ajout dans un tableau", () => {
    it('Retourne le tableau avec le nouvel élément à la fin', () => {
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
