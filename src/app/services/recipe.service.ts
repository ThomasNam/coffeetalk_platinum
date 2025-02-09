import {Injectable, signal} from '@angular/core';
import {recipes} from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  allRecipes = signal(recipes);
}
