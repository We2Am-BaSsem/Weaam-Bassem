import LoginPage from "../pom/login.page";
const testCases = require('../ddt/login.ddt');
const TestResult = require('../utils/login.enum');

describe('Login Spec', () => {

  let loginPom;

  beforeEach(() => {
    loginPom = new LoginPage();
    cy.visit('https://www.saucedemo.com');
  })

  testCases.forEach(testCase => {
    it(testCase.testTitle, () => {

      // This method is used to perform a login action with the provided `username` and `password` values.
      loginPom.login(testCase.username, testCase.password);
      /* The line `loginPom.assureLoginTestResult(testCase.testResult, testCase.errorMessages);` is
      calling a method `assureLoginTestResult` on the `loginPom` object. This method is used to
      verify the test result of the login action. */
      loginPom.assureLoginTestResult(testCase.testResult, testCase.errorMessages);
    });

  });

})