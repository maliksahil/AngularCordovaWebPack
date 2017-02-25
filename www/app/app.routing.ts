import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'device', component: DeviceComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);