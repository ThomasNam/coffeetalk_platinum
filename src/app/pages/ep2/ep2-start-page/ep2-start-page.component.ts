import { Component } from '@angular/core';
import {Ep2NavbarComponent} from '../navbar/ep2-navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-ep2-start-page',
  imports: [Ep2NavbarComponent, RouterOutlet],
  templateUrl: './ep2-start-page.component.html',
  standalone: true,
  styleUrl: './ep2-start-page.component.scss'
})
export class Ep2StartPageComponent {

}
