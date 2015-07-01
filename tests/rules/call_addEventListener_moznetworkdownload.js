/**
 * @fileoverview Test for call_addEventListener_moznetworkdownload rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/call_addEventListener_moznetworkdownload", {
    valid: [
        { code: "window.addEventListener('moznetworkupload', uploadHandler);" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.addEventListener('moznetworkdownload', downloadHandler);",
            errors: [
                { message: "The function addEventListener with parameter moznetworkdownload can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json