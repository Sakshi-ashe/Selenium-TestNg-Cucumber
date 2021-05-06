Feature: Login

Scenario: Successful Login with Valid Credentials 
	Given User Launch Chrome browser 
	When User opens URL "https://petstore.octoperf.com/" 
	And Clicks on Enter the store link
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
	When Click on sign in link
	Then Page Url should be "https://petstore.octoperf.com/actions/Account.action"
	And User enters Username as "sakshi17" and Password as "pass" 
	And Click on Login 
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action" 
	When User click on Log out link 
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action" 
	And close browser 
	
	
