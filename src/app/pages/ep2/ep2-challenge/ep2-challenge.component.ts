import {Component, inject, signal} from '@angular/core';
import {ChallengeEp2Service} from '../../../services/ep2/challenge-ep2.service';
import {Recipe, RecipeSearch} from '../../../models/type/recipe_type';
import {RecipeOneComponent} from '../../../components/recipe-one/recipe-one.component';
import {SearchFormComponent} from '../../../components/search/search-form/search-form.component';

@Component({
  selector: 'app-ep2-challenge',
  imports: [
    RecipeOneComponent,
    SearchFormComponent
  ],
  templateUrl: './ep2-challenge.component.html',
  standalone: true,
  styleUrl: './ep2-challenge.component.scss'
})
export class Ep2ChallengeComponent {
  challengeService = inject(ChallengeEp2Service);

  searchRecipe = signal<Recipe[]>([]);

  ngOnInit(): void {
    this.challengeService.init();
  }


  onSearch(search: RecipeSearch) {
    this.searchRecipe.set(this.challengeService.search (search));
  }
}
