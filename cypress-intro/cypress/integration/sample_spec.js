// first example test from the documentation
describe("My First Test", function() {
    it("Does not do much!", function() {
        expect(true).to.equal(true);
    });
});

// tests written in class on
describe("CC favorite test group", () => {
    it("runs sample tests", () => {
        expect(true).to.be.true;
        expect("alex").to.equal("alex");
        expect([1, 2, 3]).to.include(3);
    });

    it("renders App div", () => {
        cy.visit("http://localhost:3000/");
        cy.get("div.App");
    });

    it("renders main text", () => {
        cy.visit("http://localhost:3000/");
        cy.get("p.main-text");
    });

    it("renders the react icon", () => {
        cy.visit("http://localhost:3000/");
        cy.get("img.App-logo");
    });

    it("renders the Learn React link", () => {
        cy.visit("http://localhost:3000/");

        // cy.get("a.App-link").contains("Learn React");
        cy.get("a.App-link").then(($el) => {
            const text = $el.text();

            expect(text).to.include("Learn React");
            expect(text).to.not.include("poopy");
            expect(text).to.not.include("butthole");
        });
    });

    it("shows the default react app page title", () => {
        // cy.title().contains("React App");
        cy.title().should("eq", "React App");
        cy.title().should("includes", "App");
    });
});
