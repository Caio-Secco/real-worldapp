class TransactionsPage {

    selectorsList() {
        const selectors = {
            MineButton: "[role='tab']",
            checkNoTransactionPage: "[data-test='empty-list-header']",
            valueTransaction: '.css-1tlfly5-MuiTypography-root',
            nextButton: "[data-test='user-onboarding-next']",
            genericType: "[type='text']",
            submitButton: "[type='submit']"
        }

        return selectors
    }

    Notransaction() {
        cy.get(this.selectorsList().MineButton).eq(2).click()
        cy.get(this.selectorsList().checkNoTransactionPage).should('be.visible').contains('No Transactions')
    }

    historyTransaction() {
        cy.get(this.selectorsList().MineButton).eq(2).click()
        cy.get(this.selectorsList().valueTransaction).should('be.visible')

    }

    bankacount() {
    cy.get(this.selectorsList().nextButton).click()
    cy.get(this.selectorsList().genericType).eq(0).type('bancoteste')
    cy.get(this.selectorsList().genericType).eq(1).type('130042002')
    cy.get(this.selectorsList().genericType).eq(2).type('130042002')
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().nextButton).click()
    }


}

export default TransactionsPage