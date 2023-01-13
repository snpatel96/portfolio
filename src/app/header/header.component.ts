import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  nav = true;
  links = ['home', 'about', 'portfolio', 'skills', 'contact'];
  onOpenNav() {
    this.nav = !this.nav;
  }

  constructor(private scroller: ViewportScroller) {}
  onClick(link: string) {
    document.getElementById(link)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  onClickMobile(link: string) {
    document.getElementById(link)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    this.nav = !this.nav;
  }
}
