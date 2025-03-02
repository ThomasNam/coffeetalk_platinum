import {Component, inject, OnInit, signal} from '@angular/core';
import {SearchFormComponent} from '../../../components/search/search-form/search-form.component';
import {ChallengeEp1Service} from '../../../services/ep1/challenge-ep1.service';
import {RecipeOneComponent} from '../../../components/recipe-one/recipe-one.component';
import {Recipe, RecipeSearch} from '../../../models/type/recipe_type';

@Component({
  selector: 'app-challenge',
  imports: [SearchFormComponent, RecipeOneComponent],
  templateUrl: './challenge.component.html',
  standalone: true,
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
  challengeService = inject(ChallengeEp1Service);

  searchRecipe = signal<Recipe[]>([]);

  ngOnInit(): void {
    this.challengeService.init();
  }

  onSearch(search: RecipeSearch) {
    this.searchRecipe.set(this.challengeService.search (search));
  }
}
