import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sharedValue = this.getSharedValue();
  }

  getSharedValue() {
    this.loggingService.logging('component=ChildTwoComponent, get sharedValue from SharedService');
    return this.sharedService.getSharedValue();
  }

}
