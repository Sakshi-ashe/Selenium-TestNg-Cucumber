package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignUpPage {

	public WebDriver ldriver;

	public SignUpPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(linkText = "Register Now!")
	@CacheLookup
	WebElement register;
	
	
	@FindBy(xpath = "//input[@name='username']")
	@CacheLookup
	WebElement username;
	
	@FindBy(xpath = "//input[@name='password']")
	@CacheLookup
	WebElement password;
	
	@FindBy(xpath = "//input[@name='repeatedPassword']")
	@CacheLookup
	WebElement repeatedPassword;
	
	@FindBy(xpath = "//input[@name='account.firstName']")
	@CacheLookup
	WebElement firstName;
	
	@FindBy(xpath = "//input[@name='account.lastName']")
	@CacheLookup
	WebElement lastName;
	
	@FindBy(xpath = "//input[@name='account.email']")
	@CacheLookup
	WebElement email;
	
	@FindBy(xpath = "//input[@name='account.phone']")
	@CacheLookup
	WebElement phone;

	@FindBy(xpath = "//input[@name='account.address1']")
	@CacheLookup
	WebElement address1;
	
	@FindBy(xpath = "//input[@name='account.address2']")
	@CacheLookup
	WebElement address2;
	
	@FindBy(xpath = "//input[@name='account.zip']")
	@CacheLookup
	WebElement zip;
	
	@FindBy(xpath = "//input[@name='account.city']")
	@CacheLookup
	WebElement city;
	
	@FindBy(xpath = "//input[@name='account.state']")
	@CacheLookup
	WebElement state;
	
	@FindBy(xpath = "//input[@name='account.country']")
	@CacheLookup
	WebElement country;
	
	
	@FindBy(xpath = "//select[@name='account.languagePreference']")
	@CacheLookup
	WebElement selectLang;
	
	
	@FindBy(xpath = "//option[@value='english']")
	@CacheLookup
	WebElement english;
	
	@FindBy(xpath = "//option[@value='japanese']")
	@CacheLookup
	WebElement japanese;
	
	
	@FindBy(xpath = "//select[@name='account.favouriteCategoryId']")
	@CacheLookup
	WebElement selectPrefrence;
	
	@FindBy(xpath = "//option[@value='DOGS']")
	@CacheLookup
	WebElement DOGS;
	
	@FindBy(xpath = "//option[@value='FISH']")
	@CacheLookup
	WebElement FISH;
	
	@FindBy(xpath = "//option[@value='REPTILES']")
	@CacheLookup
	WebElement REPTILES;
	
	@FindBy(xpath = "//option[@value='CATS']")
	@CacheLookup
	WebElement CATS;
	
	@FindBy(xpath = "//option[@value='BIRDS']")
	@CacheLookup
	WebElement BIRDS;
	
	@FindBy(xpath = "//select[@name='account.listOption']")
	@CacheLookup
	WebElement listOption;
	
	@FindBy(xpath = "//input[@type='submit']")
	@CacheLookup
	WebElement submit;
	
	
	public void setUseriD(String userid) {
		username.clear();
		username.sendKeys(userid);
	}

	public void setPass(String pwd) {
		password.clear();
		password.sendKeys(pwd);
	}
	public void setRepPass(String pwd2) {
		repeatedPassword.clear();
		repeatedPassword.sendKeys(pwd2);
	}
	public void setFirstName(String fn) {
		firstName.clear();
		firstName.sendKeys(fn);
	}
	public void setLastName(String pwd) {
		lastName.clear();
		lastName.sendKeys(pwd);
	}
	public void setemail(String pwd) {
		email.clear();
		email.sendKeys(pwd);
	}
	public void setPhone(String pwd) {
		phone.clear();
		phone.sendKeys(pwd);
	}
	public void setadd1(String pwd) {
		address1.clear();
		address1.sendKeys(pwd);
	}
	public void setadd2(String pwd) {
		address2.clear();
		address2.sendKeys(pwd);
	}
	public void setcity(String pwd) {
		city.clear();
		city.sendKeys(pwd);
	}
	public void setstate(String pwd) {
		state.clear();
		state.sendKeys(pwd);
	}
	public void setzip(String pwd) {
		zip.clear();
		zip.sendKeys(pwd);
	}
	public void setcountry(String pwd) {
		country.clear();
		country.sendKeys(pwd);
	}
	public void setLang(String Lang) {
		if(Lang.equals("english"))
		{
			(english).click();
		}
		else if(Lang.equals("japanese"))
		{
			(japanese).click();
		}
		else
		{
			(english).click();//Default
		}
	
	}
	public void setUserPref(String pref) {
		if(pref.equals("BIRD"))
		{
			(BIRDS).click();
		}
		else if(pref.equals("DOGS"))
		{
			(DOGS).click();
		}
		else if(pref.equals("FISH"))
		{
			(FISH).click();
		}
		else if(pref.equals("REPTILES"))
		{
			(REPTILES).click();
		}
		else if(pref.equals("CATS"))
		{
			(CATS).click();
		}
		else
		{
			(FISH).click();
		}
		}
	public void setMylist() {
		listOption.click();
	}

	public void clickRegister() {
		register.click();
	}

	public void clickSubmit() {
		submit.click();
	}


}
