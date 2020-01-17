# cypress-intro

This is a template React application with no changes. To re-create our steps getting here, follow these steps:

1. In your terminal, go to a directory where you want to create a new project folder. I wanted mine of my Desktop.
1. Create the project by running the command `npx create-react-app cypress-intro`
    - You can name your project something other than `cypress-intro` by putting your project name at the end.
1. After everything installs, type `cd cypress-intro` (or `cd <your-project-name>`), to get your terminal inside your react application.
1. Install cypress with `npm install cypress --save-dev`
    - The `--save-dev` flag makes `"cypress"` show up in the `devDependencies` section of your `package.json` file.
1. Once `cypress` has been installed, initialize cypress test runner by running `node_modules/.bin/cypress open`.
    - **Note**: If this doesn't work, try `npx cypress open`

Now we're ready to start writing tests! Next, we started following [this cypress tutorial](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)

1. In the `cypress` directory, in the `integration` folder, create a new test file - name it something like `sample_spec.js`
    - **Note**: It's best if your file is in the `integration` folder, not in `integration/examples`. You may have to move your file manually to the spot we want it.
    - **Note**: At this point, you should see `sample_spec.js` in the cypress test runner!
1. In your test file (`sample_spec.js`, or whatever you named your file), add your first test:
    ```javascript
    describe("My First Test", function() {
        it("Does not do much!", function() {
            expect(true).to.equal(true);
        });
    });
    ```
    - **Note**: the above doesn't actually test anything in your application, but it does let you see how future test will look in the Cypress Test Runner
1. In the Cypress Test Runner, click on your `sample_spec.js` file to run all tests in that file.
    - **Note**: Now, you should see a new Chrome window pop up, showing your first test pass!

Hooray! Now you have Cypress tests running in your application. Feel free to add many more, testing whatever you think would be fun to test!
