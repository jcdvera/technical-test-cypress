class HomePage {

    elements = {
        textBox : () => cy.get('#box'),
        countResult : () => cy.get('h4 > .counted'),
        wordDensityAccordeon : () => cy.get('#kwd-accordion-data')
    }

    visitPage() {
        cy.visit('')
    }

    typeText(text) {
        return this.elements.textBox().type(text)
    }

    getCountResult() {
        return this.elements.countResult()
    }

}
module.exports = HomePage