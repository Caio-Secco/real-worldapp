class CadastroPage {

    selectorsList() {
        const selectors = {
            registerButton: "[href='/signup']",
            CheckCadastroPage: '.css-6mfzk6-MuiContainer-root',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passworldField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']",
            containerClick: '.css-6mfzk6-MuiContainer-root',
            alertError: '.css-yff4jp-MuiFormHelperText-root'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    acessRegisterPage() {
    cy.get(this.selectorsList().registerButton).click()
    cy.get(this.selectorsList().CheckCadastroPage).should('be.visible')
    }

    dataRegistration(name, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(name)
    cy.get(this.selectorsList().lastNameField).type(lastName)
    cy.get(this.selectorsList().userNameField).type(userName)
    cy.get(this.selectorsList().passworldField).type(password)
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    cy.get(this.selectorsList().submitButton).click()
    }

    dataRegistrationFail() {
    cy.get(this.selectorsList().firstNameField).click()
    cy.get(this.selectorsList().lastNameField).click()
    cy.get(this.selectorsList().userNameField).click()
    cy.get(this.selectorsList().passworldField).click()
    cy.get(this.selectorsList().confirmPasswordField).click()
    cy.get(this.selectorsList().containerClick).click()
    cy.get(this.selectorsList().alertError).should('be.visible')

    }
    

}

export default CadastroPage