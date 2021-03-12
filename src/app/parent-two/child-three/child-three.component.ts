import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sharedValue = this.getSharedValue();
  }

  getSharedValue() {
    this.loggingService.logging('component=ChildThreeComponent, get sharedValue from SharedService');
    return this.sharedService.getSharedValue();
  }

}
