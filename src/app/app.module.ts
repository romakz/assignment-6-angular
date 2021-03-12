import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildOneComponent } from './parent-one/child-one/child-one.component';
import { ChildTwoComponent } from './parent-one/child-two/child-two.component';
import { ChildThreeComponent } from './parent-two/child-three/child-three.component';
import {LoggingService} from './service/logging.service';
import {SharedService} from './service/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoggingService,
    // SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
