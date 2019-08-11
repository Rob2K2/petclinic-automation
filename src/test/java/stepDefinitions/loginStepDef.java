package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.net.MalformedURLException;

public class loginStepDef {
    WebDriver driver = Browser.launch();

    public loginStepDef() throws MalformedURLException {
    }

    @Given("^I go to \"([^\"]*)\"$")
    public void i_go_to(String url) throws Throwable {
        driver.get(url);
        driver.manage().window().maximize();
    }

    @Then("^I click on home button$")
    public void i_click_on_home_button() throws Throwable {
        driver.findElement(By.xpath("//input[@class='btn btn-primary btn-block']")).click();
    }

    @Then("^I should see \"([^\"]*)\" tag$")
    public void i_should_see_tag(String expectedMesage) throws Throwable {
        String tag = driver.findElement(By.xpath("//div[@class='container xd-container']")).getText();
        Assert.assertTrue(tag.contains(expectedMesage));
    }
/*
    @Then("^I should see \"([^\"]*)\" header$")
    public void i_should_see_header(String expectedHeader) throws Throwable {
        String header = driver.findElement(By.xpath("//a[@class='brand']")).getText();
        Assert.assertTrue(header.contains(expectedHeader));
    }
*/
}
