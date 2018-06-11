import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livewebcast',
  templateUrl: './livewebcast.component.html',
  styleUrls: ['./livewebcast.component.css']
})
export class LivewebcastComponent implements OnInit {
  name: string;
  email: string;
  constructor() {
    this.name = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('emial');
  }

  ngOnInit() {
  }
  viewWebcast() {
    // tslint:disable-next-line:max-line-length
    window.open('http://medtrix.wstream.net/eshre2018/?email=' + this.email + '&name=' + this.name, '_blank', 'width=1000px,height=650px,resizable=yes');
  }
}
