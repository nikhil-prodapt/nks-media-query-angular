import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescComponent } from './desc/desc.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { IconComponent } from './icon/icon.component';
import { Container1Component } from './container1/container1.component';
import { Container2Component } from './container2/container2.component';
import { Container3Component } from './container3/container3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, DescComponent, FooterComponent, LogoComponent, TitleComponent, IconComponent, Container1Component, Container2Component, Container3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
