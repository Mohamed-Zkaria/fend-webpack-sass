import { textValidator } from "../textValidator";

describe("textValidator return true if the input text is not empty.", ()=>{
    test (" textValidator returns true if the text isn't empty.", ()=>{
        expect(textValidator("dummy text")).toBe(true);
    });

    test("textValidator return false if the input text is less than three characters.", ()=>{
        expect(textValidator("ab")).toBe(false);
    })

    test("textValidator return false if the input text is empty.", ()=>{
        expect(textValidator("")).toBe(false);
    })
});