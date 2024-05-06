@foo
Feature: Login

  Background: Navigation
    Given Go to the login website

  Scenario: Success login
    Then The page title "Test Login | Practice Test Automation"
    When Enter the user name "student"
    And Enter the password "Password123"
    And Click in "Submit"
    Then We see the message "Logged In Successfully"

  Scenario: Wrong password
    Then The page title "Test Login | Practice Test Automation"
    When Enter the user name "student"
    And Enter the password "Password12"
    And Click in "Submit"
    Then We see the and error message
