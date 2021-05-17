package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateNew {
	
	public WebDriver ldriver;

	public CreateNew(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}


	@FindBy(xpath="//span[contains(.,'Create a new one')]")
	@CacheLookup
	WebElement createNewBtn;
	
	@FindBy(xpath="//input[@id='md-input-0']")
	private WebElement quizName;
	@FindBy(xpath="//span[contains(.,'OK')]")
	private WebElement nameOk;
	@FindBy(xpath="//span[contains(.,'Save quizz')]")
	private WebElement saveQuiz;
	@FindBy(xpath="//h2[contains(.,'Existing quizzes:')]")
	private WebElement existing;
	
	
	public void CreateNewOne() {
	
		 createNewBtn.click();;
	}
	
	public void QuizName(String name) {
		 quizName.sendKeys(name);;
	}
	
	public void NameOk() {
		
		 nameOk.click();;
	}
	
	public void SaveQuiz() {
		 saveQuiz.click();;
	}
	
	public boolean Existing() {
		 return existing.isDisplayed();
	}
	
	
}
