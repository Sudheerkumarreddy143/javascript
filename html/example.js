"use strict";
exports.__esModule = true;
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.mobileId = mobileId;
        this.mobileName = mobileName;
        this.mobileCost = mobileCost;
    }
    Mobile.prototype.printMobileDetails = function () {
        console.log("Mobile Id:" + this.mobileId + ",\n            Mobile Name:" + this.mobileName + "\n            Mobile Cost:" + this.mobileCost);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
