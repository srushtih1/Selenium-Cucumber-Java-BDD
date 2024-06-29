$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 2,
  "name": "Swag Labs home page feature",
  "description": "",
  "id": "swag-labs-home-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePageFeature"
    }
  ]
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
    },
    {
      "line": 4,
      "name": "@RegressionTest"
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
      "line": 1,
      "name": "@HomePageFeature"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    },
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
  "duration": 3343984400,
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
  "duration": 608904400,
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
  "duration": 474693300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 735970000,
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
      "line": 1,
      "name": "@HomePageFeature"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    },
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
  "duration": 2318421500,
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
  "duration": 1152995100,
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
  "duration": 534667300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 730808600,
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
      "line": 1,
      "name": "@HomePageFeature"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    },
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
  "duration": 2126965300,
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
  "duration": 840238500,
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
  "duration": 648009000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 801756600,
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
      "line": 1,
      "name": "@HomePageFeature"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    },
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
  "duration": 2294939600,
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
  "duration": 907723600,
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
  "duration": 639757500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 722724500,
  "status": "passed"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Swag Labs login feature",
  "description": "",
  "id": "swag-labs-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Swag Labs login test scenario",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginCheck"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
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
  "name": "title of login page is SwagLabs",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 2113127500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 20858600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_password()"
});
formatter.result({
  "duration": 610214300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_login_button()"
});
formatter.result({
  "duration": 119384900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_user_on_home_page()"
});
formatter.result({
  "duration": 111905500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 706387100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Swag Labs login test scenario with Examples data driven",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-examples-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@LoginCheckWithExamples"
    },
    {
      "line": 22,
      "name": "@DataDrivenTypesTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e to login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-examples-data-driven;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-examples-data-driven;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 30,
      "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-examples-data-driven;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Swag Labs login test scenario with Examples data driven",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-examples-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@LoginCheckWithExamples"
    },
    {
      "line": 22,
      "name": "@DataDrivenTypesTest"
    },
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters standard_user and secret_sauce to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 2053981900,
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
  "duration": 872148600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 723460000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Swag Labs login test scenario with Data tables approach for data driven",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-data-tables-approach-for-data-driven",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@LoginCheckWithDataTablesApproachwithList"
    },
    {
      "line": 32,
      "name": "@DataDrivenTypesTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "title of login page is SwagLabs",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "login with username and password data",
  "rows": [
    {
      "cells": [
        "visual_user",
        "secret_sauce"
      ],
      "line": 37
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 2246372800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 10733900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_with_datatable_use(DataTable)"
});
formatter.result({
  "duration": 490200700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_login_button()"
});
formatter.result({
  "duration": 274386800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_user_on_home_page()"
});
formatter.result({
  "duration": 122322500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 725207500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Swag Labs login test scenario with Data tables approach for data driven using Maps",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario-with-data-tables-approach-for-data-driven-using-maps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@LoginCheckWithDataTablesApproachWithMap"
    },
    {
      "line": 42,
      "name": "@DataDrivenTypesTest"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "title of login page is SwagLabs",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "add username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 47
    },
    {
      "cells": [
        "visual_user",
        "secret_sauce"
      ],
      "line": 48
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 49
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 2257472900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 10510900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_with_datatable_with_maps(DataTable)"
});
formatter.result({
  "duration": 1778359100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 707589400,
  "status": "passed"
});
});