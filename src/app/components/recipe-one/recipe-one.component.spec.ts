import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOneComponent } from './recipe-one.component';

describe('RecipeOneComponent', () => {
  let component: RecipeOneComponent;
  let fixture: ComponentFixture<RecipeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
