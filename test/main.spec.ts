import assert = require("assert");
import {main} from "../src/main";

describe("main()", () => {
    const message = "world!";
    it("hello world!", () => {
        assert(main(message) === "Hello world");
    });
});