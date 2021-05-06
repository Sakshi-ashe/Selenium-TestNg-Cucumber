package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CatalogLinksPage {

	public WebDriver ldriver;

	public CatalogLinksPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	//@FindBy(css =  "img:contains('_logo_')")
	@FindBy(xpath= "//img[@src='../images/logo-topbar.gif']")
	@CacheLookup
	WebElement LOGO;
	
	//@FindBy(css =  "img:contains('_dogs_')")
	@FindBy(xpath= "//img[@src='../images/sm_dogs.gif']")
	@CacheLookup
	WebElement DOGS;
	
	//@FindBy(css =  "img:contains('_CATS_')")
	@FindBy(xpath= "//img[@src='../images/sm_cats.gif']")
	@CacheLookup
	WebElement CATS;
	
	//@FindBy(css =  "img:contains('_BIRDS_')")
	@FindBy(xpath= "//img[@src='../images/sm_birds.gif']")
	@CacheLookup
	WebElement BIRDS;
	

	//@FindBy(css =  "img:contains('_REPTILES_')")
	@FindBy(xpath= "//img[@src='../images/sm_reptiles.gif']")
	@CacheLookup
	WebElement REPTILES;
	

//	@FindBy(css =  "img:contains('_FISH_')")
	@FindBy(xpath= "//img[@src='../images/sm_fish.gif']")
	@CacheLookup
	WebElement FISH;
	
	public void clickpet(String pet) {
		if(pet.equals("BIRDS")) BIRDS.click();
		else if(pet.equals("DOGS")) DOGS.click();
		else if(pet.equals("REPTILES")) REPTILES.click();
		else if(pet.equals("FISH")) FISH.click();
		else if(pet.equals("CATS")) CATS.click();
		
	}
	
	public void clickLogo() {
		LOGO.click();
	}

}
