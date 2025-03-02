import {Component, output, QueryList, signal, ViewChildren} from '@angular/core';
import {SearchFormCheckComponent, SearchOne} from '../search-form-check/search-form-check.component';
import {RecipeSearch, recipeTypeList} from '../../../../models/type/recipe_type';

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

  @ViewChildren(SearchFormCheckComponent) childSearchList!: QueryList<SearchFormCheckComponent>;

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

  clear() {
    this.childSearchList.forEach(child => child.clear());
  }
}
