import HomePage from "../pages/HomePage"

const wordcounterHomePage = new HomePage()

describe('Home Page Test Suite', () => {
    it('Go to home page', () => {
        wordcounterHomePage.visitPage()
        wordcounterHomePage.typeText('Here I will type something')
        wordcounterHomePage.getCountResult().should("have.text", " 5 words 26 characters")
    })
})
