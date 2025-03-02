import {Component, inject, signal} from '@angular/core';
import {RecipeOneComponent} from '../../../components/recipe-one/recipe-one.component';
import {SectionRecipes} from '../../../models/type/recipe_type';
import {RecipeEp2Service} from '../../../services/ep2/recipe-ep2.service';

@Component({
  selector: 'app-ep2-recipe',
  imports: [RecipeOneComponent],
  templateUrl: './ep2-recipe.component.html',
  standalone: true,
  styleUrl: './ep2-recipe.component.scss'
})
export class Ep2RecipeComponent {
  recipeService = inject(RecipeEp2Service);
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
