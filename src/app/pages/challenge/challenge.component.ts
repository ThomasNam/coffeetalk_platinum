import {Component, inject, OnInit, signal} from '@angular/core';
import {SearchFormComponent} from './search-form/search-form.component';
import {ChallengeService} from '../../services/challenge.service';
import {Recipe, RecipeSearch} from '../../models/recipe';
import {RecipeOneComponent} from '../../components/recipe-one/recipe-one.component';

@Component({
  selector: 'app-challenge',
  imports: [SearchFormComponent, RecipeOneComponent],
  templateUrl: './challenge.component.html',
  standalone: true,
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
  challengeService = inject(ChallengeService);

  searchRecipe = signal<Recipe[]>([]);

  ngOnInit(): void {
    this.challengeService.init();
  }


  onSearch(search: RecipeSearch) {
    this.searchRecipe.set(this.challengeService.search (search));
  }
}
