package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver ldriver;

	public LoginPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath = "//input[@name='username']")
	@CacheLookup
	WebElement txtUsername;

	@FindBy(xpath="//input[@name='password']")
	@CacheLookup
	WebElement txtPassword;

	@FindBy(xpath = "//a[contains(text(),'Sign In')]")
	@CacheLookup
	WebElement LinkSignIn;

	@FindBy(linkText = "Logout")
	@CacheLookup
	WebElement lnkLogout;
	
	@FindBy(xpath = "//input[@name='signon']")
	@CacheLookup
	WebElement LinkLogIn;
	
	@FindBy(xpath = "//a[contains(text(),'Sign Out')]")
	@CacheLookup
	WebElement LinkSignOut;
	
	public void setUserName(String uname) {
		txtUsername.clear();
		txtUsername.sendKeys(uname);

	}

	public void setPassword(String pwd) {
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}

	public void clickSignIn() {
		LinkSignIn.click();
	}

	public void clickLogin() {
		LinkLogIn.click();
	}

	public void clickLogout() {
		LinkSignOut.click();
	}
	
	
	
}