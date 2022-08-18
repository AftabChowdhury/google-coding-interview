import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggerRateLimiterComponent } from './components/logger-rate-limiter/logger-rate-limiter.component';
import { EvaluateReversePolishNotationComponent } from './components/evaluate-reverse-polish-notation/evaluate-reverse-polish-notation.component';
import { MeetingRoomsComponent } from './components/meeting-rooms/meeting-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerRateLimiterComponent,
    EvaluateReversePolishNotationComponent,
    MeetingRoomsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
