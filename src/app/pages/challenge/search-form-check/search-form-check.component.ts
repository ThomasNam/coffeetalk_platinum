import {Component, input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasteType} from '../../../models/taste';

export type SearchOne = {
  key: TasteType,
  val: string;
}

@Component({
  selector: 'app-search-form-check',
  imports: [
    FormsModule
  ],
  templateUrl: './search-form-check.component.html',
  standalone: true,
  styleUrl: './search-form-check.component.scss'
})
export class SearchFormCheckComponent {
  tsType = input.required<TasteType>();
  tsName = input.required<string>();

  tasteLv = signal('');

  checkVal = output<SearchOne>();

  onTasteLvChange(value: string) {
    this.tasteLv.set(value);

    this.checkVal.emit({key: this.tsType(), val: value});
  }
}
