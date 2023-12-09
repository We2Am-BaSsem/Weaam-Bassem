const TestResult = require('../utils/login.enum');
// const { expect } = require('chai');
const { assertWebElementCssAttribute } = require('../utils/css-assertions.utils');

class LoginPage {
    constructor() {
        this.usernameInputSelector = '[data-test="username"]';
        this.passwordInputSelector = '[data-test="password"]';
        this.loginButtonSelector = '[data-test="login-button"]';
    }

    get usernameInput() {
        return cy.get(this.usernameInputSelector);
    }

    get passwordInput() {
        return cy.get(this.passwordInputSelector);
    }

    get loginButton() {
        return cy.get(this.loginButtonSelector);
    }

    get shoppingCart() {
        return cy.get('.primary_header .shopping_cart_container');
    }

    login(username, password) {
        username !== '' ? this.usernameInput.type(username) : this.usernameInput.clear();
        password !== '' ? this.passwordInput.type(password) : this.passwordInput.clear();
        this.loginButton.click();
    }

    successfulLogin() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        cy.contains('Swag Labs').should('exist');
        cy.get('.bm-burger-button');

        // Assert CSS attributes and values for the element
        assertWebElementCssAttribute(this.shoppingCart, 'height', 40);
        assertWebElementCssAttribute(this.shoppingCart, 'width', 40);
        assertWebElementCssAttribute(this.shoppingCart, 'top', 10);
        assertWebElementCssAttribute(this.shoppingCart, 'right', 20);
        this.shoppingCart.should('have.css', 'position', 'absolute');

        // cy.get('.primary_header .shopping_cart_container').invoke('css', 'height').then((value) => {
        //     value = parseInt(value.replace('px', ''));
        //     expect(Math.abs(value - 40) / 40 * 100).to.lessThan(10);
        // });
        // cy.get('.primary_header .shopping_cart_container').invoke('css', 'width').then((value) => {
        //     value = parseInt(value.replace('px', ''));
        //     expect(Math.abs(value - 40) / 40 * 100).to.lessThan(10);
        // });
        // cy.get('.primary_header .shopping_cart_container').invoke('css', 'top').then((value) => {
        //     value = parseInt(value.replace('px', ''));
        //     expect(Math.abs(value - 10) / 10 * 100).to.lessThan(10);
        // });
        // cy.get('.primary_header .shopping_cart_container').invoke('css', 'right').then((value) => {
        //     value = parseInt(value.replace('px', ''));
        //     expect(Math.abs(value - 20) / 20 * 100).to.lessThan(10);
        // });
    }

    invalidLogin(messages) {
        cy.get('.error-message-container').should('exist');

        messages.forEach(message => {
            cy.get('.error-message-container > h3').should('have.text', `Epic sadface: ${message}`);
        });
    }

    assureLoginTestResult(testResult, errorMessages) {

        switch (testResult) {
            case TestResult.VALID_LOGIN:
                this.successfulLogin();
                break;
            case TestResult.INVALID_LOGIN:
                this.invalidLogin(errorMessages);
                break;

            default:
                break;
        }
    }
}

export default LoginPage;