import {Injectable} from '@angular/core';
import {Recipe} from '../../models/type/recipe_type';
import {Story} from '../../models/type/story_type';
import {allStory} from '../../models/ep1/story_e1';
import {recipes} from '../../models/ep1/recipe_e1';

@Injectable({
  providedIn: 'root'
})
export class StoryEp1Service {
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
