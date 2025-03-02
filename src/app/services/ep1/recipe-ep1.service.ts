import {Injectable, signal} from '@angular/core';
import {recipes} from '../../models/ep1/recipe_e1';

@Injectable({
  providedIn: 'root'
})
export class RecipeEp1Service {
  allRecipes = signal(recipes);
}
