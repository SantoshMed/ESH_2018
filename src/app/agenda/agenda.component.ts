import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewWebcast() {
    this.router.navigate(['landing/livewebcast']);
  }

}
