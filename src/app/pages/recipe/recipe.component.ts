import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {SectionRecipes} from '../../models/recipe';
import {RecipeOneComponent} from '../../components/recipe-one/recipe-one.component';

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
  recipeService = inject(RecipeService);
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
