import {Component, inject, OnInit, signal} from '@angular/core';
import {SearchFormComponent} from './search-form/search-form.component';
import {ChallengeService} from '../../services/challenge.service';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-challenge',
  imports: [SearchFormComponent],
  templateUrl: './challenge.component.html',
  standalone: true,
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
  challengeService = inject(ChallengeService);
  search = signal<Recipe[]>([]);

  ngOnInit(): void {
    this.challengeService.init();
  }


}
