describe("fizzBuzz", function() {

    beforeEach(function() {
        test = new fizzBuzz();
    });
    
    describe("FizzBuzz test", function() {
        it("FizzBuzz function does exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        it("not a number should return Error!", function() {
            expect(fizzBuzz("notNumber")).toBe("Error!");
        });
        it("multiple of 3 and 5 should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("multiple of 3 should return Fizz", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it("multiple of 5 should return Buzz", function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        it("non-mulitple of 3 or 5 should return num", function() {
            let test = fizzBuzz(4);
            expect(test).toBe(4);
        });
    });
});
