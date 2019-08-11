package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Browser {

    public static WebDriver launch() throws MalformedURLException {
        ChromeOptions options = new ChromeOptions();
        
        String host = "http://localhost:4444/wd/hub";
        options.setAcceptInsecureCerts(true);
        
        RemoteWebDriver driver = new RemoteWebDriver(new URL(host),options);
        
        return driver;
    }
}