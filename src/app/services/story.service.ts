import {Injectable, signal} from '@angular/core';
import {Recipe, recipes} from '../models/recipe';
import {allStory, Story} from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  getStory(): Story[] {
    const recipeMap: {[key:string]: Recipe} = {};

    return allStory.map((story: Story) => {
      const newStory: Story = {...story};

      newStory.storyList.map((one) => {
        if (recipeMap.hasOwnProperty(one.recipeName)) {
          one.recipe = recipeMap[one.recipeName];
        }
        else {
          const recipe = recipes.find((r) => r.name === one.recipeName)
          if (recipe) {
            recipeMap[one.recipeName] = recipe;
            one.recipe = recipe;
          }
        }
      });

      return newStory;
    });
  }
}
