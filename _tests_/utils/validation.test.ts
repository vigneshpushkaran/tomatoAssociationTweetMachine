import { createLangHashTag } from "../../src/utils/validation";

describe("Create hashtag test", () => {
    test("createLangHastag for unsupported tweet returns #Tomato default", () => {
        const text="வணக்கம் உலகம், இங்கிலாந்துக்கு வரவேற்கிறோம்";
        expect(createLangHashTag(text)).toBe(" #Tomato");
        expect(2 + 2).toBe(4);
    });
});