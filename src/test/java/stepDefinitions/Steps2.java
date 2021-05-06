package stepDefinitions;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pageObjects.CatalogLinksPage;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.SignUpPage;
public class Steps2 extends BaseClass2{
	
	//################Home Page step defs
		@Given("User Launch Chrome browser")
		public void user_Launch_Chrome_browser() {
			System.setProperty("webdriver.chrome.driver","/home/sakshi.gupta3/Downloads/chromedriver_linux64/chromedriver");
			ChromeOptions options = new ChromeOptions();
			
			options.addArguments("start-maximized");
			
			driver = new ChromeDriver(options);

			hp=new HomePage(driver);
		}

		@When("User opens URL {string}")
		public void user_opens_URL(String url) {
		
		System.out.println("********* Opening URL **************");
		driver.get(url);
		driver.manage().window().maximize();
		}


	@When("Clicks on Enter the store link")
	public void clicks_on_enter_the_store_link() throws InterruptedException {
	   hp.clickEnterStore();
	   Thread.sleep(2000);
	}

	@Then("Page Url should be {string}")
	public void page_url_should_be(String url) throws InterruptedException {
	    System.out.println("#####"+driver.getCurrentUrl());
	    Thread.sleep(2000);

		
		if(driver.getCurrentUrl().contains(url))
		{	Assert.assertTrue(true);

		}
		else
		{	driver.close();
			Assert.assertTrue(false);
		}
		Thread.sleep(3000);

	}

	@Then("close browser")
	public void close_browser() {
		System.out.println("********* Closing browser **************");
		driver.quit();
	}
	
	
	//####################Login page step defs
	@When("Click on sign in link")
	public void click_on_sign_in_link() throws InterruptedException {
	    lp = new LoginPage(driver);
	    lp.clickSignIn();
//	    Thread.sleep(2000);
	    
	}

	@When("User enters Username as {string} and Password as {string}")
	public void user_enters_username_as_and_password_as(String string, String string2) {
		System.out.println("********* Providing User and Password **************");
		lp.setUserName(string);
		lp.setPassword(string2);
	   
	}

	@When("Click on Login")
	public void click_on_login() {
	    lp.clickLogin();
	}

	@When("User click on Log out link")
	public void user_click_on_log_out_link() {
	   lp.clickLogout();
	}

	
	//###############register page step defs
	@Then("user click on register now")
	public void user_click_on_register_now() {
	  sp = new SignUpPage(driver);
	  sp.clickRegister();
	}

	@Then("enters form details  userid {string}, pass {string}, repPass {string}, fn {string}, ln {string}, email {string},phn {string},add1 {string},	 add2 {string},		 city {string},		 state {string}		,	 zip {string},			 country {string},				 lang {string},		 Pref {string}")
	public void enters_form_details_userid_pass_rep_pass_fn_ln_email_phn_add1_add2_city_state_up_zip_country_lang_pref(
							String userid,
							String pass,
							String repPass,
							String fn,
							String ln,
							String email,
							String phn,
							String add1,
							String add2,
							String city,
							String state,
							String zip,
							String country,
							String lang,
							String Pref) {
		
	    sp.setUseriD(userid);
	    sp.setPass(pass);
	    sp.setRepPass(repPass);
	    
	    sp.setFirstName(fn);
	    sp.setLastName(ln);
	    sp.setemail(email);
	    sp.setPhone(phn);
	    sp.setadd1(add1);
	    sp.setadd2(add2);
	    sp.setcity(city);
	    sp.setstate(state);
	    sp.setzip(zip);
	    sp.setcountry(country);
	    
	    sp.setLang(lang);
	    sp.setUserPref(Pref);
	}

	@When("User click on submit details link")
	public void user_click_on_submit_details_link() {
	    sp.clickSubmit();
	}


	//##########Catalog link step def
	
	@When("link {string} is pressed")
	public void link_is_pressed(String string) {
	    cp = new CatalogLinksPage(driver);
	    cp.clickpet(string);
	}

	@When("logo clicked")
	public void logo_clicked() {
	    cp.clickLogo();
	}

	
}
