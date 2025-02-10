import {Component, input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
  tsType = input.required<string>();
  tsName = input.required<string>();

  tasteLv = signal('');

  onTasteLvChange(value: string) {
    console.log('선택된 값:', value);
    this.tasteLv.set(value);
  }
}
