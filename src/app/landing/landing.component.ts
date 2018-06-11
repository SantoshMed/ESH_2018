import { Component, OnInit } from '@angular/core';
import { ViewModeService } from '../Services/view-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private viewServise: ViewModeService) { }

  ngOnInit() {
  }

  openPopup(e) {
    if (e.currentTarget.value === '0') {
      this.viewServise.viewModeValue = 'signin';
      this.viewServise.isResetValue = true;
    } else if(e.currentTarget.value === '1') {
      this.viewServise.viewModeValue = 'register';
    }else if(e.currentTarget.value === '2') {
      this.viewServise.viewModeValue = 'privacy';
    }
    this.viewServise.isVisibleValue = true;
  }

  closePopup() {
    this.viewServise.isVisibleValue = false;
  }
  setViewMode(mode) {
    this.viewServise.viewModeValue = mode;
    this.viewServise.isResetValue = true;
  }
  get viewMode() {
    return this.viewServise.viewModeValue;
  }

  get isVisible() {
    return this.viewServise.isVisibleValue;
  }

}
