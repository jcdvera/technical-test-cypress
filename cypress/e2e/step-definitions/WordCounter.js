import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../pages/HomePage"

const wordcounterHomePage = new HomePage()

Given('the user opens the website', () => {
    wordcounterHomePage.visitPage()
})

When('the user types {string}', (text) => {
    wordcounterHomePage.typeText(text)
})

Then('the word count should be {string}', (count) => {
    wordcounterHomePage.getWordCount().should("have.text", count)
})

And('the character count should be {string}', (count) => {
    wordcounterHomePage.getCharacterCount().should("have.text", count)
})

Then('the page should count {string}', (countedResult) => {
    wordcounterHomePage.getCountResult().should("have.text", " "+countedResult)
})

Then('the keyword density should display {int} keywords', (count) => {
    wordcounterHomePage.getWordDensityAccordeonSize().should("equal", count)
})

Then('the three most repeated word should be {string} {string} {string}', (firstWord, secondWord, thirdWord) => {
    wordcounterHomePage.getWordDensityItem(0).should("have.text", firstWord)
    wordcounterHomePage.getWordDensityItem(1).should("have.text", secondWord)
    wordcounterHomePage.getWordDensityItem(2).should("have.text", thirdWord)
})