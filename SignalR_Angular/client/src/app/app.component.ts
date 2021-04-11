import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';

  /**
   *
   */
  constructor(public signalRService: SignalrService) {
    
  }
  ngOnInit() {
    this.signalRService.startConnection();

    setTimeout(() => {
      this.signalRService.askServerListener();
      this.signalRService.askServer();
    }, 2000)
  }

  ngOnDestroy() {
    this.signalRService.hubConnection.off("askServerResponse");
  }
}
