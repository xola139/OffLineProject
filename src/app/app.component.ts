import { Component } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from './online-status';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OffLineProject';
  status: OnlineStatusType = navigator.onLine ? 1:0;
  OnlineStatusType = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService,private swUpdate: SwUpdate) {

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // use status
      this.status = status;
      
    });
    swUpdate.available.subscribe(event => {
      //if (askUserToUpdate()) {
        console.log(".....Update");
        window.location.reload();
      //}
    });
 }
}