"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var example_1 = require("./example");
var smartPhone = /** @class */ (function (_super) {
    __extends(smartPhone, _super);
    function smartPhone(mobileId, mobileName, mobileCost) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileId = mobileId;
        _this.mobileName = mobileName;
        _this.mobileCost = mobileCost;
        return _this;
    }
    smartPhone.prototype.printMobileDetails = function () {
        _super.prototype.printMobileDetails.call(this);
        var mobileType = "smart Phone";
        console.log("     mobile type:" + mobileType);
    };
    return smartPhone;
}(example_1.Mobile));
exports.smartPhone = smartPhone;
