package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.CreateNew;
import pageObjects.FirstSample;
import pageObjects.SecondSample;
import pageObjects.ThirdSample;

public class StepQuiz {

	public WebDriver driver;
	public ThirdSample third;
	public FirstSample first;
	public SecondSample second;
	public CreateNew createNewPage;

	
	//third sample quiz step defs

	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver","/home/sakshi.gupta3/Downloads/chromedriver_linux64/chromedriver");
		ChromeOptions options = new ChromeOptions();
		
		options.addArguments("start-maximized");
		
		driver = new ChromeDriver(options);

		third=new ThirdSample(driver);
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		System.out.println("********* Opening URL **************");
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("^Clicks on A third sample quiz button$")
	public void clicks_on_A_third_sample_quiz_button() throws Throwable {
	    third.clickBtnThirdQiz();
	}

	@Then("^Page Url should be \"([^\"]*)\"$")
	public void page_Url_should_be(String arg1) throws Throwable {
	    System.out.println("#####"+driver.getCurrentUrl());
	    Thread.sleep(2000);

		
		if(driver.getCurrentUrl().contains(arg1))
		{	Assert.assertTrue(true);

		}
		else
		{	driver.close();
			Assert.assertTrue(false);
		}
		Thread.sleep(3000);
	}

	@Then("^Enter answer for QFirst as \"([^\"]*)\" and QSecond as \"([^\"]*)\"$")
	public void enter_answer_for_QFirst_as_and_QSecond_as(String arg1, String arg2) throws Throwable {
		
		if(arg1.equals("Green"))
		{
			third.clickBtnQues1Option1();
		}
		else if(arg1.equals("Grün"))
		{
			third.clickBtnQues1Option2();
		}
		else if(arg1.equals("Verde"))
		{
			third.clickBtnQues1Option3();
		}
		
		if(arg2.equals("From a certain point of view..."))
		{
			third.clickBtnQues2Option1();
		}
		else if(arg2.equals("I am god"))
		{
			third.clickBtnQues2Option2();
		}
		else if(arg2.equals("Noooooo..."))
		{
			third.clickBtnQues2Option3();
		}
	}

	@Then("^check you passed the quiz$")
	public void check_you_passed_the_quiz() throws Throwable {
		if(third.ResponseCorrect()) {
			System.out.println("Test passed");
			Assert.assertTrue(true);
		}
		else {
			System.out.println("Test failed");
			Assert.assertTrue(false);
		}
	}


	@Then("^Click on TryAgain button$")
	public void click_on_TryAgain_button() throws Throwable {
		third.clickBtnTryAgain();
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		System.out.println("********* Closing browser **************");
		driver.quit();
	}

	@Then("^check you failed the quiz$")
	public void check_you_failed_the_quiz() throws Throwable {
		if(third.ResponseIncorrect()) {
			System.out.println("Test passed");
			Assert.assertTrue(true);
		}
		else {
			System.out.println("Test failed");
			Assert.assertTrue(false);
		}
	}

	
	//Sample quiz step defs
	
	@When("^Clicks on A first sample quiz button$")
	public void clicks_on_A_first_sample_quiz_button() throws Throwable {
		first = new FirstSample(driver);
		first.clickBtnFirstQiz();
}

	@Then("^Enter answer for quizOne QFirst as \"([^\"]*)\" and QSecond as \"([^\"]*)\"$")
	public void enter_answer_for_quizOne_QFirst_as_and_QSecond_as(String arg1, String arg2) throws Throwable {

		if(arg1.equals("What is life?"))
		{
			first.getOption1();
		}
		else if(arg1.equals("42"))
		{
			first.getOption2();

		}
		else if(arg1.equals("There is none"))
		{
			first.getOption3();

		}
		
		if(arg2.equals("Love"))
		{
			Thread.sleep(3000);
			first.getOption4();

		}
		else if(arg2.equals("No one"))
		{
			Thread.sleep(3000);
			first.getOption5();

		}
		else if(arg2.equals("I am a rockstar"))
		{
			Thread.sleep(3000);

			first.getOption6();

		}

	}
	
	
	//create new step defs
	@When("^click add new button$")
	public void click_add_new_button() throws Throwable {
		createNewPage = new CreateNew(driver);
		createNewPage.CreateNewOne();
	}

	@When("^give name to quiz$")
	public void give_name_to_quiz() throws Throwable {
		createNewPage.QuizName("new new");
	}

	@Then("^save page loaded$")
	public void save_page_loaded() throws Throwable {
		createNewPage.NameOk();
	}

	@When("^save quiz$")
	public void save_quiz() throws Throwable {
		 Thread.sleep(3000);

		createNewPage.SaveQuiz();
	}

	@Then("^fresh page is loaded$")
	public void fresh_page_is_loaded() throws Throwable {
		if(createNewPage.Existing()) {
			  System.out.println("sucess");
		  }
		  else
			  System.out.println("failed");
	}


	//second sample step defs
	@When("^Clicks on A second sample quiz button$")
	public void clicks_on_A_second_sample_quiz_button() throws Throwable {
		second = new SecondSample(driver);
		second.clickBtnSecondQiz();
}

	
	@Then("^Enter answer for quizTwo QFirst as \"([^\"]*)\" and QSecond as \"([^\"]*)\"$")
	public void enter_answer_for_quizTwo_QFirst_as_and_QSecond_as(String arg1, String arg2) throws Throwable {

		if(arg1.equals("What?"))
		{
			second.clickBtnQues1Option1();
		}
		else if(arg1.equals("Exactly 1"))
		{
			second.clickBtnQues1Option2();

		}
		else if(arg1.equals("1"))
		{
			second.clickBtnQues1Option3();

		}
		
		if(arg2.equals("Because I am driving a Ferrari"))
		{
			second.clickBtnQues2Option1();

		}
		else if(arg2.equals("Reasons"))
		{
			Thread.sleep(3000);
			second.clickBtnQues2Option2();

		}
		else if(arg2.equals("I am a secret agent, can't tell you"))
		{
			Thread.sleep(3000);

			second.clickBtnQues2Option3();

		}

	}
}
