import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material';
import {SideNavComponent} from './side-nav.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatSidenavModule,

  ],
  declarations: [SideNavComponent],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
