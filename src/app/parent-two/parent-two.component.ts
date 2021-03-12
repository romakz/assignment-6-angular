import { Component, OnInit } from "@angular/core";
import { SharedService } from "../service/shared.service";
import { LoggingService } from "../service/logging.service";

@Component({
  selector: "app-parent-two",
  templateUrl: "./parent-two.component.html",
  styleUrls: ["./parent-two.component.scss"],
  providers: [SharedService]
})
export class ParentTwoComponent implements OnInit {
  sharedValue;

  constructor(
    private sharedService: SharedService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.setNewSharedValue("new value 2");
    this.sharedValue = this.getSharedValue();
  }

  getSharedValue(): string {
    this.loggingService.logging(
      "component=ParentTwoComponent, get sharedValue from SharedService"
    );
    return this.sharedService.getSharedValue();
  }

  setNewSharedValue(newSharedValue: string) {
    this.loggingService.logging(
      "ParentTwoComponent call setNewSharedValue method"
    );
    this.sharedService.setNewSharedValue(newSharedValue);
  }
}
