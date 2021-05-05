package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {

	// one type is implicit wait 
	//this we are looking at explicit wait
	public WebDriver driver;
	
	public WaitHelper(WebDriver driver) {
		this.driver = driver;
	}
	
	//waits till element is visible on webpage
	public void WaitForElement(WebElement element , long timeOutInSec) {
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSec);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
}
