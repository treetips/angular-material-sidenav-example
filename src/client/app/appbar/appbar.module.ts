import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppbarComponent } from './appbar.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  declarations: [
    AppbarComponent,
  ],
  exports: [
    AppbarComponent,
  ]
})
export class AppbarModule { }
