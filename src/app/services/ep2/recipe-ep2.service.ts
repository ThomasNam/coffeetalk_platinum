import {Injectable, signal} from '@angular/core';
import {recipes} from '../../models/ep2/recipe_e2';

@Injectable({
  providedIn: 'root'
})
export class RecipeEp2Service {
  allRecipes = signal(recipes);
}
