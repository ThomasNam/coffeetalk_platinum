import { Component } from '@angular/core';
import {SearchFormComponent} from './search-form/search-form.component';

@Component({
  selector: 'app-challenge',
  imports: [SearchFormComponent],
  templateUrl: './challenge.component.html',
  standalone: true,
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent {

}
