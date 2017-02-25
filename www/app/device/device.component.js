"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DeviceComponent = (function () {
    function DeviceComponent() {
        this.deviceDetails = "";
    }
    DeviceComponent.prototype.populateDeviceDetails = function () {
        var device = window.device;
        this.deviceDetails = "";
        this.deviceDetails += "<br/>Cordova:" + device.cordova;
        this.deviceDetails += "<br/>model:" + device.model;
        this.deviceDetails += "<br/>platform:" + device.platform;
        this.deviceDetails += "<br/>uuid:" + device.uuid;
        this.deviceDetails += "<br/>version:" + device.version;
        this.deviceDetails += "<br/>manufacturer:" + device.manufacturer;
        this.deviceDetails += "<br/>isVirtual:" + device.isVirtual;
        this.deviceDetails += "<br/>serial:" + device.serial;
    };
    return DeviceComponent;
}());
DeviceComponent = __decorate([
    core_1.Component({
        template: "\n    <h5>Device Component</h5>\n    <button (click)=\"populateDeviceDetails()\">Populate</button>\n    <div [innerHTML]=\"deviceDetails\">\n    </div>\n    "
    })
], DeviceComponent);
exports.DeviceComponent = DeviceComponent;
//# sourceMappingURL=device.component.js.map