import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-ep1-start-page',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './ep1-start-page.component.html',
  standalone: true,
  styleUrl: './ep1-start-page.component.scss'
})
export class Ep1StartPageComponent {

}
