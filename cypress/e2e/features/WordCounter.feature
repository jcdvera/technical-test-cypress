Feature: Word Counter tests

    Feature Description

    Scenario Outline: Count words and characters from a text

        Given the user opens the website
        When the user types "<text>"
        Then the word count should be "<word_count>"
        And the character count should be "<character_count>"
        
        Examples:
            | text                  | word_count    | character_count   |
            | Hello World           | 2             | 11                |
            | Im writing some text  | 4             | 20                |
            | Hi                    | 1             | 2                 |
            | Hi, is anyone there?  | 4             | 20                |

    Scenario Outline: Validate result text from words and characters counted

        Given the user opens the website
        When the user types "<text>"
        Then the page should count "<result>"
        
        Examples:
            | text                  | result                |
            | *?/!!                 | 0 words 5 characters  |
            | L                     | 1 word 1 character    |
            | Hi                    | 1 word 2 characters   |
            | Hi, is anyone there?  | 4 words 20 characters |

    Scenario: Validate keyword density

        Given the user opens the website
        When the user types "Hello world hello world world hello hello world hi hi world bye"
        Then the keyword density should display 4 keywords
        And the three most repeated word should be "world" "hello" "hi"
        