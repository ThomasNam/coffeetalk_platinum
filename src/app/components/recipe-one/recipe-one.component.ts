import {Component, computed, inject, input} from '@angular/core';
import {Recipe} from '../../models/recipe';
import {Md5Service} from '../../services/md5.service';

@Component({
  selector: 'app-recipe-one',
  imports: [],
  templateUrl: './recipe-one.component.html',
  standalone: true,
  styleUrl: './recipe-one.component.scss'
})
export class RecipeOneComponent {
  recipe = input.required<Recipe>();

  md5Sv: Md5Service = inject(Md5Service);

  idx = computed(() => {
    return this.md5Sv.generateMD5(this.recipe().name);
  })
}
