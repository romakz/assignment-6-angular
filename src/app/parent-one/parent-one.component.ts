import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss'],
  providers: [SharedService]
})
export class ParentOneComponent implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sharedValue = this.getSharedValue();
  }

  getSharedValue(): string {
    this.loggingService.logging('component=ParentOneComponent, get sharedValue from SharedService, method getSharedValue');
    return this.sharedService.getSharedValue();
  }

}
