$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateNew.feature");
formatter.feature({
  "line": 2,
  "name": "Create New",
  "description": "",
  "id": "create-new",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Testing to create new quiz",
  "description": "",
  "id": "create-new;testing-to-create-new-quiz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click add new button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "give name to quiz",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "save page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "save quiz",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "fresh page is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 1256508544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1910652092,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_add_new_button()"
});
formatter.result({
  "duration": 122092322,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.give_name_to_quiz()"
});
formatter.result({
  "duration": 140377402,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.save_page_loaded()"
});
formatter.result({
  "duration": 95315542,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.save_quiz()"
});
formatter.result({
  "duration": 3143635891,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.fresh_page_is_loaded()"
});
formatter.result({
  "duration": 93101127,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 74762072,
  "status": "passed"
});
formatter.uri("FirstSample.feature");
formatter.feature({
  "line": 1,
  "name": "FirstSample",
  "description": "",
  "id": "firstsample",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Correct answers",
  "description": "",
  "id": "firstsample;correct-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for quizOne QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "firstsample;correct-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 16,
      "id": "firstsample;correct-answers;;1"
    },
    {
      "cells": [
        "42",
        "I am a rockstar"
      ],
      "line": 17,
      "id": "firstsample;correct-answers;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Correct answers",
  "description": "",
  "id": "firstsample;correct-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for quizOne QFirst as \"42\" and QSecond as \"I am a rockstar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 520602976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1920749608,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 128282299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5024088522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 36
    },
    {
      "val": "I am a rockstar",
      "offset": 56
    }
  ],
  "location": "StepQuiz.enter_answer_for_quizOne_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 3190190600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5020669808,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "duration": 87094302,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 94879129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5026401325,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72800714,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "InCorrect answers",
  "description": "",
  "id": "firstsample;incorrect-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for quizOne QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "firstsample;incorrect-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 33,
      "id": "firstsample;incorrect-answers;;1"
    },
    {
      "cells": [
        "Love",
        "I am a rockstar"
      ],
      "line": 34,
      "id": "firstsample;incorrect-answers;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "InCorrect answers",
  "description": "",
  "id": "firstsample;incorrect-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for quizOne QFirst as \"Love\" and QSecond as \"I am a rockstar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 515267840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1768378583,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 130959542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5021634967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Love",
      "offset": 36
    },
    {
      "val": "I am a rockstar",
      "offset": 58
    }
  ],
  "location": "StepQuiz.enter_answer_for_quizOne_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 3051627035,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027I am a rockstar\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027del1-lhp-n72302\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-53-generic\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /tmp/.com.google.Chrome.w6ZDU2}, goog:chromeOptions: {debuggerAddress: localhost:43879}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6e266cd53bc8e8d483f9bf05c4e1a8df\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027I am a rockstar\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\n\tat pageObjects.FirstSample.getOption6(FirstSample.java:64)\n\tat stepDefinitions.StepQuiz.enter_answer_for_quizOne_QFirst_as_and_QSecond_as(StepQuiz.java:174)\n\tat ✽.Then Enter answer for quizOne QFirst as \"Love\" and QSecond as \"I am a rockstar\"(FirstSample.feature:25)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Second.feature");
formatter.feature({
  "line": 1,
  "name": "secondSample",
  "description": "",
  "id": "secondsample",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Correct answers",
  "description": "",
  "id": "secondsample;correct-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for quizTwo QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "secondsample;correct-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 16,
      "id": "secondsample;correct-answers;;1"
    },
    {
      "cells": [
        "What?",
        "Reasons"
      ],
      "line": 17,
      "id": "secondsample;correct-answers;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Correct answers",
  "description": "",
  "id": "secondsample;correct-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for quizTwo QFirst as \"What?\" and QSecond as \"Reasons\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 487660107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 2005077733,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 125419957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-second-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 2107889979,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat org.testng.Assert.assertTrue(Assert.java:54)\n\tat stepDefinitions.StepQuiz.page_Url_should_be(StepQuiz.java:61)\n\tat ✽.Then Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"(Second.feature:7)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "InCorrect answers",
  "description": "",
  "id": "secondsample;incorrect-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for quizTwo QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "secondsample;incorrect-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 33,
      "id": "secondsample;incorrect-answers;;1"
    },
    {
      "cells": [
        "1",
        "Reasons"
      ],
      "line": 34,
      "id": "secondsample;incorrect-answers;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "InCorrect answers",
  "description": "",
  "id": "secondsample;incorrect-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A first sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for quizTwo QFirst as \"1\" and QSecond as \"Reasons\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 442391670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1713814701,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 123846579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-second-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 2092597412,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat org.testng.Assert.assertTrue(Assert.java:54)\n\tat stepDefinitions.StepQuiz.page_Url_should_be(StepQuiz.java:61)\n\tat ✽.Then Page Url should be \"http://localhost:4200/play/a-second-sample-quizz\"(Second.feature:24)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ThirdSample.feature");
formatter.feature({
  "line": 1,
  "name": "ThirdSample",
  "description": "",
  "id": "thirdsample",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Correct answers",
  "description": "",
  "id": "thirdsample;correct-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "thirdsample;correct-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 16,
      "id": "thirdsample;correct-answers;;1"
    },
    {
      "cells": [
        "Grün",
        "Noooooo..."
      ],
      "line": 17,
      "id": "thirdsample;correct-answers;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Correct answers",
  "description": "",
  "id": "thirdsample;correct-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter answer for QFirst as \"Grün\" and QSecond as \"Noooooo...\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check you passed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 499202868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1743321961,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 121879694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-third-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5017985149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grün",
      "offset": 28
    },
    {
      "val": "Noooooo...",
      "offset": 50
    }
  ],
  "location": "StepQuiz.enter_answer_for_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 206647386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5019761352,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "duration": 102073758,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 90323716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5021999495,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 74024304,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "InCorrect answers",
  "description": "",
  "id": "thirdsample;incorrect-answers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for QFirst as \"\u003canswer1\u003e\" and QSecond as \"\u003canswer2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "thirdsample;incorrect-answers;",
  "rows": [
    {
      "cells": [
        "answer1",
        "answer2"
      ],
      "line": 33,
      "id": "thirdsample;incorrect-answers;;1"
    },
    {
      "cells": [
        "Green",
        "I am god"
      ],
      "line": 34,
      "id": "thirdsample;incorrect-answers;;2"
    },
    {
      "cells": [
        "Verde",
        "From a certain point of view..."
      ],
      "line": 35,
      "id": "thirdsample;incorrect-answers;;3"
    },
    {
      "cells": [
        "Grün",
        "From a certain point of view..."
      ],
      "line": 36,
      "id": "thirdsample;incorrect-answers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "InCorrect answers",
  "description": "",
  "id": "thirdsample;incorrect-answers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for QFirst as \"Green\" and QSecond as \"I am god\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 474880927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1715688712,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 127717100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-third-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5021305518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 28
    },
    {
      "val": "I am god",
      "offset": 51
    }
  ],
  "location": "StepQuiz.enter_answer_for_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 182503559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5012556382,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 84355268,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 119375525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5024201357,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72846199,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "InCorrect answers",
  "description": "",
  "id": "thirdsample;incorrect-answers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for QFirst as \"Verde\" and QSecond as \"From a certain point of view...\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 502649741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1758326892,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 127866431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-third-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5020442536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Verde",
      "offset": 28
    },
    {
      "val": "From a certain point of view...",
      "offset": 51
    }
  ],
  "location": "StepQuiz.enter_answer_for_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 183922257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5018355345,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 54149836,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 88454219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5024891143,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72714520,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "InCorrect answers",
  "description": "",
  "id": "thirdsample;incorrect-answers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"http://localhost:4200/start\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on A third sample quiz button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Page Url should be \"http://localhost:4200/play/a-third-sample-quizz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter answer for QFirst as \"Grün\" and QSecond as \"From a certain point of view...\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Page Url should be \"http://localhost:4200/result\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "check you failed the quiz",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on TryAgain button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Page Url should be \"http://localhost:4200/start\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepQuiz.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 469563780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 16
    }
  ],
  "location": "StepQuiz.user_opens_URL(String)"
});
formatter.result({
  "duration": 1761267779,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 123553871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/play/a-third-sample-quizz",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5017468020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grün",
      "offset": 28
    },
    {
      "val": "From a certain point of view...",
      "offset": 50
    }
  ],
  "location": "StepQuiz.enter_answer_for_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 225389492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/result",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5012115327,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 106392977,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 126840789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/start",
      "offset": 20
    }
  ],
  "location": "StepQuiz.page_Url_should_be(String)"
});
formatter.result({
  "duration": 5023689541,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72666061,
  "status": "passed"
});
});