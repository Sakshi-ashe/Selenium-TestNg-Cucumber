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

	@FindBy(xpath = "//span[contains(.,'A Sample Quizz')]")
	@CacheLookup
	WebElement btnSecondQuiz;
	
	public void clickBtnSecondQiz() {
		btnSecondQuiz.click();
	}
	

	
	
}
