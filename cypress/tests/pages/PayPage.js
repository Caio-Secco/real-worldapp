class PayPage {

    selectorsList() {
        const selectors = {
            newPayButton: "[data-testid='AttachMoneyIcon']",
            contactSelect: '.MuiGrid-spacing-xs-1',
            cashValue: "[value='']",
            noteValue: "[type='text']",
            submitButton: "[type='submit']",
            saveSuccessAlert: "[role='alert']",
            errorAlert: ".css-yff4jp-MuiFormHelperText-root"

        }

        return selectors
    }

    newPayment() {
        cy.get(this.selectorsList().newPayButton).click()
        cy.get(this.selectorsList().contactSelect).eq(0).click()
        cy.get(this.selectorsList().cashValue).eq(0).type('100')
        cy.get(this.selectorsList().noteValue).eq(1).type('teste de envio')
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get(this.selectorsList().saveSuccessAlert).should('be.visible').contains('Transaction Submitted!')
    }

    failPayment() {
        cy.get(this.selectorsList().newPayButton).click()
        cy.get(this.selectorsList().contactSelect).eq(0).click()
        cy.get(this.selectorsList().noteValue).eq(1).type('teste de envio')
        cy.get(this.selectorsList().errorAlert).eq(0).should('be.visible').contains('Please enter a valid amount')
    }

}

export default PayPage