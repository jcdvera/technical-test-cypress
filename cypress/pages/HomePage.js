class HomePage {

    elements = {
        textBox : () => cy.get('#box'),
        countResult : () => cy.get('h4 > .counted'),
        wordCount : () => cy.get('#word_count'),
        characterCount : () => cy.get('#character_count'),
        wordDensityItems : () => cy.get('#kwd-accordion-data > .list-group-item'),
        wordDensity : () => cy.get('#kwd-accordion-data')
    }

    visitPage() {
        cy.visit('')
    }

    typeText(text) {
        return this.elements.textBox().clear().type(text)
    }

    getWordCount() {
        return this.elements.wordCount()
    }

    getCharacterCount() {
        return this.elements.characterCount()
    }

    getCountResult() {
        return this.elements.countResult()
    }

    getWordDensityAccordeonSize() {
        return this.elements.wordDensityItems().its('length')
    }

    getWordDensityItem(index) {
        return this.elements.wordDensity().selectNth(index)
    }

}
module.exports = HomePage