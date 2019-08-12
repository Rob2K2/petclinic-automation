$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Blog Login",
  "description": "",
  "id": "blog-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "",
  "description": "",
  "id": "blog-login;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I go to \"http://petclinic:8100/owners/find\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click on home button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://petclinic:8100/owners/find",
      "offset": 9
    }
  ],
  "location": "loginStepDef.i_go_to(String)"
});
formatter.result({
  "duration": 8245077268,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d76.0.3809.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027osboxes\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 76.0.3809.87, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /tmp/.com.google.Chrome.JE3oxQ}, goog:chromeOptions: {debuggerAddress: localhost:33735}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 83736fdd835ad6f25484a3be103...}\nSession ID: 83736fdd835ad6f25484a3be10373b84\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat stepDefinitions.loginStepDef.i_go_to(loginStepDef.java:20)\n\tat ✽.Given I go to \"http://petclinic:8100/owners/find\"(login.feature:3)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDef.i_click_on_home_button()"
});
formatter.result({
  "status": "skipped"
});
});