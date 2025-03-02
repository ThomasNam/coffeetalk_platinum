import {Recipe} from './recipe_type';

export interface StoryOne {
  name: string;
  recipeName: string;
  recipe?: Recipe;
}

export interface Story {
  dateStr: string;
  storyList: StoryOne[];
}
