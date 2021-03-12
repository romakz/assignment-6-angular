import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sharedValue = this.getSharedValue();
  }

  getSharedValue() {
    this.loggingService.logging('component=ChildOneComponent, get sharedValue from SharedService');
    return this.sharedService.getSharedValue();
  }

}
