import { Component } from '@angular/core';
@Component({
    template: `
    <h5>Device Component</h5>
    <button (click)="populateDeviceDetails()">Populate</button>
    <div [innerHTML]="deviceDetails">
    </div>
    `
})

export class DeviceComponent {
    private deviceDetails = "";
    populateDeviceDetails() {
        var device:Device = (<any>window).device;
        this.deviceDetails = "";
        this.deviceDetails += "<br/>Cordova:" + device.cordova;
        this.deviceDetails += "<br/>model:" + device.model;
        this.deviceDetails += "<br/>platform:" + device.platform;
        this.deviceDetails += "<br/>uuid:" + device.uuid;
        this.deviceDetails += "<br/>version:" + device.version;
        this.deviceDetails += "<br/>manufacturer:" + device.manufacturer;
        this.deviceDetails += "<br/>isVirtual:" + device.isVirtual;
        this.deviceDetails += "<br/>serial:" + device.serial;
    }
}