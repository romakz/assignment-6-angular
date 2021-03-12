import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class SharedService {
  sharedValue = 'Test shared value';

  constructor(private loggingService: LoggingService) { }

  public getSharedValue() {
    this.loggingService.logging('get sharedValue=' + this.sharedValue);
    return this.sharedValue;
  }

  public setNewSharedValue(newShredValue: string) {
    this.sharedValue = newShredValue;
    this.loggingService.logging('set new sharedValue=' + this.sharedValue);
  }
}
