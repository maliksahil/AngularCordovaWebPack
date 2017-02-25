import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
    imports: [
        routing,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        DeviceComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }