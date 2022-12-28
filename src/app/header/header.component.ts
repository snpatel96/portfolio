import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  nav = true;
  links = ['home', 'about', 'portfolio', 'experience', 'contact'];

  onOpenNav() {
    this.nav = !this.nav;
  }
}
