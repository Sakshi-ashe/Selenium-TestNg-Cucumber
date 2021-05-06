Feature: Signup1

Scenario: Successful Register with Valid Credentials 
	Given User Launch Chrome browser 
	When User opens URL "https://petstore.octoperf.com/" 
	And Clicks on Enter the store link
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action"
	When Click on sign in link
	Then Page Url should be "https://petstore.octoperf.com/actions/Account.action"
	And user click on register now
	Then Page Url should be "https://petstore.octoperf.com/actions/Account.action?newAccountForm=" 
	And enters form details  userid "sakshi20", pass "pass", repPass "pass", fn "Sakshi", ln "Gupta", email "sakshi20@gmail.com",phn "7070707070",add1 "add1",	 add2 "add2",		 city "agra",		 state "UttarPradesh"		,	 zip "12345",			 country "India",				 lang "english",		 Pref "DOGS"
	When User click on submit details link 
	Then Page Url should be "https://petstore.octoperf.com/actions/Catalog.action" 
	And close browser 