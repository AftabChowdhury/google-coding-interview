import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggerRateLimiterComponent } from './components/logger-rate-limiter/logger-rate-limiter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerRateLimiterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
