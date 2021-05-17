Feature: ThirdSample

  Scenario Outline: Correct answers
    Given User Launch Chrome browser
    When User opens URL "http://localhost:4200/start"
    And Clicks on A third sample quiz button
    Then Page Url should be "http://localhost:4200/play/a-third-sample-quizz"
    Then Enter answer for QFirst as "<answer1>" and QSecond as "<answer2>"
    Then Page Url should be "http://localhost:4200/result"
    Then check you passed the quiz
    Then Click on TryAgain button
    Then Page Url should be "http://localhost:4200/start"
    And close browser

    Examples: 
      | answer1 | answer2    |
      | Grün    | Noooooo... |


 Scenario Outline: InCorrect answers
    Given User Launch Chrome browser
    When User opens URL "http://localhost:4200/start"
    And Clicks on A third sample quiz button
    Then Page Url should be "http://localhost:4200/play/a-third-sample-quizz"
    Then Enter answer for QFirst as "<answer1>" and QSecond as "<answer2>"
    Then Page Url should be "http://localhost:4200/result"
    Then check you failed the quiz 
    Then Click on TryAgain button
    Then Page Url should be "http://localhost:4200/start"
    And close browser

    Examples: 
      | answer1 | answer2                         |
      | Green   | I am god                        |
      | Verde   | From a certain point of view... |
      | Grün    | From a certain point of view... |
