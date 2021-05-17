
Feature: Create New

  Scenario: Testing to create new quiz
    Given User Launch Chrome browser
    When User opens URL "http://localhost:4200/start"
    When click add new button
    And give name to quiz
    Then save page loaded
    When save quiz
    Then fresh page is loaded
    And close browser
    