import { Component } from '@angular/core';
import {LoggingService} from './service/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab6-services';

  constructor(private loggingService: LoggingService) {}

  getLoggingMessage(): string[] {
    this.loggingService.logging('component=AppComponent, do logging method in LoggingService');
    return this.loggingService.getLoggingMessage();
  }
}
