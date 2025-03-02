import {Component, inject, OnInit, signal} from '@angular/core';
import {RecipeEp1Service} from '../../../services/ep1/recipe-ep1.service';
import {RecipeOneComponent} from '../../../components/recipe-one/recipe-one.component';
import {SectionRecipes} from '../../../models/type/recipe_type';

@Component({
  selector: 'app-recipe',
  imports: [
    RecipeOneComponent
  ],
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  recipeService = inject(RecipeEp1Service);
  sectionRecipes = signal<SectionRecipes[]>([]);

  ngOnInit(): void {
    const sections: SectionRecipes[] = [];
    let section: SectionRecipes|null = null;

    for (let recipe of this.recipeService.allRecipes()) {
      if (!section || section.section !== recipe.base) {
        if (section) {
          sections.push(section!);
        }
        section = {section: recipe.base, recipes: []};
      }

      if (!recipe.noNote) {
        section.recipes.push(recipe);
      }
    }

    sections.push(section!);

    this.sectionRecipes.set(sections);
  }
}
