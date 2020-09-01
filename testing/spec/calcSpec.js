describe("whatCanIDrink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Drink test", function() {
        it("should return Sorry message", function() {
            expect(whatCanIDrink(-1000)).toBe("Drink Toddy");
        })
        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(5.5)).toBe("Drink Toddy");
        })
    });
});
