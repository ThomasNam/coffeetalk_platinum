import {Component, signal} from '@angular/core';
import {SearchFormCheckComponent} from '../search-form-check/search-form-check.component';
import {recipeTypeList} from '../../../models/recipe';

@Component({
  selector: 'app-search-form',
  imports: [
    SearchFormCheckComponent
  ],
  templateUrl: './search-form.component.html',
  standalone: true,
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  recipeType = signal(recipeTypeList);
}
