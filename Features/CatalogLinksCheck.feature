Feature: CatalogLinks

  Scenario Outline: Catalog links working
    Given User Launch Chrome browser
    When User opens URL "https://petstore.octoperf.com/"
    And Clicks on Enter the store link
    Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
    When link "<catalogLinkName>" is pressed
    Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
    And Page Url should be "categoryId=<catalogLinkName>"
    
    And close browser

    Examples: 
      | catalogLinkName |
      | DOGS            |
      | CATS            |
      | BIRDS           |
      | FISH            |
      | REPTILES        |

  Scenario: Logo href working
    Given User Launch Chrome browser
    When User opens URL "https://petstore.octoperf.com/"
    And Clicks on Enter the store link
    Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
    When link "DOGS" is pressed
    Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
    When logo clicked
    Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
    And close browser
