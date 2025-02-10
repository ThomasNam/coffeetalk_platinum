import {Component, output, signal} from '@angular/core';
import {SearchFormCheckComponent, SearchOne} from '../search-form-check/search-form-check.component';
import {RecipeSearch, recipeTypeList} from '../../../models/recipe';

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

  onSearch = output<RecipeSearch>();

  private searchVal:RecipeSearch = {
    acerbity: '', cool: '', sweet: '', warn: ''
  }

  onUpdateSearchVal(val: SearchOne) {
    console.log(val);
    this.searchVal[val.key] = val.val;
  }

  searchWork() {
    this.onSearch.emit(this.searchVal);
  }
}
