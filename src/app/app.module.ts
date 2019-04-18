import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavModule} from './side-nav/side-nav.module';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideNavModule,
    LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
