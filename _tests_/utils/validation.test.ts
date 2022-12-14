import { createLangHashTag, isHashTagrequired, trimUrlAsTwitterSupport } from "../../src/utils/validation";

describe("Create hashtag test", () => {

    test("createLangHastag for tweet in english returns #Tomato", () => {
        const text = "Hello world, welcome to Uk, thanks for supporting tomato association";
        expect(createLangHashTag(text)).toBe(" #Tomato");
    });

    test("createLangHastag for tweet in French returns #Tomate default", () => {
        const text = "Bonjour tout le monde, bienvenue au Royaume-Uni, merci de soutenir l'association de la tomate";
        expect(createLangHashTag(text)).toBe(" #Tomate");
    });

    test("createLangHastag for unsupported language tweet returns #Tomato default", () => {
        const text = "வணக்கம் உலகம், இங்கிலாந்துக்கு வரவேற்கிறோம்";
        expect(createLangHashTag(text)).toBe(" #Tomato");
    });
});

describe("Is hashtag required test", () => {

    test("Tweet with supported hastag returns false", () => {
        const text = "Hello world, welcome to Uk, #Tomato thanks for supporting tomato association";
        expect(isHashTagrequired(text)).toBe(false);
    });

    test("Tweet without(French) hahstag returns true", () => {
        const text = "Bonjour tout le monde, bienvenue au Royaume-Uni, merci de soutenir l'association de la tomate";
        expect(isHashTagrequired(text)).toBe(true);
    });

    test("unsupported language tweet needs hashtag default", () => {
        const text = "வணக்கம் உலகம், இங்கிலாந்துக்கு வரவேற்கிறோம்";
        expect(isHashTagrequired(text)).toBe(true);
    });
});

describe("trimUrlAsTwitterSupport test", () => {
    test("Tweet with url not trims urland tweet length", () => {
        const text = `Hello world, welcome to Uk, please visit site to check nutrition facts https://www.britishtomatoes.co.uk/tomato-nutrition 
            #Tomato thanks for supporting tomato association.`;
        const { trimmedUrlTweetLen, tweet } = trimUrlAsTwitterSupport(text);
        expect(tweet).toBe(text);
        expect(trimmedUrlTweetLen).toBe(167);
    });
});