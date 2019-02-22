import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }
  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }
}
