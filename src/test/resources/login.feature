Feature: Blog Login
  Scenario:
    Given I go to "http://petclinic:8100/owners/find"
    And I click on home button
    Then I should see "Owners" tag
