package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ThirdSample {
	
	public WebDriver ldriver;

	public ThirdSample(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//span[contains(.,'A Third Sample Quizz')]")
	@CacheLookup
	WebElement btnThirdQuiz;

	@FindBy(xpath = "//span[contains(.,'Green')]")
	@CacheLookup
	WebElement q1op1;
	
	@FindBy(xpath = "//span[contains(.,'Grün')]")
	@CacheLookup
	WebElement q1op2;
	
	@FindBy(xpath = "//span[contains(.,'Verde')]")
	@CacheLookup
	WebElement q1op3;
	
	
	@FindBy(xpath = "//span[contains(.,'From a certain point of view...')]")
	@CacheLookup
	WebElement q2op1;
	
	@FindBy(xpath = "//span[contains(.,'I am god')]")
	@CacheLookup
	WebElement q2op2;
	
	@FindBy(xpath = "//span[contains(.,'Noooooo...')]")
	@CacheLookup
	WebElement q2op3;
	

	@FindBy(xpath = "//span[contains(.,'Try again!')]")
	@CacheLookup
	WebElement btntryAgain;
	
	@FindBy(xpath = "//md-icon[contains(text(),'check')]")
	@CacheLookup
	WebElement ResponseCorrect;
	
	@FindBy(xpath = " //md-icon[contains(text(),'clear')]")
	@CacheLookup
	WebElement ResponseIncorrect;
	
	

	public void clickBtnThirdQiz() {
		btnThirdQuiz.click();
	}
	
	public void clickBtnQues1Option1() {
		q1op1.click();
	}

	public void clickBtnQues1Option2() {
		q1op2.click();
	}
	public void clickBtnQues1Option3() {
		q1op3.click();
	}
	public void clickBtnQues2Option1() {
		q2op1.click();
	}
	public void clickBtnQues2Option2() {
		q2op2.click();
	}
	public void clickBtnQues2Option3() {
		q2op3.click();
	}

	public void clickBtnTryAgain() {
		btntryAgain.click();
	}
	
	public boolean ResponseCorrect() {
		return ResponseCorrect.isDisplayed();
	}
	public boolean ResponseIncorrect() {
		return ResponseIncorrect.isDisplayed();
	}


	
}
