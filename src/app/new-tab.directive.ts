
import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';

function getWindow (): any {
  return window;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[NewTab]'
})
export class NewTabDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') link: string;
  constructor(private el: ElementRef) { }

  @HostListener('mousedown') onMouseEnter() {
    getWindow().open(this.link || '');
}

}
