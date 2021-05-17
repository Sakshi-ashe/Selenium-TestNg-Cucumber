Feature: secondSample

  Scenario Outline: Correct answers
    Given User Launch Chrome browser
    When User opens URL "http://localhost:4200/start"
    And Clicks on A first sample quiz button
    Then Page Url should be "http://localhost:4200/play/a-second-sample-quizz"
    Then Enter answer for quizTwo QFirst as "<answer1>" and QSecond as "<answer2>"
    Then Page Url should be "http://localhost:4200/result"
    Then check you passed the quiz
    Then Click on TryAgain button
    Then Page Url should be "http://localhost:4200/start"
    And close browser

    Examples: 
      | answer1 | answer2    |
      | What?   | Reasons |


 Scenario Outline: InCorrect answers
    Given User Launch Chrome browser
    When User opens URL "http://localhost:4200/start"
    And Clicks on A first sample quiz button
    Then Page Url should be "http://localhost:4200/play/a-second-sample-quizz"
    Then Enter answer for quizTwo QFirst as "<answer1>" and QSecond as "<answer2>"
    Then Page Url should be "http://localhost:4200/result"
    Then check you failed the quiz 
    Then Click on TryAgain button
    Then Page Url should be "http://localhost:4200/start"
    And close browser

    Examples: 
      | answer1 | answer2              |     
      | 1   | Reasons |
     
