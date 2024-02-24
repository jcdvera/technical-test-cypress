Feature: Word Counter tests

    Feature Description

    Scenario: Count words from a text

        Given the user opens the website
        When the user types "Im writing some text here"
        Then the page should count "5 words 25 characters"