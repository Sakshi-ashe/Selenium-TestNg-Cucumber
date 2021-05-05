package stepDefinitions;


//import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

import org.openqa.selenium.By;


public class Steps  extends BaseClass{
		
	//################Login Page
	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {
		System.setProperty("webdriver.chrome.driver","/home/sakshi.gupta3/Downloads/chromedriver_linux64/chromedriver");
		ChromeOptions options = new ChromeOptions();
		
		options.addArguments("start-maximized");
		
		driver = new ChromeDriver(options);

		lp=new LoginPage(driver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
	
	System.out.println("********* Opening URL **************");
	driver.get(url);
	driver.manage().window().maximize();
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String email, String password) {
		System.out.println("********* Providing User and Password **************");
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("Click on Login")
	public void click_on_Login() {
		System.out.println("********* Clicking on Login **************");
		lp.clickLogin();
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String exptitle) throws InterruptedException {
	    System.out.println(driver.getCurrentUrl());
	    Thread.sleep(2000);

		
		if(driver.findElement(By.tagName("body")).getText()
				.contains("Login was unsuccessful. Please correct the errors and try again."))
		{
			System.out.println("********* Login Failed **************");
			driver.close();
			Assert.assertTrue(false);
		}
		else
		{	System.out.println("********* Login Successful **************");
			Assert.assertEquals(exptitle, driver.getTitle());
		}
		Thread.sleep(3000);
		
	}

	@When("User click on Log out link")
	public void user_click_on_Log_out_link() throws InterruptedException {
		System.out.println("********* Clicking on Logout **************");
		lp.clickLogout();
	    Thread.sleep(3000);
	}
	
	

	@Then("close browser")
	public void close_browser() {
		System.out.println("********* Closing browser **************");
		driver.quit();
	}
	
	//####################Add Customer Page
	@Then("User can view Dashboad")
	public void user_can_view_Dashboad() {
		System.out.println("********* Verifying Dashboad page title after login successful **************");
		addCust=new AddCustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle());
	}

	@When("User click on customers Menu")
	public void user_click_on_customers_Menu() throws InterruptedException {
		Thread.sleep(3000);
		System.out.println("********* Clicking on customer main menu **************");
		addCust.clickOnCustomersMenu();
	}

	@When("click on customers Menu Item")
	public void click_on_customers_Menu_Item() throws InterruptedException {
		Thread.sleep(2000);
		System.out.println("********* Clicking on customer sub menu **************");
		addCust.clickOnCustomersMenuItem();
	}

	@When("click on Add new button")
	public void click_on_Add_new_button() throws InterruptedException {
		  addCust.clickOnAddnew();
		  Thread.sleep(2000);
	}

	@Then("User can view Add new customer page")
	public void user_can_view_Add_new_customer_page() {
		 Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
	}

	@When("User enter customer info")
	public void user_enter_customer_info() throws InterruptedException {
		System.out.println("*********Proving customer info **************");
		String email = randomString() + "@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");
		// Registered - default
		// The customer cannot be in both 'Guests' and 'Registered' customer roles
		// Add the customer to 'Guests' or 'Registered' customer role
		//addCust.setCustomerRoles("Registered");
		Thread.sleep(3000);

		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Sakshi");
		addCust.setLastName("Gupta");
		addCust.setDob("3/17/1998"); 
		addCust.setCompanyName("GL");
		addCust.setAdminContent("This is for testing.........");
	}

	@When("click on Save button")
	public void click_on_Save_button() throws InterruptedException {
		System.out.println("********* Saving customer details **************");  
		addCust.clickOnSave();
		   Thread.sleep(2000);
	}

	@Then("User can view confirmation message {string}")
	public void user_can_view_confirmation_message(String string) {
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				//.contains(string));
				.contains("The new customer has been added successfully"));
	}
	
	//steps for searching a customer using Email ID..............
	
		@When("Enter customer EMail")
		public void enter_customer_EMail() {
			System.out.println("********* Searching customer details by Email **************");
			searchCust=new SearchCustomerPage(driver);
			searchCust.setEmail("victoria_victoria@nopCommerce.com");
		}

		@When("Click on search button")
		public void click_on_search_button() throws InterruptedException {
			searchCust.clickSearch();
			Thread.sleep(3000);
		}

		@Then("User should found Email in the Search table")
		public void user_should_found_Email_in_the_Search_table() {
			boolean status=searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
			Assert.assertEquals(true, status);
		}
		
		//steps for searching a customer by Name................
		@When("Enter customer FirstName")
		public void enter_customer_FirstName() {
			System.out.println("********* Searching customer details by Name **************");
			searchCust=new SearchCustomerPage(driver);
			searchCust.setFirstName("Victoria");
		}

		@When("Enter customer LastName")
		public void enter_customer_LastName() {
			searchCust.setLastName("Terces");
		}

		@Then("User should found Name in the Search table")
		public void user_should_found_Name_in_the_Search_table() {
			boolean status=searchCust.searchCustomerByName("Victoria Terces");
			Assert.assertEquals(true, status);
		}
		

	

	
}
