import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  declarations: [
    SidenavComponent,
  ],
  exports: [
    SidenavComponent,
  ]
})
export class SidenavModule { }
