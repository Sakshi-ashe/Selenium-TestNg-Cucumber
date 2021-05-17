package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FirstSample {
	
	public WebDriver ldriver;

	public FirstSample(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//span[contains(.,'A Sample Quizz')]")
	@CacheLookup
	WebElement btnFirstQuiz;
	
	public void clickBtnFirstQiz() {
		btnFirstQuiz.click();
	}
	

	//@FindBy(xpath="//body/app-root[1]/div[1]/div[2]/app-start-page[1]/md-card[1]/div[1]/ul[1]/li[1]/button[1]/span[1]")
	//private WebElement homePage;
	
	@FindBy(xpath="//span[contains(text(),'What is life?')]")
	private WebElement option1;
	@FindBy(xpath="//span[contains(text(),'42')]")
	private WebElement option2;
	@FindBy(xpath="//span[contains(text(),'There is none')]")
	private WebElement option3;
	@FindBy(xpath="//span[contains(text(),'Love')]")
	private WebElement option4;
	@FindBy(xpath="//span[contains(text(),'No one')]")
	private WebElement option5;
	@FindBy(xpath="//span[contains(text(),'I am a rockstar')]")
	private WebElement option6;
	@FindBy(xpath="//span[contains(text(),'Try again!')]")
	private WebElement tryAgain;

	
	public void getOption1() {
		 option1.click();
	}
	public void getOption2() {
		 option2.click();;
	}
	
	public void getOption3() {
		 option3.click();
	}

	public void getOption4() {
		 option4.click();
	}
	public void getOption5() {
		 option5.click();
	}
	public void getOption6() {
		 option6.click();
	}
	public void getTryAgain() {
		 tryAgain.click();
	}


}
