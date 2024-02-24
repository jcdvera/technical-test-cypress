import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../pages/HomePage"

const wordcounterHomePage = new HomePage()

Given('the user opens the website', () => {
    wordcounterHomePage.visitPage()
})

When('the user types {string}', (text) => {
    wordcounterHomePage.typeText(text)
})

Then('the page should count {string}', (countedResult) => {
    wordcounterHomePage.getCountResult().should("have.text", " "+countedResult)
})