import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-rate-limiter',
  templateUrl: './logger-rate-limiter.component.html',
  styleUrls: ['./logger-rate-limiter.component.css']
})
export class LoggerRateLimiterComponent implements OnInit {
  contents: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log('[]', this.shouldPrintMessage(null, null));
    console.log('[1, "foo"]', this.shouldPrintMessage(1, 'foo'));
    console.log('[2, "bar"]', this.shouldPrintMessage(2, 'bar'));
    console.log('[3, "foo"]', this.shouldPrintMessage(3, 'foo'));
    console.log('[8, "bar"]', this.shouldPrintMessage(8, 'bar'));
    console.log('[10, "foo"]', this.shouldPrintMessage(10, 'foo'));
    console.log('[11, "foo"]', this.shouldPrintMessage(11, 'foo'));
  }

  shouldPrintMessage(timestamp: any, message: any) {
    if(!this.contents[message] || timestamp >= this.contents[message]) {
      this.contents[message] = timestamp +10;
      return true;
    }
    return false;
  }

}
