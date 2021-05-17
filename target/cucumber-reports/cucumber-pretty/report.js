$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Second.feature");
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
  "duration": 1196490443,
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
  "duration": 1918601231,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 1179902,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"pageObjects.FirstSample.clickBtnFirstQiz()\" because \"this.first\" is null\n\tat stepDefinitions.StepQuiz.clicks_on_A_first_sample_quiz_button(StepQuiz.java:135)\n\tat ✽.And Clicks on A first sample quiz button(src/main/java/Features/Second.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 519870203,
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
  "duration": 1958627536,
  "status": "passed"
});
formatter.match({
  "location": "StepQuiz.clicks_on_A_first_sample_quiz_button()"
});
formatter.result({
  "duration": 229245,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"pageObjects.FirstSample.clickBtnFirstQiz()\" because \"this.first\" is null\n\tat stepDefinitions.StepQuiz.clicks_on_A_first_sample_quiz_button(StepQuiz.java:135)\n\tat ✽.And Clicks on A first sample quiz button(src/main/java/Features/Second.feature:23)\n",
  "status": "failed"
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
  "status": "skipped"
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
});