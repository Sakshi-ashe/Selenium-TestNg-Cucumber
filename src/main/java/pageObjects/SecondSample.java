package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SecondSample {

	public WebDriver ldriver;

	public SecondSample(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//span[contains(.,'A Second Sample Quizz')]")
	@CacheLookup
	WebElement btnSecondQuiz;
	
	public void clickBtnSecondQiz() {
		btnSecondQuiz.click();
	}
	
	@FindBy(xpath = "//span[contains(.,'What?')]")
	@CacheLookup
	WebElement q1op1;
	
	@FindBy(xpath = "//span[contains(.,'Exactly 1')]")
	@CacheLookup
	WebElement q1op2;
	
	@FindBy(xpath = "//span[contains(.,'1')]")
	@CacheLookup
	WebElement q1op3;
	
	
	@FindBy(xpath = "//span[contains(.,'Because I am driving a Ferrari')]")
	@CacheLookup
	WebElement q2op1;
	
	@FindBy(xpath = "//span[contains(.,'Reasons')]")
	@CacheLookup
	WebElement q2op2;
	
	@FindBy(xpath = "//span[contains(.,'I am a secret agent, can't tell you')]")
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
