Feature: Home

Scenario: Enter the store
	Given User Launch Chrome browser 
	When User opens URL "https://petstore.octoperf.com/" 
	And Clicks on Enter the store link
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
	And close browser
	
	
