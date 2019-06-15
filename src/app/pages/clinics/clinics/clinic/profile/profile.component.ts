import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  location;
  marker;
  constructor() { }

  ngOnInit() {
    this.location = {
      latitude: +33.515328,
      longitude: +36.303268
    }
    this.marker = this.location;
  }

}
