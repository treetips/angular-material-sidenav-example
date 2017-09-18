import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppbarModule } from './appbar/appbar.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { HelloModule } from './hello/hello.module';
import { TopModule } from './top/top.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    AppbarModule,
    SidenavModule,
    HelloModule,
    TopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
