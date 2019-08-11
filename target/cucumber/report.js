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
  "name": "I go to \"http://blog:8090\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I set user name with \"invalid\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I set password with \"invalid\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see \"Invalid username and password.\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://blog:8090",
      "offset": 9
    }
  ],
  "location": "loginStepDef.i_go_to(String)"
});
formatter.result({
  "duration": 7026059428,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinitions.loginStepDef\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat com.microsoft.java.test.runner.junit4.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat com.microsoft.java.test.runner.junit4.CustomizedJUnit4CoreRunner.run(CustomizedJUnit4CoreRunner.java:45)\n\tat com.microsoft.java.test.runner.junit4.JUnit4Launcher.execute(JUnit4Launcher.java:30)\n\tat com.microsoft.java.test.runner.Launcher.main(Launcher.java:56)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 30 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed\n  (unknown error: unable to discover open pages)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027da6d5bb4e5eb\u0027, ip: \u0027172.17.0.3\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\nremote stacktrace: #0 0x55577f9ae749 \u003cunknown\u003e\n\nCommand duration or timeout: 4.02 seconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat stepDefinitions.Browser.launch(Browser.java:19)\n\tat stepDefinitions.loginStepDef.\u003cinit\u003e(loginStepDef.java:12)\n\t... 35 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed\n  (unknown error: unable to discover open pages)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027da6d5bb4e5eb\u0027, ip: \u0027172.17.0.3\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\nremote stacktrace: #0 0x55577f9ae749 \u003cunknown\u003e\n\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027osboxes\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.grid.session.remote.RemoteSession$Factory.performHandshake(RemoteSession.java:147)\n\tat org.openqa.selenium.grid.session.remote.ServicedSession$Factory.apply(ServicedSession.java:161)\n\tat org.openqa.selenium.remote.server.ActiveSessionFactory.lambda$apply$12(ActiveSessionFactory.java:180)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$11$1.accept(ReferencePipeline.java:440)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.ActiveSessionFactory.apply(ActiveSessionFactory.java:183)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.lambda$null$2(NewSessionPipeline.java:66)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.Collections$2.tryAdvance(Collections.java:4719)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.lambda$createNewSession$3(NewSessionPipeline.java:69)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.DistinctOps$1$2.accept(DistinctOps.java:175)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.stream.Streams$StreamBuilderImpl.tryAdvance(Streams.java:405)\n\tat java.util.stream.Streams$ConcatSpliterator.tryAdvance(Streams.java:728)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.createNewSession(NewSessionPipeline.java:72)\n\tat org.openqa.selenium.remote.server.commandhandler.BeginSession.execute(BeginSession.java:65)\n\tat org.openqa.selenium.remote.server.WebDriverServlet.lambda$handle$0(WebDriverServlet.java:235)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 22
    }
  ],
  "location": "loginStepDef.i_set_user_name_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 21
    }
  ],
  "location": "loginStepDef.i_set_password_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid username and password.",
      "offset": 14
    }
  ],
  "location": "loginStepDef.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "blog-login;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I go to \"http://blog:8090\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I set user name with \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I set password with \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"The HAL Browser (for Spring Data REST)\" header",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://blog:8090",
      "offset": 9
    }
  ],
  "location": "loginStepDef.i_go_to(String)"
});
formatter.result({
  "duration": 2790365392,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinitions.loginStepDef\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat com.microsoft.java.test.runner.junit4.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat com.microsoft.java.test.runner.junit4.CustomizedJUnit4CoreRunner.run(CustomizedJUnit4CoreRunner.java:45)\n\tat com.microsoft.java.test.runner.junit4.JUnit4Launcher.execute(JUnit4Launcher.java:30)\n\tat com.microsoft.java.test.runner.Launcher.main(Launcher.java:56)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 30 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed\n  (unknown error: unable to discover open pages)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027da6d5bb4e5eb\u0027, ip: \u0027172.17.0.3\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\nremote stacktrace: #0 0x562209a10749 \u003cunknown\u003e\n\nCommand duration or timeout: 2.62 seconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat stepDefinitions.Browser.launch(Browser.java:19)\n\tat stepDefinitions.loginStepDef.\u003cinit\u003e(loginStepDef.java:12)\n\t... 35 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed\n  (unknown error: unable to discover open pages)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027da6d5bb4e5eb\u0027, ip: \u0027172.17.0.3\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\nremote stacktrace: #0 0x562209a10749 \u003cunknown\u003e\n\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027osboxes\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-21-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.grid.session.remote.RemoteSession$Factory.performHandshake(RemoteSession.java:147)\n\tat org.openqa.selenium.grid.session.remote.ServicedSession$Factory.apply(ServicedSession.java:161)\n\tat org.openqa.selenium.remote.server.ActiveSessionFactory.lambda$apply$12(ActiveSessionFactory.java:180)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$11$1.accept(ReferencePipeline.java:440)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.ActiveSessionFactory.apply(ActiveSessionFactory.java:183)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.lambda$null$2(NewSessionPipeline.java:66)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.Collections$2.tryAdvance(Collections.java:4719)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.lambda$createNewSession$3(NewSessionPipeline.java:69)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.DistinctOps$1$2.accept(DistinctOps.java:175)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\n\tat java.util.stream.Streams$StreamBuilderImpl.tryAdvance(Streams.java:405)\n\tat java.util.stream.Streams$ConcatSpliterator.tryAdvance(Streams.java:728)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.server.NewSessionPipeline.createNewSession(NewSessionPipeline.java:72)\n\tat org.openqa.selenium.remote.server.commandhandler.BeginSession.execute(BeginSession.java:65)\n\tat org.openqa.selenium.remote.server.WebDriverServlet.lambda$handle$0(WebDriverServlet.java:235)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    }
  ],
  "location": "loginStepDef.i_set_user_name_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginStepDef.i_set_password_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The HAL Browser (for Spring Data REST)",
      "offset": 14
    }
  ],
  "location": "loginStepDef.i_should_see_header(String)"
});
formatter.result({
  "status": "skipped"
});
});