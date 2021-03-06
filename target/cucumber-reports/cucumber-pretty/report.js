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
  "duration": 1194099923,
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
  "duration": 2059251445,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_add_new_button()"
});
formatter.result({
  "duration": 119662686,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.give_name_to_quiz()"
});
formatter.result({
  "duration": 139776063,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.save_page_loaded()"
});
formatter.result({
  "duration": 87467643,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.save_quiz()"
});
formatter.result({
  "duration": 3147323114,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.fresh_page_is_loaded()"
});
formatter.result({
  "duration": 46428931,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 73855339,
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
  "duration": 521517445,
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
  "duration": 1761326040,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 126655304,
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
  "duration": 5026219171,
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
  "duration": 3188057737,
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
  "duration": 5023533549,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "duration": 85284772,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 98057641,
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
  "duration": 5023863952,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72398192,
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
  "duration": 462110046,
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
  "duration": 1873469575,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 131773252,
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
  "duration": 5020569649,
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
  "duration": 3028671063,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027I am a rockstar\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027del1-lhp-n72302\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-53-generic\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /tmp/.com.google.Chrome.RZFjlQ}, goog:chromeOptions: {debuggerAddress: localhost:36161}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d6d9ac341458105d1cb0e656ed9a92f1\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027I am a rockstar\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\n\tat pageObjects.FirstSample.getOption6(FirstSample.java:64)\n\tat stepDefinitions.StepQuiz.enter_answer_for_quizOne_QFirst_as_and_QSecond_as(StepQuiz.java:177)\n\tat ???.Then Enter answer for quizOne QFirst as \"Love\" and QSecond as \"I am a rockstar\"(FirstSample.feature:25)\n",
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
  "name": "Clicks on A second sample quiz button",
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
  "name": "Clicks on A second sample quiz button",
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
  "duration": 537399594,
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
  "duration": 1792253667,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_second_sample_quiz_button()"
});
formatter.result({
  "duration": 144312384,
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
  "duration": 5024518695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What?",
      "offset": 36
    },
    {
      "val": "Reasons",
      "offset": 59
    }
  ],
  "location": "StepQuiz.enter_answer_for_quizTwo_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 3198339827,
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
  "duration": 5020114485,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "duration": 113756926,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 127537465,
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
  "duration": 5021002815,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 84468533,
  "status": "passed"
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
  "name": "Clicks on A second sample quiz button",
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
  "name": "Clicks on A second sample quiz button",
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
  "duration": 531787436,
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
  "duration": 1884371994,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_second_sample_quiz_button()"
});
formatter.result({
  "duration": 158957070,
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
  "duration": 5021284138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "Reasons",
      "offset": 55
    }
  ],
  "location": "StepQuiz.enter_answer_for_quizTwo_QFirst_as_and_QSecond_as(String,String)"
});
formatter.result({
  "duration": 3258258996,
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
  "duration": 5019727929,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 79643662,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 101494213,
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
  "duration": 5022958911,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 73680719,
  "status": "passed"
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
        "Gr??n",
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
  "name": "Enter answer for QFirst as \"Gr??n\" and QSecond as \"Noooooo...\"",
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
  "duration": 464145802,
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
  "duration": 1906048317,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 135037572,
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
  "duration": 5021113701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gr??n",
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
  "duration": 182773984,
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
  "duration": 5017476459,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_passed_the_quiz()"
});
formatter.result({
  "duration": 116090141,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 116447489,
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
  "duration": 5018494265,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 71717107,
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
        "Gr??n",
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
  "duration": 510001635,
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
  "duration": 1865466467,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 135920321,
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
  "duration": 5022412779,
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
  "duration": 188519095,
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
  "duration": 5017617078,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 102119585,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 183716087,
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
  "duration": 5023727705,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 74458470,
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
  "duration": 453892797,
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
  "duration": 1898135064,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 126719671,
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
  "duration": 5021638857,
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
  "duration": 208178396,
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
  "duration": 5018370839,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 98698977,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 108857977,
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
  "duration": 5026134551,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 72691061,
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
  "name": "Enter answer for QFirst as \"Gr??n\" and QSecond as \"From a certain point of view...\"",
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
  "duration": 448361086,
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
  "duration": 1747822758,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_third_sample_quiz_button()"
});
formatter.result({
  "duration": 141049249,
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
  "duration": 5018894683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gr??n",
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
  "duration": 177387331,
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
  "duration": 5012412858,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.check_you_failed_the_quiz()"
});
formatter.result({
  "duration": 74090246,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.click_on_TryAgain_button()"
});
formatter.result({
  "duration": 117929990,
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
  "duration": 5021625042,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.close_browser()"
});
formatter.result({
  "duration": 70828402,
  "status": "passed"
});
});