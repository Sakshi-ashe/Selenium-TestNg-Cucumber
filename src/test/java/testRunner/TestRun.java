package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
		(
				features=".//Features/CatalogLinksCheck.feature",
				glue="stepDefinitions",
				//dryRun = true,
				dryRun =false,
				monochrome=true,
				plugin = {"pretty","html:test-output-catalog-links-2.html"}
		)

public class TestRun {
	
	

}
