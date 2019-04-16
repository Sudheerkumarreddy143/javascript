"use strict";
exports.__esModule = true;
var basicphone_1 = require("./basicphone");
var smartphone_1 = require("./smartphone");
var a = new basicphone_1.BasicPhone(123, "nokia", 8000);
var b = new smartphone_1.smartPhone(124, "coolpad", 7000);
a.printMobileDetails();
b.printMobileDetails();
