import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: '', component: TopComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {});

