import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-shell-header></app-shell-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
