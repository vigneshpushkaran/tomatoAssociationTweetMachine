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
    test("Tweet with url not trims url and tweet length", () => {
        const text = `Hello world, welcome to Uk, please visit site to check nutrition facts https://www.britishtomatoes.co.uk/tomato-nutrition 
            #Tomato thanks for supporting tomato association.`;
        const { trimmedUrlTweetLen, tweet } = trimUrlAsTwitterSupport(text);
        expect(tweet).toBe(text);
        expect(trimmedUrlTweetLen).toBe(167);
    });

    test("Tweet with url trims url and tweet length", () => {
        const text = `Hello world, welcome to Uk, please visit site to check nutrition facts #Tomato thanks for supporting tomato association. The site is placed at the end to check the url to be trimmed https://www.britishtomatoes.co.uk/tomato-nutrition`;
        const { trimmedUrlTweetLen, tweet } = trimUrlAsTwitterSupport(text);
        const expectedText = `Hello world, welcome to Uk, please visit site to check nutrition facts #Tomato thanks for supporting tomato association. The site is placed at the end to check the url to be trimmed https://www.b`;
        expect(tweet).toBe(expectedText);
        expect(trimmedUrlTweetLen).toBe(140);
    });

    test("Tweet with url trims 1st url and 2nd url would not trim", () => {
        const text = `Hello world, welcome to Uk, please visit site https://www.britishtomatoes.co.uk/tomato-nutrition to check nutrition facts #Tomato thanks for supporting tomato association. The site is placed at the end to check the url to be trimmed https://www.britishtomatoes.co.uk/tomato-nutrition`;
        const { trimmedUrlTweetLen, tweet } = trimUrlAsTwitterSupport(text);
        const expectedText = `Hello world, welcome to Uk, please visit site https://www.britishtomatoes.co.uk/tomato-nutrition to check nutrition facts #Tomato thanks for supporting tomato association. The site is placed at the end to check the url to be trimmed https://www.b`;
        expect(tweet).toBe(expectedText);
        expect(trimmedUrlTweetLen).toBe(167);
    });
});