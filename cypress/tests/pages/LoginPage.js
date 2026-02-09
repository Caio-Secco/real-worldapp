class LoginPage {

    selectorsList() {
        const selectors = {
            userNameField: "[name='username']",
            passwordFild: "[name='password']",
            submitButton: "[type='submit']",
            checkAlert: "[role='alert']"

        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordFild).type(password)
        cy.get(this.selectorsList().submitButton).click()
    }

    Alert() {
        cy.get(this.selectorsList().checkAlert).should('be.visible')
    }

}

export default LoginPage