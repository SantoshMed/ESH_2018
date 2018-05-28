import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Services/country.service';
import { Router } from '@angular/router';
import { ViewModeService } from '../Services/view-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  constructor(
    private router: Router,
    private viewService: ViewModeService,
    private service: CountryService
  ) {
    this.username = localStorage.getItem('name');
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    // console.log( this.service.isLoggedIn() );
    this.viewService.isVisibleValue = false;
    this.router.navigate(['/']);
  }
}
