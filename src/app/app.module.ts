import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './base-layout/footer/footer.component';
import { HeaderComponent } from './base-layout/header/header.component';
import { SidebarComponent } from './base-layout/sidebar/sidebar.component';
import { LoginFormComponent } from './base-layout/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BaseLayoutComponent } from './base-layout/base-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginFormComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
