$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/19515/eclipse-workspace-new/CucumberJavaSeleniumDemo/FreeCrmBDDFramework/src/main/java/Features/homePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@HomePageFeature"
    }
  ],
  "line": 2,
  "name": "Swag Labs home page feature",
  "description": "",
  "id": "swag-labs-home-page-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Swag Labs home page drop down to list products test",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@homeDropdownCheck"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e to login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify products as per dropdown \u003cvalue\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;",
  "rows": [
    {
      "cells": [
        "username",
        "value",
        "password"
      ],
      "line": 12,
      "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;1"
    },
    {
      "cells": [
        "standard_user",
        "Name (A to Z)",
        "secret_sauce"
      ],
      "line": 13,
      "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;2"
    },
    {
      "cells": [
        "standard_user",
        "Name (Z to A)",
        "secret_sauce"
      ],
      "line": 14,
      "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;3"
    },
    {
      "cells": [
        "standard_user",
        "Price (low to high)",
        "secret_sauce"
      ],
      "line": 15,
      "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;4"
    },
    {
      "cells": [
        "standard_user",
        "Price (high to low)",
        "secret_sauce"
      ],
      "line": 16,
      "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Swag Labs home page drop down to list products test",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@homeDropdownCheck"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters standard_user and secret_sauce to login",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify products as per dropdown Name (A to Z)",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 2665965300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.login_to_Swag_labs(String,String)"
});
formatter.result({
  "duration": 445479800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A to Z)",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.verify_products_as_per_drop_dpwn_list(String)"
});
formatter.result({
  "duration": 406980000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 684846900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Swag Labs home page drop down to list products test",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@homeDropdownCheck"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters standard_user and secret_sauce to login",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify products as per dropdown Name (Z to A)",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 1756090500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.login_to_Swag_labs(String,String)"
});
formatter.result({
  "duration": 521851300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.verify_products_as_per_drop_dpwn_list(String)"
});
formatter.result({
  "duration": 497430000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 713135000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Swag Labs home page drop down to list products test",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@homeDropdownCheck"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters standard_user and secret_sauce to login",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify products as per dropdown Price (low to high)",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 1662018000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.login_to_Swag_labs(String,String)"
});
formatter.result({
  "duration": 484066500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.verify_products_as_per_drop_dpwn_list(String)"
});
formatter.result({
  "duration": 425995500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 706332200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Swag Labs home page drop down to list products test",
  "description": "",
  "id": "swag-labs-home-page-feature;swag-labs-home-page-drop-down-to-list-products-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@homeDropdownCheck"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters standard_user and secret_sauce to login",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify products as per dropdown Price (high to low)",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 1704936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.login_to_Swag_labs(String,String)"
});
formatter.result({
  "duration": 525438700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.verify_products_as_per_drop_dpwn_list(String)"
});
formatter.result({
  "duration": 404351700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 720751200,
  "status": "passed"
});
});